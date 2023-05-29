import produce from 'immer';
import { keyBy } from 'lodash';
import moment from 'moment-timezone';
import { Modal } from 'antd';
import { QueryResult } from '@apollo/client';
import { formatMessage } from 'umi-plugin-locale';

import { BookingState } from '@/pages/app/$businessHandle/admin';
import { GetBranchServices as GetBranchServicesType } from '@/queries/__generated__/GetBranchServices';

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

            dS[i].errors.push({ [key]: formatMessage({ id: 'message.fieldRequired' }) });
          }
        });
      });
    }),
  );
  return hasErrors;
};

export const getTotalPrice = (
  servicesResponse: QueryResult<GetBranchServicesType, Record<string, any>>,
  bookings: BookingState[],
) => {
  const services = servicesResponse?.data?.getBranch?.services;
  if (services) {
    const servicesObj = keyBy(services, 'id');
    if (servicesObj) {
      return bookings.reduce(
        (sum, booking) =>
          (sum += booking.selectedServices.reduce(
            (acc: number, serviceId: string | undefined) =>
              serviceId ? acc + servicesObj[serviceId].price : 0,
            0,
          )),
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
    title: formatMessage({ id: 'message.areYouSure' }),
    content: formatMessage({ id: 'message.loseChanges' }),
    onOk() {
      onCancel();
    },
    okButtonProps: { type: 'danger' },
    okText: formatMessage({ id: 'message.close' }),
    cancelText: formatMessage({ id: 'message.keepOpen' }),
  });
};
