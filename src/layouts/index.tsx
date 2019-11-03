import React, { useEffect, useState } from 'react';
import { createAppSyncLink } from 'aws-appsync';
import AWS from 'aws-sdk';
import Amplify, { Auth } from 'aws-amplify';
import { ApolloProvider } from '@apollo/react-hooks';
// import { Rehydrated } from 'aws-appsync-react'; aws does not supports apollo 3.0
import { ConfigProvider } from 'antd';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// import Rehydrated from './Rehydrated'; trying to create a custom one from https://github.com/awslabs/aws-mobile-appsync-sdk-js/issues/448
import es from 'antd/es/locale-provider/es_ES';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import awsconfig from '../../aws-exports';
import PageLoading from '@/components/PageLoading';

AWS.config.update({
  accessKeyId: 'AKIAU7ZI4HCKF4ONGVTM',
  secretAccessKey: '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',
  region: 'us-west-2',
});

Amplify.configure({
  API: {
    graphql_endpoint:
      'https://73tghdodqnbyvpyelxgj6crp4e.appsync-api.us-west-2.amazonaws.com/graphql',
    graphql_endpoint_iam_region: 'us-west-2',
  },
  Auth: {
    identityPoolId: 'us-west-2:69c0a3f7-e59e-45b1-822a-adf88f0b11ba',
    region: 'us-west-2',
    userPoolId: 'us-west-2_0cMsztLZw',
    userPoolWebClientId: '47gq87m8nk8n0llu29647s9o5f',
  },
});

const renderSpin = () => <PageLoading />;

export const AuthContext = React.createContext({
  isAuthenticated: false,
  isAuthCheckLoading: true,
  setAuthenticated: (_value: boolean) => {},
});

const Layout: React.FC = ({ children }) => {
  const [isAuthCheckLoading, setAuthCheckLoading] = useState(true);
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(() => {
        setAuthenticated(true);
        setAuthCheckLoading(false);
      })
      .catch(() => {
        setAuthenticated(false);
        setAuthCheckLoading(false);
      });
  }, []);

  const httpLink = createHttpLink({
    uri: awsconfig.aws_appsync_graphqlEndpoint,
  });

  const awsLink = createAppSyncLink({
    url: awsconfig.aws_appsync_graphqlEndpoint,
    region: awsconfig.aws_appsync_region,
    auth: {
      type: awsconfig.aws_appsync_authenticationType,
      credentials: () => Auth.currentCredentials(),
      jwtToken: async () => (await Auth.currentSession()).getAccessToken().getJwtToken(),
    },
    complexObjectsCredentials: () => Auth.currentCredentials(),
  });

  const client = new ApolloClient({
    link: awsLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  if (!client) return renderSpin();
  return (
    <ApolloProvider client={client}>
      {/* <Rehydrated> */}
      <ConfigProvider locale={es}>
        <AuthContext.Provider value={{ isAuthenticated, setAuthenticated, isAuthCheckLoading }}>
          {children}
        </AuthContext.Provider>
      </ConfigProvider>
      {/* </Rehydrated> */}
    </ApolloProvider>
  );
};

export default Layout;
