import React, { useContext, useEffect } from 'react';
import { useResponsive } from 'react-hooks-responsive';

import Stepper from '@/components/BookingStepper';
import BookingInfo from '@/components/BookingInfo';
import { BookingContext } from '.';
import { BookingContainer, CardContainer } from './styles';

const BookingLayout = ({ children }) => {
  const { currentStep, setCurrentStep } = useContext(BookingContext);

  useEffect(() => {
    const step = getCurrentStep();
    setCurrentStep(step);
  }, [location]);

  const { screenIsAtLeast } = useResponsive({
    xs: 0,
    sm: 480,
    md: 576,
    lg: 768,
  });

  const getCurrentStep = (): number => {
    const pathname = location.pathname.split('/').pop();
    switch (pathname) {
      case 'select-branch':
        return 0;
      case 'select-service':
        return 1;
      case 'select-professional':
        return 2;
      case 'select-date':
        return 3;
      case 'confirm':
        return 4;
      default:
        return 0;
    }
  };

  return (
    <Stepper active={currentStep}>
      <BookingContainer>
        <CardContainer>{children}</CardContainer>
        {(screenIsAtLeast('lg') || currentStep === 4) && <BookingInfo />}
      </BookingContainer>
    </Stepper>
  );
};

export default BookingLayout;
