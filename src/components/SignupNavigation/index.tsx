import React from 'react';
import { useResponsive } from 'react-hooks-responsive';

import { getCurrentStepBusinessSignup } from '@/utils/utils';
import { StepTitle } from './styles';

const getMessage = (step: number, mobile: boolean): string => {
  switch (step) {
    case 0:
      return mobile ? 'Su Negocio' : 'Informacion del Negocio';
    case 1:
      return mobile ? 'Sus Servicios' : 'Sus Servicios';
    case 2:
      return mobile ? 'Sus profesionales' : 'Sus profesionales';
    default:
      return '';
  }
};

const SignupNavigation = () => {
  const { screenIsAtMost } = useResponsive({
    lg: 768,
  });

  const currentStep = getCurrentStepBusinessSignup();
  const isMobile = screenIsAtMost('lg');

  return (
    <StepTitle level={2} isMobile={isMobile}>
      {getMessage(currentStep, isMobile)}
    </StepTitle>
  );
};

export default SignupNavigation;
