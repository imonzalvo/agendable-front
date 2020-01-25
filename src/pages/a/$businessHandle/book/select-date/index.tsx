import React, { useContext } from 'react';
import router from 'umi/router';

import SelectDateComponent from '@/components/SelectDate';
import { BookingContext } from '@/layouts';

const SelectDate = () => {
  const { bookData, setBookData } = useContext(BookingContext);

  const { professional, service } = bookData;
  const serviceDuration = service.duration;

  const selectDate = (date: string) => {
    setBookData({ ...bookData, date });
    router.push('confirm');
  };

  if (professional?.id && serviceDuration) {
    return (
      <SelectDateComponent
        professionalId={professional.id}
        serviceDuration={serviceDuration}
        handleSelectDate={selectDate}
      />
    );
  }
  router.go(-3);
  return null;
};

export default SelectDate;
