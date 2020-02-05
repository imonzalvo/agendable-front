import React, { useState } from 'react';
import { Button } from 'antd';

import SignUp from './SignUp';
import Login from './Login';
import { CustomCard, AuthFlowStyles } from './styles';
import { formatMessage } from 'umi-plugin-locale';

function AuthFlow() {
  const [isLogin, setLogin] = useState(true);
  return (
    <>
      <AuthFlowStyles />
      <CustomCard
        title={formatMessage({ id: isLogin ? 'navBar.signIn' : 'navBar.signUp' })}
        bordered
        actions={[
          <div>
            {isLogin
              ? formatMessage({ id: 'navBar.needAccount' })
              : formatMessage({ id: 'navBar.alreadyHaveAccount' })}
            <Button type="link" onClick={() => setLogin(pS => !pS)}>
              {formatMessage({ id: isLogin ? 'navBar.signUp' : 'navBar.signIn' })}
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
