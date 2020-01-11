import React, { useState } from 'react';
import { Select, Card, DatePicker, Input, Timeline, Icon } from 'antd';
import moment, { Moment } from 'moment-timezone';
import produce from 'immer';
import { QueryResult } from '@apollo/react-common';
import { compact } from 'lodash';
import { isMobile } from 'react-device-detect';

import { GetBranchServices as GetBranchServicesType } from '../NewBookingModal/__generated__/GetBranchServices';
import { GetBranchEmployees as IGetBranchEmployees } from '@/queries/__generated__/GetBranchEmployees';
import { BookingState } from '@/components/NewBookingModal';
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
}: BookingDetailsProps) {
  const [nativeDatePickerValue, setNativeDatePickerValue] = useState(
    moment(bookingDate).format('YYYY-MM-DD'),
  );

  const onServiceChange = (e: BookingState['selectedServices'], i: number) => {
    setBookings(pS =>
      produce(pS, dS => {
        dS[i].selectedServices = e;
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
    const services = servicesResponse?.data?.getBranch?.services?.items;
    if (services) {
      return compact(services).map(
        ({ service }) =>
          !!service && (
            <Option key={service.id} value={service.id}>
              {service.name}
            </Option>
          ),
      );
    }
    return [];
  };

  const getEmployees = () => {
    const employees = employeesResponse?.data?.getBranch?.employees?.items;

    return employees
      ? compact(employees).map(({ id, givenName }) => (
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
      title="Booking Details"
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
      <Timeline
        pending
        pendingDot={<Icon type="plus-circle" theme="twoTone" twoToneColor="#e8e8e8" />}
      >
        <Timeline.Item>
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
        </Timeline.Item>
      </Timeline>
    </Card>
  );
}
