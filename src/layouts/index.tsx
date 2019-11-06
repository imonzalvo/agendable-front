import React, { useEffect, useState } from 'react';
import { createAppSyncLink, AUTH_TYPE } from 'aws-appsync';
import AWS from 'aws-sdk';
import Amplify, { Auth } from 'aws-amplify';
import { ApolloProvider } from '@apollo/react-hooks';
import RouterTypes from 'umi/routerTypes';
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
import BusinessGetter from '../components/BussinessGetter';

AWS.config.update({
  accessKeyId: 'AKIAU7ZI4HCKF4ONGVTM',
  secretAccessKey: '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',
  region: 'us-west-2',
});

Amplify.configure(awsconfig);

// Amplify.configure({
//   API: {
//     graphql_endpoint: awsconfig.aws_appsync_graphqlEndpoint,
//     graphql_endpoint_iam_region: awsconfig.aws_appsync_region,
//   },
//   Auth: {
//     identityPoolId: awsconfig.aws_cognito_identity_pool_id,
//     region: awsconfig.aws_cognito_region,
//     userPoolId: awsconfig.aws_user_pools_id,
//     userPoolWebClientId: awsconfig.aws_user_pools_web_client_id,
//   },
// });

const renderSpin = () => <PageLoading />;

export const AuthContext = React.createContext({
  isAuthenticated: false,
  isAuthCheckLoading: true,
  setAuthenticated: (_value: boolean) => {},
});

interface LayoutProps extends RouterTypes {
  children: any;
}

const Layout = ({ children, location }: LayoutProps) => {
  const [isAuthCheckLoading, setAuthCheckLoading] = useState(true);
  const [isAuthenticated, setAuthenticated] = useState(false);
  // const [business, setBusiness] = useState({ businessId: '', businessName: '', branches: [] });

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

  const awsLinkCognito = createAppSyncLink({
    url: awsconfig.aws_appsync_graphqlEndpoint,
    region: awsconfig.aws_appsync_region,
    auth: {
      type: awsconfig.aws_appsync_authenticationType,
      credentials: () => Auth.currentCredentials(),
      jwtToken: async () => (await Auth.currentSession()).getAccessToken().getJwtToken(),
    },
    complexObjectsCredentials: () => Auth.currentCredentials(),
  });

  const awsLinkGuest = createAppSyncLink({
    url: awsconfig.aws_appsync_graphqlEndpoint,
    region: awsconfig.aws_appsync_region,
    auth: { type: AUTH_TYPE.API_KEY, apiKey: awsconfig.aws_appsync_apiKey },
    complexObjectsCredentials: () => Auth.currentCredentials(),
  });

  const cognitoClient = new ApolloClient({
    link: awsLinkCognito.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const guestClient = new ApolloClient({
    link: awsLinkGuest.concat(httpLink),
    cache: new InMemoryCache(),
  });

  if (!cognitoClient || !guestClient) return renderSpin();
  return (
    <ApolloProvider client={isAuthenticated ? cognitoClient : guestClient}>
      {/* <Rehydrated> */}
      <ConfigProvider locale={es}>
        <AuthContext.Provider value={{ isAuthenticated, setAuthenticated, isAuthCheckLoading }}>
          <BusinessGetter pathname={location.pathname}>{children}</BusinessGetter>
        </AuthContext.Provider>
      </ConfigProvider>
      {/* </Rehydrated> */}
    </ApolloProvider>
  );
};

export default Layout;
