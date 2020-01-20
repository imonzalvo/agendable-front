import React, { useContext } from 'react';
import { Steps } from 'antd';
import { BookingContext } from '@/layouts';
import { formatMessage } from 'umi-plugin-locale';

const { Step } = Steps;

interface BookingStepperProps {
  active: number;
}

const BookingStepper = ({ active }: BookingStepperProps) => {
  const { steps } = useContext(BookingContext);
  // If there's just one branch (three steps), the current step to display is one less.
  const current = steps === 3 ? active - 1 : active;
  return (
    <Steps size="small" current={current} style={{ cursor: 'default' }}>
      {steps === 4 && <Step title={formatMessage({ id: 'booking.selectBranch' })} />}
      <Step title={formatMessage({ id: 'booking.selectService' })} />
      <Step title={formatMessage({ id: 'booking.selectProfessional' })} />
      <Step title={formatMessage({ id: 'booking.selectTime' })} />
      <Step title={formatMessage({ id: 'booking.confirmation' })} />
    </Steps>
  );
};

export default BookingStepper;
