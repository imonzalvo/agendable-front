import React, { useState, useMemo, useEffect } from 'react';
import { Alert, Spin } from 'antd';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useQuery, useSubscription, useApolloClient, QueryResult } from '@apollo/client';
import moment from 'moment-timezone';
import 'moment/locale/es';
import { compact } from 'lodash';
import { startOfWeek, format, endOfWeek } from 'date-fns';
import produce from 'immer';

import PageLoading from '@/components/PageLoading';
import {
  GetBookingsForBranch,
  ON_UPDATE_BOOKING,
  ON_DELETE_BOOKING,
  ON_CREATE_BOOKING_WITH_SERVICES,
  ON_DELETE_BOOKING_SERVICES,
  ON_CREATE_BOOKING_SERVICES,
} from './queries';
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

const getEvents = (bookingsData?: IGetBookingsForBranch) => {
  const bookings = bookingsData?.getBranch?.bookings?.items;
  if (bookings) {
    return compact(bookings).map(booking => ({
      id: booking.id,
      title: ` ${booking.clientName} ${booking.clientFamilyName}`,
      start: new Date(booking.start),
      end: new Date(booking.end),
      resourceId: booking.employee.id,
      clientName: booking.clientName,
      clientFamilyName: booking.clientFamilyName,
      clientEmail: booking.clientEmail,
      clientPhone: booking.clientPhone,
      employee: booking.employee,
      services: booking.services,
    }));
  }
  return [];
};

const getResourceMap = (
  employeesResponse?: QueryResult<IGetBranchEmployees, Record<string, any>>,
) => {
  const employees = employeesResponse?.data?.getBranch?.employees?.items;
  if (employees) {
    return compact(employees).map(employee => ({
      resourceId: employee.id,
      resourceTitle: `${employee.givenName} ${employee.familyName}`,
    }));
  }
  return [];
};

