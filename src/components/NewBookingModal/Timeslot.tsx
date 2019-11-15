import React from 'react';
import { Button } from 'antd';

interface TimeslotProps {
  date: string;
  time: string;
  handleClick: (date: string) => void;
  disabled?: boolean;
  isSelected?: boolean;
}

const Timeslot = ({
 date, time, handleClick, isSelected, disabled = false,
}: TimeslotProps) => (
  <Button
    disabled={disabled}
    type={isSelected ? 'primary' : 'default'}
    onClick={() => handleClick(date)}
    style={{ width: 154, height: 50, margin: '4px 4px 0px' }}
  >
    {time}
  </Button>
);

export default Timeslot;
