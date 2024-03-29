import React, { useEffect, useMemo, useState } from 'react';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import RouterTypes from 'umi/routerTypes';
import { ConfigProvider } from 'antd';
import bugsnag from '@bugsnag/js';
import bugsnagReact from '@bugsnag/plugin-react';
import { getLocale } from 'umi-plugin-locale';

// import Rehydrated from './Rehydrated'; trying to create a custom one from https://github.com/awslabs/aws-mobile-appsync-sdk-js/issues/448
import es from 'antd/es/locale-provider/es_ES';
import en from 'antd/es/locale-provider/en_US';
import useSubdomain from '@/hooks/useSubdomain';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import PageLoading from '@/components/PageLoading';
import BusinessGetter from '../components/BussinessGetter';

const bugsnagClient = bugsnag({
  apiKey: 'e2139c5caec0def8b147ed96825c201e',
  notifyReleaseStages: ['production', 'staging'],
  appVersion: '0.0.1',
});

bugsnagClient.use(bugsnagReact, React);
const ErrorBoundary = bugsnagClient.getPlugin('react');

const renderSpin = () => <PageLoading />;

export const AuthContext = React.createContext({
  user: {
    id: '',
  },
  isAuthenticated: false,
  setAuthenticated: (_value: boolean) => {},
  setUser: (_value: any) => {},
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

export const SignupContext = React.createContext({
  businessData: {
    id: '',
  },
  setBusinessData: (_data: any) => {},
  steps: 0,
  setSteps: (_value: number) => {},
});

interface LayoutProps extends RouterTypes {
  children: any;
}

const Layout = ({ children, location }: LayoutProps) => {
  const [isAuthenticated, setAuthenticated] = useState(!!localStorage.getItem('token'));
  const [user, setUser] = useState(null);
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
    const storedUser = localStorage.getItem('user');
    if (!!storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  // const url = 'https://agendable-prod.fly.dev/graphql';
  // const url = 'https://agendable-dev.onrender.com/graphql';
  const url = `${process.env.UMI_APP_API_URL}`;
  // const url = 'http://localhost:8080/graphql';

  const httpLink = createHttpLink({ uri: url });

  const wsLink = new GraphQLWsLink(
    createClient({
      // url: 'wss://agendable-prod.fly.dev/graphql',
      url: `${process.env.UMI_APP_SOCKET_URL}`,

      // url: 'wss://localhost:8080/graphql',
    }),
  );

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    httpLink,
  );

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  console.log("process2", process.env, process.env.UMI_APP_API_URL, process.env.UMI_APP_SOCKET_URL)

  const client = new ApolloClient({
    link: authLink.concat(splitLink),
    cache: new InMemoryCache(),
  });

  const locale = getLocale() === 'es-ES' ? es : en;

  return (
    <ErrorBoundary>
      {!client ? (
        renderSpin()
      ) : (
        <ApolloProvider client={client}>
          <ConfigProvider locale={locale}>
            <AuthContext.Provider value={{ isAuthenticated, setAuthenticated, user, setUser }}>
              {location.pathname.includes('signup') ? (
                children
              ) : (
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
              )}
            </AuthContext.Provider>
          </ConfigProvider>
        </ApolloProvider>
      )}
    </ErrorBoundary>
  );
};

export default Layout;
