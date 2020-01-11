import React, { useContext } from 'react';
import router from 'umi/router';

import BranchList from '@/components/BranchList';
import { BookingContext } from '@/layouts';
import { BusinessContext } from '@/components/BussinessGetter';
import BookingLayout from '@/layouts/BookingLayout';

interface BranchProps {
  id: string;
  address: string;
}

const SelectBranch = () => {
  const { bookData, setBookData } = useContext(BookingContext);
  const { business } = useContext(BusinessContext);

  const selectBranch = ({ id, address }: BranchProps) => {
    setBookData({ ...bookData, branch: { id, address } });
    router.push('select-service');
  };

  return (
    <BookingLayout>
      <BranchList businessId={business.businessId} selectBranch={selectBranch} />
    </BookingLayout>
  );
};

export default SelectBranch;
