import React, { useContext } from 'react';
import { Steps } from 'antd';
import { BookingContext } from '@/layouts';

const { Step } = Steps;

interface BookingStepperProps {
  active: number;
  children: React.ReactNode;
}

const BookingStepper = ({ active, children }: BookingStepperProps) => {
  const { steps } = useContext(BookingContext);
  // If there's just one branch (three steps), the current step to display is one less.
  const current = steps === 3 ? active - 1 : active;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Steps size="small" current={current}>
        {steps === 4 && <Step title="Select branch" />}
        <Step title="Select service" />
        <Step title="Select professional" />
        <Step title="Select Date" />
        <Step title="Confirmation" />
      </Steps>
      {children}
    </div>
  );
};

export default BookingStepper;
