import React, { useState } from 'react';
import { Alert } from 'antd';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useQuery } from '@apollo/react-hooks';
import { QueryResult } from '@apollo/react-common';
import moment from 'moment-timezone';
import 'moment/locale/es';
import { compact } from 'lodash';

import PageLoading from '@/components/PageLoading';
import { GetBookingsForBranch } from './queries';
import TimeSlotWrapper from './TimeSlotWrapper';
import Toolbar from './Toolbar';
import ResourceHeader from './ResourceHeader';
import EventWrapper from './EventWrapper';
import { ModalState } from '@/pages/a/$businessHandle/admin';
import { GetBookingsForBranch as IGetBookingsForBranch } from './__generated__/GetBookingsForBranch';
import { GetBranchEmployees as IGetBranchEmployees } from '@/queries/__generated__/GetBranchEmployees';
import BigCalendarStyles from './bigCalendarStyles';
import useTimeout from '@/hooks/useTimeout';

const localizer = momentLocalizer(moment);

const isoWeekdays = {
  1: 'MONDAY',
  2: 'TUESDAY',
  3: 'WEDNESDAY',
  4: 'THURSDAY',
  5: 'FRIDAY',
  6: 'SATURDAY',
  7: 'SUNDAY',
};

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
  const [shouldTransition, setShouldTransition] = useState(false);
  const { callTimeout, clear } = useTimeout(() => setShouldTransition(false), 500);

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
    const bookings = bookingsData?.getBranch?.bookings?.items;
    if (bookings) {
      return compact(bookings).map(
        ({ id, clientName, clientFamilyName, start, end, employee, clientEmail }) => ({
          id,
          title: ` ${clientName} ${clientFamilyName}`,
          start: new Date(start),
          end: new Date(end),
          resourceId: employee.id,
          clientName,
          clientFamilyName,
          clientEmail,
          employee,
        }),
      );
    }
    return [];
  };

  const getResourceMap = () => {
    const employees = employeesResponse?.data?.getBranch?.employees?.items;
    if (employees) {
      return compact(employees).map(employee => ({
        resourceId: employee.id,
        resourceTitle: `${employee.givenName} ${employee.familyName}`,
      }));
    }
    return [];
  };

  /**
   * Check if resource is available on given timeslot
   */
  const isAvailable = (dateTime: Date, resourceId: string) => {
    const employees = employeesResponse?.data?.getBranch?.employees?.items;

    if (employees) {
      const employee = employees.find(e => e && e.id === resourceId);
      const availabilityItems = employee?.availability?.items;
      if (availabilityItems) {
        const dateTimeMom = moment(dateTime);
        const weekday = isoWeekdays[dateTimeMom.isoWeekday()]; // Get the weekday string constant for dateTime (ie. 1: MONDAY)
        const employeeAvOnWeekday = availabilityItems.find(
          avItem => avItem && avItem.day === weekday,
        );
        if (employeeAvOnWeekday) {
          // create from and to moments that have the same dayOfYear as given dateTime but with the time of the employeeAvailabiltyItem
          const from = moment
            .utc(employeeAvOnWeekday.from, 'H:mm')
            .dayOfYear(dateTimeMom.dayOfYear());
          const to = moment.utc(employeeAvOnWeekday.to, 'H:mm').dayOfYear(dateTimeMom.dayOfYear());
          return dateTimeMom.isBetween(from, to);
        }
      }
    }
    return false;
  };

  return (
    <div style={{ marginTop: 110 }}>
      <BigCalendarStyles shouldTransition={shouldTransition} />
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
        // @ts-ignore
        components={{
          toolbar: props => (
            <Toolbar
              {...props}
              onNewBooking={(date: Date) =>
                setModal({
                  id: 'NEW_BOOKING',
                  params: {
                    date: moment(date)
                      .startOf('day')
                      .hour(moment().hour())
                      .toDate(),
                  },
                })
              }
              onDateChange={() => {
                clear();
                setShouldTransition(true);
                callTimeout();
              }}
            />
          ),
          resourceHeader: ({ label }: { label: React.ReactNode }) => (
            <ResourceHeader label={label} />
          ),
          // @ts-ignore
          timeSlotWrapper: ({ children, resource, value }: { children: React.ReactNode }) => (
            <TimeSlotWrapper
              resource={resource}
              value={value}
              isAvailable={isAvailable}
              setModal={setModal}
            >
              {children}
            </TimeSlotWrapper>
          ),
          eventWrapper: (p: any) => <EventWrapper {...p} />,
        }}
        // onSelectEvent={event =>
        //   setModal({ id: 'NEW_BOOKING', params: { date: event.start, bookingId: event.id } })
        // }
        selectable
        onSelecting={() => false}
      />
    </div>
  );
}
