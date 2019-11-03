import React from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

const Stepper = ({ active, children }) => (
  <>
    <Steps size="small" current={active}>
      <Step title="Select branch" />
      <Step title="Select service" />
      <Step title="Select professional" />
      <Step title="Select Date" />
      <Step title="Confirmation" />
    </Steps>
    {children}
  </>
);

export default Stepper;
