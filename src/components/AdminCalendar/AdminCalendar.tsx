import React from 'react';
import { Alert } from 'antd';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useQuery } from '@apollo/react-hooks';
import { QueryResult } from '@apollo/react-common';
import moment from 'moment-timezone';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { get } from 'lodash';

import PageLoading from '@/components/PageLoading';
import { GetBookingsForBranch } from './queries';
import Toolbar from './Toolbar';
import { ModalState } from '@/pages/a/$businessHandle/admin';
import {
  GetBookingsForBranch as IGetBookingsForBranch,
  GetBookingsForBranch_getBranch_bookings_items,
} from './__generated__/GetBookingsForBranch';
import {
  GetBranchEmployees as IGetBranchEmployees,
  GetBranchEmployees_getBranch_employees_items,
} from '@/queries/__generated__/GetBranchEmployees';

const localizer = momentLocalizer(moment);

interface AdminCalendarProps {
  setModal: React.Dispatch<React.SetStateAction<ModalState>>;
  employeesResponse: QueryResult<IGetBranchEmployees, Record<string, any>>;
  branchId: string;
}

export default function AdminCalendar({
  setModal,
  employeesResponse,
  branchId,
}: AdminCalendarProps) {
  const { loading: bookingsLoading, data: bookingsData, error: bookingsError } = useQuery<
    IGetBookingsForBranch
  >(GetBookingsForBranch, {
    variables: { id: branchId },
  });

  if (bookingsLoading || employeesResponse.loading) {
    return <PageLoading />;
  }

  if (bookingsError || employeesResponse.error) {
    return (
      <Alert
        message="There was an error"
        description={
          bookingsError ? JSON.stringify(bookingsError) : JSON.stringify(employeesResponse.error)
        }
        type="error"
      />
    );
  }

  const getEvents = () => {
    const bookings: [GetBookingsForBranch_getBranch_bookings_items] = get(
      bookingsData,
      'getBranch.bookings.items',
    );
    return bookings.map(booking => ({
      id: booking.id,
      title: ` ${booking.clientName} ${booking.clientFamilyName}`,
      start: new Date(booking.start),
      end: new Date(booking.end),
      resourceId: booking.employee.id,
    }));
  };

  const getResourceMap = () => {
    const employees: [GetBranchEmployees_getBranch_employees_items] | undefined = get(
      employeesResponse,
      'data.getBranch.employees.items',
    );
    if (employees) {
      return employees.map(employee => ({
        resourceId: employee.id,
        resourceTitle: `${employee.givenName} ${employee.familyName}`,
      }));
    }
    return [];
  };

  return (
    <Calendar
      events={getEvents()}
      localizer={localizer}
      defaultView="day"
      views={['day']}
      step={30}
      resources={getResourceMap()}
      resourceIdAccessor="resourceId"
      resourceTitleAccessor="resourceTitle"
      // TODO: min and max should come from the min/max of the branch employee availabilty
      // min={new Date(0, 0, 0, 7, 0, 0)}
      // max={new Date(0, 0, 0, , 0, 0)}
      components={{
        toolbar: props => (
          <Toolbar
            {...props}
            onNewBooking={(date: Date) => setModal({ id: 'NEW_BOOKING', params: { date } })}
          />
        ),
      }}
    />
  );
}
