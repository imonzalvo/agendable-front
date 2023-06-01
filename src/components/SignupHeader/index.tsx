import React, { useContext } from 'react';

import { getCurrentStepBusinessSignup } from '@/utils/utils';
import { Header } from './styles';
import SignupNavigation from '../SignupNavigation';
import SignupStepper from '../SignupStepper';

const SignupHeader = () => {
  const currentStep = getCurrentStepBusinessSignup();
  return (
    <Header>
      <SignupNavigation />
      <SignupStepper steps={3} currentStep={currentStep} />
    </Header>
  );
};

export default SignupHeader;
