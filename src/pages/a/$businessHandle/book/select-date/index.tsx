import React, { useContext } from 'react';
import router from 'umi/router';

import Stepper from '@/components/BookingStepper';
import SelectDateComponent from '@/components/SelectDate';
import { BookingContext } from '@/layouts';

const SelectDate = () => {
  const { bookData, setBookData } = useContext(BookingContext);
  const { professional, service } = bookData;

  const professionalId = professional;
  const serviceDuration = service.duration;

  const selectDate = (date: string) => {
    setBookData({ ...bookData, date });
    router.push('confirm');
  };

  if (professionalId && serviceDuration) {
    return (
      <Stepper active={3}>
        <SelectDateComponent
          professionalId={professionalId}
          serviceDuration={serviceDuration}
          handleSelectDate={selectDate}
        />
      </Stepper>
    );
  }
  router.go(-3);
  return null;
};

export default SelectDate;
