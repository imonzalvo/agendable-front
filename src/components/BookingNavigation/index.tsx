import React from 'react';
import router from 'umi/router';
import { useResponsive } from 'react-hooks-responsive';

import { getUrl, getCurrentStep } from '@/utils/utils';
import { Container, CloseIcon, ArrowLeftIcon, StepTitle } from './styles';

const getMessage = (step: number, mobile: boolean): string => {
  switch (step) {
    case 0:
      return mobile ? 'Selecciones local' : 'Seleccionar local';
    case 1:
      return mobile ? 'Seleccione un servicio' : 'Que servicio desea consumir?';
    case 2:
      return mobile ? 'Seleccione profesional' : 'Con que profesional desea realizarlo?';
    case 3:
      return mobile ? 'Dia y hora?' : 'Dia y hora?';
    case 4:
      return mobile ? 'Detalles' : 'Ultimo paso, ingrese sus datos';
    default:
      return '';
  }
};

const BookingNavigation = ({ previousStep }) => {
  const { screenIsAtMost } = useResponsive({
    lg: 768,
  });

  const currentStep = getCurrentStep();
  const isMobile = screenIsAtMost('lg');

  return (
    <Container>
      <ArrowLeftIcon
        hasPreviousStep={!previousStep}
        onClick={() => router.push(getUrl(`book/${previousStep}`))}
      />
      <StepTitle level={2} isMobile={isMobile}>
        {getMessage(currentStep, isMobile)}
      </StepTitle>
      <CloseIcon onClick={() => router.push(getUrl(''))} />
    </Container>
  );
};

export default BookingNavigation;
