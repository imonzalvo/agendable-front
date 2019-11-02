import React, { useEffect, useState } from 'react';
import AWSAppSyncClient from 'aws-appsync';
import AWS from 'aws-sdk';
import Amplify, { Auth } from 'aws-amplify';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloProviderHooks } from 'react-apollo-hooks';
import { Rehydrated } from 'aws-appsync-react';
import { ConfigProvider } from 'antd';
import es from 'antd/es/locale-provider/es_ES';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import awsconfig from '../../aws-exports';
import PageLoading from '@/components/PageLoading';
import { cognitoAuth, iamAuth } from './config';

const createClient = (auth: any) =>
  new AWSAppSyncClient({
    url: awsconfig.aws_appsync_graphqlEndpoint,
    region: awsconfig.aws_project_region,
    auth,
    disableOffline: true,
  });

async function getClient() {
  const credentials = await Auth.currentCredentials();
  const auth = credentials.authenticated ? cognitoAuth : iamAuth;
  return createClient(auth);
}

AWS.config.update({
  accessKeyId: 'AKIAU7ZI4HCKF4ONGVTM',
  secretAccessKey: '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',
  region: 'us-west-2',
});

Amplify.configure({
  API: {
    graphql_endpoint:
      'https://l5hs5h46lrcp7ppzlmbamqjoa4.appsync-api.us-west-2.amazonaws.com/graphql',
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
  const [client, setClient] = useState();
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

  useEffect(() => {
    getClient().then(c => {
      setClient(c);
    });
  }, []);

  if (!client) return renderSpin();
  return (
    <ApolloProvider client={client}>
      <ApolloProviderHooks client={client}>
        <Rehydrated>
          <ConfigProvider locale={es}>
            <AuthContext.Provider value={{ isAuthenticated, setAuthenticated, isAuthCheckLoading }}>
              {children}
            </AuthContext.Provider>
          </ConfigProvider>
        </Rehydrated>
      </ApolloProviderHooks>
    </ApolloProvider>
  );
};

export default Layout;
