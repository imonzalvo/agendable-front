import React, { useContext } from 'react';

import BookingNavigation from '../BookingNavigation';
import BookingStepper from '../BookingStepper';
import { BookingContext } from '@/layouts';
import { getCurrentStep } from '@/utils/utils';

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
    <div style={{ marginBottom: 48 }}>
      <BookingNavigation previousStep={getPreviousUrl()} />
      <BookingStepper />
    </div>
  );
};

export default BookingHeader;
