import React, { useState, useEffect } from 'react';
import moment, { Moment } from 'moment';
import { useQuery } from '@apollo/client';

import DateTimePicker from '@/components/DateTimePicker';
import { GetEmployeeAvailableTime } from '@/graphql/sharedQueries';

interface SelectDateProps {
  professionalId: string;
  serviceDuration: number;
  handleSelectDate: (date: string) => void;
  scheduleSeparation: number;
}

const today = moment().format();

const SelectDate = ({
  professionalId,
  serviceDuration,
  handleSelectDate,
  scheduleSeparation,
}: SelectDateProps) => {
  const [date, setDate] = useState(today);
  const response = useQuery(GetEmployeeAvailableTime, {
    variables: { id: professionalId, duration: serviceDuration, date },
  });
  useEffect(() => {
    response.refetch({
      variables: { id: professionalId, duration: serviceDuration, date },
    });
  }, [date]);
  if (response.error) return <div>Error</div>;
  const availablePeriods = response.data ? response.data.getEmployeeAvailableTime : [];
  return (
    <DateTimePicker
      availablePeriods={availablePeriods}
      serviceDuration={serviceDuration}
      handleSelectDate={handleSelectDate}
      isLoading={response.loading}
      handleDateChange={(date: Moment) => setDate(date.format())}
      scheduleSeparation={scheduleSeparation}
    />
  );
};

export default SelectDate;
