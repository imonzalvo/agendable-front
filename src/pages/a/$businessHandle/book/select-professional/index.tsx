import React, { useContext } from 'react';
import router from 'umi/router';

import ProfessionalList from '@/components/ProfessionalList';
import { BookingContext } from '@/layouts';
import BookingLayout from '@/layouts/BookingLayout';

interface ProfessionalProps {
  id: string;
  givenName: string;
}

const SelectProfessional = () => {
  const { bookData, setBookData } = useContext(BookingContext);
  const serviceId = bookData.service.id;

  const selectProfessional = ({ id, givenName }: ProfessionalProps) => {
    setBookData({ ...bookData, professional: { id, givenName } });
    router.push('select-date');
  };

  if (serviceId) {
    return (
      <BookingLayout>
        <ProfessionalList serviceId={serviceId} selectProfessional={selectProfessional} />
      </BookingLayout>
    );
  }
  router.go(-2);
  return null;
};

export default SelectProfessional;
