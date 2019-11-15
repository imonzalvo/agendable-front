import React, { useState } from 'react';
import moment, { Moment } from 'moment';
import { useQuery } from '@apollo/react-hooks';

import DateTimePicker from '@/components/DateTimePicker';
import { GetEmployeeAvailableTime } from './queries';

interface SelectDateProps {
  professionalId: string;
  serviceDuration: number;
  handleSelectDate: (date: string) => void;
}

const today = moment().format();

const SelectDate = ({ professionalId, serviceDuration, handleSelectDate }: SelectDateProps) => {
  const [date, setDate] = useState(today);
  const response = useQuery(GetEmployeeAvailableTime, {
    variables: { id: professionalId, duration: serviceDuration, date },
  });
  if (response.error) return <div>Error</div>;
  const jsonResponse = response.data ? response.data.getEmployeeAvailableTime : '[]';
  const availablePeriods = JSON.parse(jsonResponse);
  return (
    <DateTimePicker
      availablePeriods={availablePeriods}
      serviceDuration={serviceDuration}
      handleSelectDate={handleSelectDate}
      isLoading={response.loading}
      handleDateChange={(date: Moment) => setDate(date.format())}
    />
  );
};

export default SelectDate;
