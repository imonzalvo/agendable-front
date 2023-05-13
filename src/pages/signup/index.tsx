import React, { useState } from 'react';

import { Steps } from 'antd';
import { ProfileOutlined } from '@ant-design/icons';
import { BusinessForm } from './forms';

const { Step } = Steps;
const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <>
      <Steps current={currentStep}>
        <Step title="Bussines Information" icon={<ProfileOutlined className="icon" />} />
        <Step title="Services" icon={<ProfileOutlined className="icon" />} />
        <Step title="Employees" icon={<ProfileOutlined className="icon" />} />
      </Steps>
      {currentStep === 1 && <BusinessForm />}
    </>
  );
};

export default Signup;
