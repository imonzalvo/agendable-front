import React, { useState } from 'react';
import { Steps } from 'antd';

import SignUp1stStep from './SignUp1stStep';
import SignUp2ndStep from './SignUp2ndStep';
import SignUp3rdStep from './SignUp3rdStep';

function SignUp(): JSX.Element {
  const [currentStep, setCurrentStep] = useState(0);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const renderStep = () => {
    if (currentStep === 0) {
      return (
        <SignUp1stStep
          setCurrentStep={setCurrentStep}
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
          setCurrentStep={setCurrentStep}
          email={email}
          phoneNumber={phoneNumber}
          username={username}
        />
      );
    }
    if (currentStep === 2) {
      return <SignUp3rdStep setCurrentStep={setCurrentStep} email={email} />;
    }
    return null;
  };

  return (
    <>
      <Steps current={currentStep} style={{ display: 'flex' }}>
        {[0, 1, 2].map(item => (
          <Steps.Step key={item} />
        ))}
      </Steps>
      <div className="steps-content">{renderStep()}</div>
    </>
  );
}
export default SignUp;
