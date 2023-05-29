import React, { useContext } from 'react';
import router from 'umi/router';

import ServiceList from '@/components/ServiceList';
import { BookingContext } from '@/layouts';

interface ServiceProps {
  id: string;
  duration: number;
  price: number;
  name: string;
}

export default function SelectService() {
  console.log('acaaaa');
  const { bookData, setBookData } = useContext(BookingContext);

  const selectService = ({ id, duration, price, name }: ServiceProps) => {
    setBookData({ ...bookData, service: { id, duration, price, name } });
    router.push('select-professional');
  };

  if (bookData.branch?.id) {
    return <ServiceList branchId={bookData.branch.id} selectService={selectService} />;
  }
  router.go(-1);
  return null;
}
