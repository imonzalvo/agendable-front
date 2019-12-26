import React, { useContext } from 'react';
import router from 'umi/router';

import Stepper from '@/components/BookingStepper';
import BranchList from '@/components/BranchList';
import { BookingContext } from '@/layouts';
import { BusinessContext } from '@/components/BussinessGetter';

const SelectBranch = () => {
  const { bookData, setBookData } = useContext(BookingContext);
  const { business } = useContext(BusinessContext);

  const selectBranch = (id: string) => {
    setBookData({ ...bookData, branch: id });
    router.push('select-service');
  };

  return (
    <Stepper active={0}>
      <BranchList businessId={business.businessId} selectBranch={selectBranch} />
    </Stepper>
  );
};

export default SelectBranch;
