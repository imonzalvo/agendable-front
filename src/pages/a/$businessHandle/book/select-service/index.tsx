import React, { useContext } from 'react';
import router from 'umi/router';

import Stepper from '@/components/BookingStepper';
import ServiceList from '@/components/ServiceList';
import { BookingContext } from '@/layouts';

export default function SelectService() {
  const { bookData, setBookData } = useContext(BookingContext);
  const branchId = bookData.branch;

  const selectService = (id: string, duration: number) => {
    setBookData({ ...bookData, service: { id, duration } });
    router.push('select-professional');
  };

  if (branchId) {
    return (
      <Stepper active={1}>
        <ServiceList branchId={branchId} selectService={selectService} />
      </Stepper>
    );
  }
  router.go(-1);
  return null;
}
