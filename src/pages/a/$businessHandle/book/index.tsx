import React, { useContext } from 'react';
import router from 'umi/router';

import SelectBranch from './select-branch';
import { BookingContext } from '@/layouts';
import SelectService from './select-service';
import { useBusiness } from '@/components/BussinessGetter';

export default function Book() {
  const { bookData, setBookData, setSteps } = useContext(BookingContext);
  const business = useBusiness();
  const branches = business ? business.branches : null;

  const selectBranch = (id: string) => {
    setBookData({ ...bookData, branch: id });
    setSteps(3);
    router.push('book/select-service');
    return <SelectService />;
  };
  if (branches) {
    if (branches.length === 1) {
      return selectBranch(branches[0].id);
    }
    return <SelectBranch />;
  }
}
