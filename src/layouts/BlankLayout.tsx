import React, { Fragment, useEffect, useState } from 'react';
import AWSAppSyncClient from 'aws-appsync';
import AWS from 'aws-sdk';
import { Auth } from 'aws-amplify';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloProviderHooks } from 'react-apollo-hooks';
import { Rehydrated } from 'aws-appsync-react';
import { Spin, ConfigProvider } from 'antd';
import es_ES from 'antd/es/locale-provider/es_ES';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

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

AWS.config.update({
  accessKeyId: 'AKIAU7ZI4HCKF4ONGVTM',
  secretAccessKey: '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',
  region: 'us-west-2',
});

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
            <ConfigProvider locale={es_ES}>
              <div>{children}</div>
            </ConfigProvider>
          </Fragment>
        </Rehydrated>
      </ApolloProviderHooks>
    </ApolloProvider>
  );
};

export default Layout;
