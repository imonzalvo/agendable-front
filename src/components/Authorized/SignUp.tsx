import React, { useState } from 'react';
import { Steps, Row, Col } from 'antd';

import GlobalStyles from './styles';
import SignUp1stStep from './SignUp1stStep';
import SignUp2ndStep from './SignUp2ndStep';
import SignUp3rdStep from './SignUp3rdStep';

function SignUp(): JSX.Element {
  const [currentStep, setCurrentStep] = useState(0);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const nextStep = () => setCurrentStep(s => s + 1);
  const prevStep = () => setCurrentStep(s => s - 1);

  const renderStep = () => {
    if (currentStep === 0) {
      return (
        <SignUp1stStep
          nextStep={nextStep}
          stateEmail={email}
          setEmail={setEmail}
          setPhoneNumber={setPhoneNumber}
          setUsername={setUsername}
        />
      );
    }
    if (currentStep === 1) {
      return (
        <SignUp2ndStep
          nextStep={nextStep}
          prevStep={prevStep}
          email={email}
          phoneNumber={phoneNumber}
          username={username}
        />
      );
    }
    if (currentStep === 2) {
      return <SignUp3rdStep prevStep={prevStep} username={username} nextStep={nextStep} />;
    }
    return null;
  };

  return (
    <Row>
      <GlobalStyles />
      <Col
        xs={{ span: 16, offset: 4 }}
        sm={{ span: 14, offset: 4 }}
        md={{ span: 12, offset: 6 }}
        lg={{ span: 9, offset: 7 }}
      >
        <h1>Create your Agendable account</h1>
        <Steps current={currentStep}>
          {[0, 1, 2].map(item => (
            <Steps.Step key={item} />
          ))}
        </Steps>
        <div className="steps-content">{renderStep()}</div>
      </Col>
    </Row>
  );
}
export default SignUp;
