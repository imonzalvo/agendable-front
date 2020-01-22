import produce from 'immer';
import { keyBy } from 'lodash';
import moment from 'moment-timezone';
import { Modal } from 'antd';
import { QueryResult } from '@apollo/react-common';

import { BookingState } from '@/pages/a/$businessHandle/admin';

export const validateBookings = (
  setBookings: (value: React.SetStateAction<BookingState[]>) => void,
) => {
  let hasErrors = false;
  setBookings(pS =>
    produce(pS, dS => {
      pS.forEach((booking, i) => {
        dS[i].errors = [];

        Object.keys(booking).forEach(key => {
          if (!booking[key] || (Array.isArray(booking[key]) && booking[key].length === 0)) {
            hasErrors = true;

            dS[i].errors.push({ [key]: 'Field is required' });
          }
        });
      });
    }),
  );
  return hasErrors;
};

export const getTotalPrice = (
  servicesResponse: QueryResult<any, Record<string, any>>,
  bookings: BookingState[],
) => {
  const services = servicesResponse?.data?.getBranch?.services?.items;
  if (services) {
    const servicesObj = keyBy(services, 'service.id');
    if (servicesObj) {
      return bookings.reduce(
        (sum, booking) =>
          (sum += booking.selectedServices.reduce(
            (acc: number | undefined, serviceId: string | undefined) =>
              serviceId ? acc + servicesObj[serviceId].service.price : 0,
            0,
          ) as number),
        0,
      );
    }
  }
  return 0;
};

export const getTotalDuration = (bookings: BookingState[]) =>
  moment
    .duration(
      bookings.reduce((acc, booking) => (acc += booking.selectedDuration || 0), 0),
      's',
    )
    .format('h[h] m[min]', { trim: 'both' });

export const confirmCancel = (onCancel: () => void) => {
  Modal.confirm({
    title: 'Are you sure?',
    content: 'You will lose all changes you made',
    onOk() {
      onCancel();
    },
    okButtonProps: { type: 'danger' },
    okText: 'Yes, close',
    cancelText: 'No, keep open',
  });
};
