import React, { useContext, useEffect } from 'react';
import { useResponsive } from 'react-hooks-responsive';

import Stepper from '@/components/BookingStepper';
import BookingInfo from '@/components/BookingInfo';
import { BookingContext } from '.';
import { BookingContainer, CardContainer, NavigationContainer } from './styles';
import BookingNavigation from '@/components/BookingNavigation';

const BookingLayout = ({ children }) => {
  const { currentStep, setCurrentStep, steps } = useContext(BookingContext);

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

  const getPreviousUrl = (): string | null => {
    switch (currentStep) {
      case 0:
        return null;
      case 1:
        return steps === 5 ? 'select-branch' : null;
      case 2:
        return 'select-service';
      case 3:
        return 'select-professional';
      case 4:
        return 'select-date';
      default:
        return null;
    }
  };

  const getCurrentStep = (): number => {
    const currentStep = location.pathname.split('/').pop();
    switch (currentStep) {
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
    <>
      <NavigationContainer>
        <BookingNavigation previousStep={getPreviousUrl()} />
        <Stepper active={currentStep} />
      </NavigationContainer>
      <BookingContainer>
        <CardContainer>{children}</CardContainer>
        {(screenIsAtLeast('lg') || currentStep === 4) && <BookingInfo />}
      </BookingContainer>
    </>
  );
};

export default BookingLayout;
