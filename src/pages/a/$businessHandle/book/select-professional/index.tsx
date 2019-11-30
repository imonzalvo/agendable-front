import React, { useContext } from 'react';
import router from 'umi/router';

import Stepper from '@/components/BookingStepper';
import ProfessionalList from '@/components/ProfessionalList';
import { BookingContext } from '@/layouts';

const SelectProfessional = () => {
  const { bookData, setBookData } = useContext(BookingContext);
  const serviceId = bookData.service.id;

  const selectProfessional = (id: string) => {
    setBookData({ ...bookData, professional: id });
    router.push('select-date');
  };

  if (serviceId) {
    return (
      <Stepper active={2}>
        <ProfessionalList serviceId={serviceId} selectProfessional={selectProfessional} />
      </Stepper>
    );
  }
  router.go(-2);
  return null;
};

export default SelectProfessional;
