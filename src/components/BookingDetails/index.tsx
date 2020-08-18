import React, { useState } from 'react';
import { Select, Card, DatePicker, Input } from 'antd';
import moment, { Moment } from 'moment-timezone';
import produce from 'immer';
import { QueryResult } from '@apollo/client';
import { compact } from 'lodash';
import { isMobile } from 'react-device-detect';
import { formatMessage } from 'umi-plugin-locale';

import { GetBranchServices as GetBranchServicesType } from '@/queries/__generated__/GetBranchServices';
import { GetBranchEmployees as IGetBranchEmployees } from '@/queries/__generated__/GetBranchEmployees';
import { BookingState } from '@/pages/a/$businessHandle/admin/index.tsx';
import BookingCard from '@/components/BookingDetails/BookingCard';

moment.locale('es');
const { Option } = Select;

interface BookingDetailsProps {
  bookings: BookingState[];
  setBookings: React.Dispatch<React.SetStateAction<BookingState[]>>;
  defaultBookingState: BookingState;
  bookingDate: Moment;
  setBookingDate: React.Dispatch<React.SetStateAction<Moment>>;
  servicesResponse: QueryResult<GetBranchServicesType, Record<string, any>>;
  employeesResponse: QueryResult<IGetBranchEmployees, Record<string, any>>;
  validateBookings: () => boolean;
  shouldValidate: boolean;
  isEdit?: boolean;
}

export default function BookingDetails({
  bookings,
  setBookings,
  defaultBookingState,
  bookingDate,
  setBookingDate,
  servicesResponse,
  employeesResponse,
  validateBookings,
  shouldValidate,
  isEdit,
}: BookingDetailsProps) {
  const [nativeDatePickerValue, setNativeDatePickerValue] = useState(
    moment(bookingDate).format('YYYY-MM-DD'),
  );

  const onServiceChange = (e: string, i: number) => {
    setBookings(pS =>
      produce(pS, dS => {
        dS[i].selectedServices[0] = e;
      }),
    );
  };

  const onEmployeeChange = (e: BookingState['selectedEmployee'], i: number) => {
    setBookings(pS =>
      produce(pS, dS => {
        dS[i].selectedEmployee = e;
      }),
    );
  };

  const onSelectStartTime = (dateTime: string, i: number) => {
    setBookings(pS =>
      produce(pS, dS => {
        dS[i].selectedStartTime = dateTime;
      }),
    );
  };

  const onSelectDuration = (duration: number, i: number) => {
    setBookings(pS =>
      produce(pS, dS => {
        dS[i].selectedDuration = duration;
      }),
    );
  };

  const getServices = () => {
    const services = servicesResponse?.data?.getBranch?.services;
    if (services) {
      return services.map(service => (
        <Option key={service.id} value={service.id}>
          {service.name}
        </Option>
      ));
    }
    return [];
  };

  const getEmployees = () => {
    const employees = employeesResponse?.data?.getBranch?.employees;

    return employees
      ? employees.map(({ id, givenName }) => (
          <Option key={id} value={id}>
            {givenName}
          </Option>
        ))
      : null;
  };

  return (
    <Card
      style={{ height: '75%', marginBottom: 30 }}
      bodyStyle={{ height: '100%' }}
      title={formatMessage({ id: 'modal.bookingDetails' })}
      type="inner"
    >
      {isMobile ? (
        <Input
          type="date"
          size="large"
          value={moment(bookingDate).format('YYYY-MM-DD')}
          onChange={e => {
            if (e?.target?.value) {
              setNativeDatePickerValue(e.target.value);
            }
          }}
          onBlur={() => {
            setBookingDate(moment(nativeDatePickerValue, 'YYYY-MM-DD'));
          }}
          style={{ marginBottom: 20 }}
        />
      ) : (
        <DatePicker
          value={bookingDate}
          size="large"
          onChange={newDate => {
            if (newDate) {
              setBookingDate(newDate);
            }
          }}
          format="dddd, LL"
          allowClear={false}
          className="heading-datepicker"
          dropdownClassName="heading-datepicker-dropdown"
        />
      )}
      {bookings.map((booking, i) => (
        <BookingCard
          date={bookingDate}
          servicesResponse={servicesResponse}
          errors={booking.errors}
          validateBookings={validateBookings}
          shouldValidate={shouldValidate}
          renderEmployees={getEmployees}
          renderServices={getServices}
          selectedStartTime={booking.selectedStartTime}
          selectedServices={booking.selectedServices}
          selectedEmployee={booking.selectedEmployee}
          selectedDuration={booking.selectedDuration}
          onSelectStartTime={(e: string) => onSelectStartTime(e, i)}
          onServiceChange={(e: string[]) => onServiceChange(e, i)}
          onEmployeeChange={(e?: string) => onEmployeeChange(e, i)}
          onSelectDuration={(e: number) => onSelectDuration(e, i)}
        />
      ))}
    </Card>
  );
}
