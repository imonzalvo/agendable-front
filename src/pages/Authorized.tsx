import React from 'react';
import Amplify from 'aws-amplify';
import { Authenticator } from 'aws-amplify-react';

Amplify.configure({
  Auth: {
    identityPoolId: 'us-west-2:e7d6cb26-9d6e-49cb-8e38-0cd72d88fae0',
    region: 'us-west-2',
    userPoolId: 'us-west-2_3J3rX6Mt2',
    userPoolWebClientId: '7dvumk2uu0gvs90oe1ptspcbjk',
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
