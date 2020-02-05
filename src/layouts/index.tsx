import React, { useEffect, useState } from 'react';
import { AUTH_TYPE } from 'aws-appsync';
import { createAuthLink } from 'aws-appsync-auth-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';
import AWS from 'aws-sdk';
import Amplify, { Auth } from 'aws-amplify';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  createHttpLink,
} from '@apollo/client';
import RouterTypes from 'umi/routerTypes';
import { ConfigProvider } from 'antd';
import bugsnag from '@bugsnag/js';
import bugsnagReact from '@bugsnag/plugin-react';

// import Rehydrated from './Rehydrated'; trying to create a custom one from https://github.com/awslabs/aws-mobile-appsync-sdk-js/issues/448
import es from 'antd/es/locale-provider/es_ES';
import useSubdomain from '@/hooks/useSubdomain';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import awsconfig from '@/aws-exports';
import PageLoading from '@/components/PageLoading';
import BusinessGetter from '../components/BussinessGetter';

AWS.config.update({
  accessKeyId: 'AKIAU7ZI4HCKNTFQZHXN',
  secretAccessKey: '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',
  region: 'us-west-2',
});

Amplify.configure(awsconfig);

const bugsnagClient = bugsnag({
  apiKey: 'e2139c5caec0def8b147ed96825c201e',
  notifyReleaseStages: ['production', 'staging'],
  appVersion: '0.0.1',
});

bugsnagClient.use(bugsnagReact, React);
const ErrorBoundary = bugsnagClient.getPlugin('react');

const renderSpin = () => <PageLoading />;

export const AuthContext = React.createContext({
  isAuthenticated: false,
  isAuthCheckLoading: true,
  setAuthenticated: (_value: boolean) => {},
});

interface BookDataProps {
  branch?: null | {
    id: string;
    address: string;
  };
  service: {
    id: string;
    duration: number;
    price: number;
    name: string;
  };
  professional: null | {
    id: string;
    givenName: string;
  };
  date: string | null;
  id: string | null;
}

export const BookingContext = React.createContext({
  bookData: {
    branch: { id: '', address: '' },
    service: { id: '', duration: 0, price: 0, name: '' },
    professional: { id: '', givenName: '' },
    date: '',
    id: '',
  },
  setBookData: (_data: BookDataProps) => {},
  steps: 0,
  setSteps: (_value: number) => {},
});

interface LayoutProps extends RouterTypes {
  children: any;
}

const Layout = ({ children, location }: LayoutProps) => {
  const [isAuthCheckLoading, setAuthCheckLoading] = useState(true);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [bookData, setBookData] = useState({
    branch: null,
    service: { id: undefined, duration: undefined, price: undefined, name: undefined },
    professional: null,
    date: null,
    id: null,
  });
  const [steps, setSteps] = useState(5);
  const subdomain = useSubdomain();

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

  const url = awsconfig.aws_appsync_graphqlEndpoint;
  const region = awsconfig.aws_appsync_region;
  const cognitoAuth = {
    type: awsconfig.aws_appsync_authenticationType,
    credentials: () => Auth.currentCredentials(),
    jwtToken: async () => (await Auth.currentSession()).getAccessToken().getJwtToken(),
  };

  const guestAuth = {
    auth: { type: AUTH_TYPE.API_KEY, apiKey: awsconfig.aws_appsync_apiKey },
    complexObjectsCredentials: () => Auth.currentCredentials(),
  };

  const httpLink = createHttpLink({ uri: url });

  const link = ApolloLink.from([
    createAuthLink({
      url,
      region,
      auth: isAuthenticated ? cognitoAuth : guestAuth.auth,
    }),
    createSubscriptionHandshakeLink(url, httpLink),
  ]);

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

  return (
    <ErrorBoundary>
      {!client ? (
        renderSpin()
      ) : (
        <ApolloProvider client={client}>
          <ConfigProvider locale={es}>
            <AuthContext.Provider value={{ isAuthenticated, setAuthenticated, isAuthCheckLoading }}>
              <BookingContext.Provider
                value={{
                  bookData,
                  setBookData,
                  steps,
                  setSteps,
                }}
              >
                <BusinessGetter pathname={location.pathname} subdomain={subdomain}>
                  {children}
                </BusinessGetter>
              </BookingContext.Provider>
            </AuthContext.Provider>
          </ConfigProvider>
        </ApolloProvider>
      )}
    </ErrorBoundary>
  );
};

export default Layout;
