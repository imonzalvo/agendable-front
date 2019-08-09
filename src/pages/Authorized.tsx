import React from 'react';
import Amplify from 'aws-amplify';
import { Authenticator } from 'aws-amplify-react';

Amplify.configure({
  API: {
    graphql_endpoint:
      'https://l5hs5h46lrcp7ppzlmbamqjoa4.appsync-api.us-west-2.amazonaws.com/graphql',
    graphql_endpoint_iam_region: 'us-west-2',
  },
  Auth: {
    identityPoolId: 'us-west-2:69c0a3f7-e59e-45b1-822a-adf88f0b11ba',
    region: 'us-west-2',
    userPoolId: 'us-west-2_Y62JDY67L',
    userPoolWebClientId: '4o48ujknlhjip6r97pcavgvrbc',
  },
});

export default ({ children }: { children: any }): React.ReactNode => (
  <Authenticator>
    <App>{children}</App>
  </Authenticator>
);

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
}) => authState === 'signedIn' && children;
