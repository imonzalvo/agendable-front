import React, { useContext } from 'react';

import BookingNavigation from '../BookingNavigation';
import BookingStepper from '../BookingStepper';
import { BookingContext } from '@/layouts';
import { getCurrentStep } from '@/utils/utils';
import { Header } from './styles';

const BookingHeader = () => {
  const { steps } = useContext(BookingContext);

  const getPreviousUrl = (): string | null => {
    const currentStep = getCurrentStep();
    switch (currentStep) {
      case 0:
        return null;
      case 1:
        return steps === 4 ? 'select-branch' : null;
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

  return (
    <Header>
      <BookingNavigation previousStep={getPreviousUrl()} />
      <BookingStepper />
    </Header>
  );
};

export default BookingHeader;
