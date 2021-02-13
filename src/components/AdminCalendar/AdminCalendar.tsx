import React, { useState, useMemo, useEffect } from 'react';
import { Alert, Spin, notification } from 'antd';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useQuery, useSubscription, useApolloClient, QueryResult } from '@apollo/client';
import moment from 'moment-timezone';
import { getLocale, formatMessage } from 'umi-plugin-locale';
import { startOfWeek, format, endOfWeek } from 'date-fns';
import produce from 'immer';

import PageLoading from '@/components/PageLoading';
import {
  GetBookingsForBranch,
  ON_UPDATE_BOOKING,
  ON_DELETE_BOOKING,
  ON_CREATE_BOOKING,
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

if (getLocale().startsWith('es')) {
  moment.locale('es');
} else {
  moment.locale('en');
}

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
  const bookings = bookingsData?.getBookingsByBranch;
  if (bookings) {
    return bookings.map(booking => ({
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
  const employees = employeesResponse?.data?.getBranch?.employees;
  if (employees) {
    return employees.map(employee => ({
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
    variables: {
      id: branchId,
    },
    onSubscriptionData: ({ subscriptionData }) => {
      if (
        subscriptionData.data.updatedBooking.branch.id === branchId &&
        bookingsData?.getBookingsByBranch
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
            const bItems = dS?.getBookingsByBranch;
            if (bItems) {
              const i = bItems.findIndex(b => b?.id === subscriptionData.data.updatedBooking.id);
              bItems[i] = subscriptionData.data.updatedBooking;
            }
          }),
        });
      }
    },
  });

  useSubscription(ON_CREATE_BOOKING, {
    variables: {
      id: branchId,
    },
    onSubscriptionData: ({ subscriptionData }) => {
      if (
        subscriptionData.data.newBooking.branch.id === branchId &&
        bookingsData?.getBookingsByBranch
      ) {
        notification.info({
          message: formatMessage({ id: 'notifications.newBooking' }),
          description: `${moment(
            subscriptionData.data.newBooking.start,
          ).fromNow()} - ${formatMessage({ id: 'booking.with' })} ${
            subscriptionData.data.newBooking.employee.givenName
          }`,
        });
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
            dS?.getBookingsByBranch?.push(subscriptionData.data.newBooking);
          }),
        });
      }
    },
  });

  useSubscription(ON_DELETE_BOOKING, {
    variables: {
      id: branchId,
    },
    onSubscriptionData: ({ subscriptionData }) => {
      const bookingIndex = bookingsData?.getBookingsByBranch?.findIndex(
        b => b?.id === subscriptionData.data.deletedBooking.id,
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
            dS?.getBookingsByBranch?.splice(bookingIndex, 1);
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
    const employees = employeesResponse?.data?.getBranch?.employees;

    if (employees) {
      const employee = employees.find(e => e && e.id === resourceId);
      const availabilityItems = employee?.availability;
      if (availabilityItems) {
        const dateTimeMom = moment(dateTime);
        const weekday = isoWeekdays[dateTimeMom.isoWeekday()]; // Get the weekday string constant for dateTime (ie. 1: MONDAY)
        const employeeAvOnWeekday = availabilityItems.find(
          avItem => avItem && avItem.day === weekday,
        );
        if (employeeAvOnWeekday) {
          // create from and to moments that have the same dayOfYear as given dateTime but with the time of the employeeAvailabiltyItem

          // turns 20:00 into 2000 to compare easily
          const [fromHour, fromMinute] = employeeAvOnWeekday.from.split(':');
          const [toHour, toMinute] = employeeAvOnWeekday.to.split(':');

          const fromVal = Number(`${fromHour}${fromMinute}`);
          const toVal = Number(`${toHour}${toMinute}`);

          const from = moment
            .utc(dateTimeMom)
            .hour(Number(fromHour))
            .minute(Number(fromMinute));
          const to = moment
            .utc(dateTimeMom)
            .hour(Number(toHour))
            .minute(Number(toMinute));

          if (fromVal > toVal) {
            to.add(1, 'day');
          }

          return dateTimeMom.isBetween(from, to, 'minutes', '[]');
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
