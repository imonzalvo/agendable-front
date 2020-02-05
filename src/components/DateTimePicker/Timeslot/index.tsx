import React from 'react';
import { Button, Typography } from 'antd';

const { Text } = Typography;

interface TimeslotProps {
  date: string;
  time: string;
  handleClick: (date: string) => void;
  disabled?: boolean;
}

const Timeslot = ({ date, time, handleClick, disabled = false }: TimeslotProps) => (
  <Button
    disabled={disabled}
    onClick={() => handleClick(date)}
    style={{ width: 80, height: 40, margin: '6px 5px' }}
  >
    <Text strong>{time}</Text>
  </Button>
);

export default Timeslot;
