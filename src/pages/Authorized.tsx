import React from 'react';
import Amplify from 'aws-amplify';
import { Authenticator } from 'aws-amplify-react';

import awsExports from '@/aws-exports';

Amplify.configure(awsExports);
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
