import React, { Fragment, useEffect, useState } from 'react';
import AWSAppSyncClient from 'aws-appsync';
import { Auth } from 'aws-amplify';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloProviderHooks } from 'react-apollo-hooks';
import { Rehydrated } from 'aws-appsync-react';
import { Spin } from 'antd';

import awsconfig from '../../aws-exports';
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

const renderSpin = () => (
  <div>
    <Spin size="large" />
  </div>
);

const Layout: React.FC = ({ children }) => {
  const [client, setClient] = useState();

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
          <Fragment>
            <div>{children}</div>
          </Fragment>
        </Rehydrated>
      </ApolloProviderHooks>
    </ApolloProvider>
  );
};

export default Layout;
