import React, { useState } from 'react';

import { Steps } from 'antd';
import { ProfileOutlined } from '@ant-design/icons';
import AuthLayout from '@/layouts/AuthLayout';
import { BusinessForm, ServiceForm, EmployeeForm } from './forms';

const { Step } = Steps;
const Signup = () => {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <>
      <Steps current={currentStep}>
        <Step title="Bussines Information" icon={<ProfileOutlined className="icon" />} />
        <Step title="Services" icon={<ProfileOutlined className="icon" />} />
        <Step title="Employees" icon={<ProfileOutlined className="icon" />} />
      </Steps>
      {currentStep === 0 && <BusinessForm setCurrentStep={setCurrentStep} />}
      {currentStep === 1 && <ServiceForm setCurrentStep={setCurrentStep} />}
      {currentStep === 2 && <EmployeeForm setCurrentStep={setCurrentStep} />}
    </>
  );
};

export default (props: any) => (
  <AuthLayout>
    <Signup {...props} />
  </AuthLayout>
);
