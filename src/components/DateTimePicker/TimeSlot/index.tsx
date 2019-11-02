import React from 'react';
import { Button, Typography } from 'antd';

const { Text } = Typography;

interface TimeSlotProps {
  id: number;
  time: string;
  handleClick: (id: number) => void;
  disabled?: boolean;
}

const TimeSlot = ({ id, time, handleClick, disabled = false }: TimeSlotProps) => (
  <Button
    disabled={disabled}
    onClick={() => handleClick(id)}
    style={{ width: 154, height: 50, margin: '4px 4px 0px' }}
  >
    <Text strong>{time}</Text>
  </Button>
);

export default TimeSlot;
