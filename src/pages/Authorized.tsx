import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import Amplify, { Auth } from 'aws-amplify';
import SignUp from '@/components/Authorized';

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

export default ({ children }: { children: any }): React.ReactNode => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(() => {
        setAuthenticated(true);
        setIsLoading(false);
      })
      .catch(() => {
        setAuthenticated(false);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Spin size="large" />;

  return isAuthenticated ? <App>{children}</App> : <SignUp />;
};

const App = ({
  children,
  authState,
}: {
  children: any;
  authState?:
    | 'signIn'
    | 'signUp'
    | 'confirmSignIn'
    | 'confirmSignUp'
    | 'forgotPassword'
    | 'requireNewPassword'
    | 'verifyContact'
    | 'signedIn';
}) => children;