export default function AdminCalendar({
  setModal,
  employeesResponse,
  branchId,
}: AdminCalendarProps) {
  const [shouldTransition, setShouldTransition] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { callTimeout, clear } = useTimeout(() => setShouldTransition(false), 500);
  const client = useApolloClient();

  const {
    loading: bookingsLoading,
    data: bookingsData,
    error: bookingsError,
    refetch: refetchBookings,
  } = useQuery<IGetBookingsForBranch>(GetBookingsForBranch, {
    variables: {
      id: branchId,
      start: format(startOfWeek(selectedDate, { weekStartsOn: 1 }), 'YYYY-MM-DD[T]HH:mm:ssZZ'),
      end: format(endOfWeek(selectedDate, { weekStartsOn: 1 }), 'YYYY-MM-DD[T]HH:mm:ssZZ'),
    },
  });

  useSubscription(ON_UPDATE_BOOKING, {
    onSubscriptionData: ({ subscriptionData }) => {
      if (
        subscriptionData.data.onUpdateBooking.branch.id === branchId &&
        bookingsData?.getBranch?.bookings?.items
      ) {
        client.writeQuery({
          query: GetBookingsForBranch,
          variables: {
            id: branchId,
            start: format(
              startOfWeek(selectedDate, { weekStartsOn: 1 }),
              'YYYY-MM-DD[T]HH:mm:ssZZ',
            ),
            end: format(endOfWeek(selectedDate, { weekStartsOn: 1 }), 'YYYY-MM-DD[T]HH:mm:ssZZ'),
          },
          data: produce(bookingsData, dS => {
            const bItems = dS?.getBranch?.bookings?.items;
            if (bItems) {
              const i = bItems.findIndex(b => b?.id === subscriptionData.data.onUpdateBooking.id);
              bItems[i] = subscriptionData.data.onUpdateBooking;
            }
          }),
        });
      }
    },
  });

  useSubscription(ON_CREATE_BOOKING_WITH_SERVICES, {
    onSubscriptionData: ({ subscriptionData }) => {
      if (
        subscriptionData.data.onCreateBookingWithServices.branch.id === branchId &&
        bookingsData?.getBranch?.bookings?.items
      ) {
        client.writeQuery({
          query: GetBookingsForBranch,
          variables: {
            id: branchId,
            start: format(
              startOfWeek(selectedDate, { weekStartsOn: 1 }),
              'YYYY-MM-DD[T]HH:mm:ssZZ',
            ),
            end: format(endOfWeek(selectedDate, { weekStartsOn: 1 }), 'YYYY-MM-DD[T]HH:mm:ssZZ'),
          },
          data: produce(bookingsData, dS => {
            dS?.getBranch?.bookings?.items?.push(subscriptionData.data.onCreateBookingWithServices);
          }),
        });
      }
    },
  });

  useSubscription(ON_DELETE_BOOKING, {
    onSubscriptionData: ({ subscriptionData }) => {
      const bookingIndex = bookingsData?.getBranch?.bookings?.items?.findIndex(
        b => b?.id === subscriptionData.data.onDeleteBooking.id,
      );
      if (bookingIndex) {
        client.writeQuery({
          query: GetBookingsForBranch,
          variables: {
            id: branchId,
            start: format(
              startOfWeek(selectedDate, { weekStartsOn: 1 }),
              'YYYY-MM-DD[T]HH:mm:ssZZ',
            ),
            end: format(endOfWeek(selectedDate, { weekStartsOn: 1 }), 'YYYY-MM-DD[T]HH:mm:ssZZ'),
          },
          data: produce(bookingsData, dS => {
            dS?.getBranch?.bookings?.items?.splice(bookingIndex, 1);
          }),
        });
      }
    },
  });

  useSubscription(ON_DELETE_BOOKING_SERVICES, {
    onSubscriptionData: ({ subscriptionData }) => {
      if (
        subscriptionData.data.onDeleteBookingServices.booking.branch.id === branchId &&
        bookingsData?.getBranch?.bookings?.items
      ) {
        client.writeQuery({
          query: GetBookingsForBranch,
          variables: {
            id: branchId,
            start: format(
              startOfWeek(selectedDate, { weekStartsOn: 1 }),
              'YYYY-MM-DD[T]HH:mm:ssZZ',
            ),
            end: format(endOfWeek(selectedDate, { weekStartsOn: 1 }), 'YYYY-MM-DD[T]HH:mm:ssZZ'),
          },
          data: produce(bookingsData, dS => {
            const bItems = dS?.getBranch?.bookings?.items;
            if (bItems) {
              const i = bItems.findIndex(
                b => b?.id === subscriptionData.data.onDeleteBookingServices.booking.id,
              );
              bItems[i] = subscriptionData.data.onDeleteBookingServices.booking;
            }
          }),
        });
      }
    },
  });

  useSubscription(ON_CREATE_BOOKING_SERVICES, {
    onSubscriptionData: ({ subscriptionData }) => {
      if (
        subscriptionData.data.onCreateBookingServices.booking.branch.id === branchId &&
        bookingsData?.getBranch?.bookings?.items
      ) {
        client.writeQuery({
          query: GetBookingsForBranch,
          variables: {
            id: branchId,
            start: format(
              startOfWeek(selectedDate, { weekStartsOn: 1 }),
              'YYYY-MM-DD[T]HH:mm:ssZZ',
            ),
            end: format(endOfWeek(selectedDate, { weekStartsOn: 1 }), 'YYYY-MM-DD[T]HH:mm:ssZZ'),
          },
          data: produce(bookingsData, dS => {
            const bItems = dS?.getBranch?.bookings?.items;
            if (bItems) {
              const i = bItems.findIndex(
                b => b?.id === subscriptionData.data.onCreateBookingServices.booking.id,
              );
              bItems[i] = subscriptionData.data.onCreateBookingServices.booking;
            }
          }),
        });
      }
    },
  });

  useEffect(() => {
    refetchBookings({
      id: branchId,
      start: format(startOfWeek(selectedDate, { weekStartsOn: 1 }), 'YYYY-MM-DD[T]HH:mm:ssZZ'),
      end: format(endOfWeek(selectedDate, { weekStartsOn: 1 }), 'YYYY-MM-DD[T]HH:mm:ssZZ'),
    });
    clear();
    setShouldTransition(true);
    callTimeout();
  }, [selectedDate]);

  const memoizedEvents = useMemo(() => getEvents(bookingsData), [bookingsData]);
  const memoizedResourceMap = useMemo(() => getResourceMap(employeesResponse), [employeesResponse]);

  if (employeesResponse.loading) {
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
      <Spin spinning={bookingsLoading}>
        <Calendar
          events={memoizedEvents}
          localizer={localizer}
          defaultView="day"
          views={['day']}
          step={30}
          resources={memoizedResourceMap}
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
            eventWrapper: (p: any) => <EventWrapper {...p} setModal={setModal} />,
          }}
          selectable
          onSelecting={() => false}
          onNavigate={d => {
            setSelectedDate(d);
          }}
        />
      </Spin>
    </div>
  );
}
