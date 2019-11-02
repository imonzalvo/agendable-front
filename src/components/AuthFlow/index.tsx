import React from 'react';
import { Row, Col } from 'antd';

import AuthFlowCard from './AuthFlowCard';

function AuthFlow() {
  return (
    <>
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
          <AuthFlowCard />
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
export { default as AuthFlowCard } from './AuthFlowCard';
