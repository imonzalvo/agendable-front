import React, { useState } from 'react';
import { Button } from 'antd';

import SignUp from './SignUp';
import Login from './Login';
import { CustomCard, AuthFlowStyles } from './styles';

function AuthFlow() {
  const [isLogin, setLogin] = useState(true);
  return (
    <>
      <AuthFlowStyles />
      <CustomCard
        title={isLogin ? 'Login' : 'Sign Up'}
        bordered
        actions={[
          <div>
            {isLogin ? 'Need an account?' : 'Already have an account?'}
            <Button type="link" onClick={() => setLogin(pS => !pS)}>
              {isLogin ? 'Sign Up' : 'Login'}
            </Button>
          </div>,
        ]}
      >
        {isLogin ? <Login /> : <SignUp />}
      </CustomCard>
    </>
  );
}

export default AuthFlow;
