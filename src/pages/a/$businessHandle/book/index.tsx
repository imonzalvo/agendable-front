import { useContext } from 'react';
import router from 'umi/router';

import { BookingContext } from '@/layouts';
import { useBusiness } from '@/components/BussinessGetter';
import { getUrl } from '@/utils/utils';

export default function Book() {
  const { bookData, setBookData, setSteps } = useContext(BookingContext);
  const business = useBusiness();
  const branches = business ? business.branches : null;

  if (branches) {
    let path;
    if (branches.length === 1) {
      setBookData({ ...bookData, branch: branches[0].id });
      setSteps(3);
      path = getUrl('book/select-service');
    } else {
      path = getUrl('book/select-branch');
    }
    router.push(path);
  }
  return null;
}
