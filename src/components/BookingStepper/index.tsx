import React, { useContext } from 'react';
import { Steps } from 'antd';
import { formatMessage } from 'umi-plugin-locale';

import { BookingContext } from '@/layouts';
import { getCurrentStep } from '@/utils/utils';

const { Step } = Steps;

const BookingStepper = () => {
  const { steps } = useContext(BookingContext);

  const currentStep = getCurrentStep();

  // If there's just one branch (three steps), the current step to display is one less.
  const activeStep = steps === 3 ? currentStep - 1 : currentStep;

  return (
    <Steps size="small" current={activeStep} style={{ cursor: 'default' }}>
      {steps === 4 && <Step title={formatMessage({ id: 'booking.selectBranch' })} />}
      <Step title={formatMessage({ id: 'booking.selectService' })} />
      <Step title={formatMessage({ id: 'booking.selectProfessional' })} />
      <Step title={formatMessage({ id: 'booking.selectTime' })} />
      <Step title={formatMessage({ id: 'booking.confirmation' })} />
    </Steps>
  );
};

export default BookingStepper;
