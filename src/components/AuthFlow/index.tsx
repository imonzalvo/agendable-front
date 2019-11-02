import React, { useState } from 'react';
import { Row, Col, Button } from 'antd';

import SignUp from './SignUp';
import Login from './Login';
import { CustomCard, AuthFlowStyles } from './styles';

function AuthFlow() {
  const [isLogin, setLogin] = useState(true);
  return (
    <>
      <AuthFlowStyles />
      <Row
        align="middle"
        justify="center"
        style={{ minHeight: '100vh', alignItems: 'center', display: 'flex' }}
      >
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 14, offset: 4 }}
          md={{ span: 12, offset: 6 }}
          lg={{ span: 9, offset: 7 }}
        >
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
        </Col>
      </Row>
    </>
  );
}

export default AuthFlow;
export { default as Login } from './Login';
export { default as SignUp } from './SignUp';
export { default as SignUp1stStep } from './SignUp1stStep';
export { default as SignUp2ndStep } from './SignUp2ndStep';
export { default as SignUp3rdStep } from './SignUp3rdStep';
