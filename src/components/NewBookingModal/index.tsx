import React, { useState } from 'react';
import { Modal, Row, Col, Button, Card, Typography, message } from 'antd';
import { FormProps } from 'antd/lib/form';
import moment from 'moment-timezone';
import 'react-dates/lib/css/_datepicker.css';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QueryResult } from '@apollo/react-common';
import { Moment } from 'moment';
import produce from 'immer';
import { get, keyBy } from 'lodash';
import momentDurationFormatSetup from 'moment-duration-format';
import { useResponsive } from 'react-hooks-responsive';

import { GetBranchServices, CreateBooking } from './queries';
import ClientDetails from '@/components/ClientDetails';
import BookingDetails from '@/components/BookingDetails';
import { GetBookingsForBranch } from '@/components/AdminCalendar/queries';
import { GlobalStyles } from './styles';
import { GetBranchServices as GetBranchServicesType } from './__generated__/GetBranchServices';
import { GetBranchEmployees as IGetBranchEmployees } from '@/queries/__generated__/GetBranchEmployees';

moment.locale('es');
momentDurationFormatSetup(moment);

const now = moment().format();

export interface BookingState {
  selectedServices: string[];
  selectedEmployee?: string;
  selectedStartTime?: string | Date;
  selectedDuration?: number;
  errors: {
    [key: string]: string;
  }[];
}

export default function NewBookingModal({
  visible,
  onOk,
  onCancel,
  employeesResponse,
  branchId,
  modalParams,
}: {
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
  employeesResponse: QueryResult<IGetBranchEmployees, Record<string, any>>;
  branchId: string;
  modalParams?: { date?: Date | string; employeeId?: string };
}) {
  const defaultBookingState = {
    selectedServices: [],
    selectedEmployee: modalParams?.employeeId,
    selectedStartTime: moment(modalParams?.date).format(),
    selectedDuration: undefined,
    errors: [],
  };

  const [bookings, setBookings] = useState<BookingState[]>([{ ...defaultBookingState }]);
  const [bookingDate, setBookingDate] = useState<Moment>(
    modalParams?.date ? moment(modalParams.date) : moment(now),
  );
  const [shouldValidate, setShouldValidate] = useState(false);

  const [createBooking, { loading: loadingCreateBooking }] = useMutation(CreateBooking, {
    onCompleted: d => {
      message.success('Successfully Created Booking');
      onCancel();
    },
    onError: err => {
      message.error(JSON.stringify(err));
    },
  });

  let formRef: FormProps['form'] | null = null;

  const servicesResponse = useQuery<GetBranchServicesType>(GetBranchServices, {
    variables: { id: branchId },
  });

  const { screenIsAtMost } = useResponsive({
    xs: 0,
    sm: 480,
    md: 576,
    lg: 768,
  });

  const validateBookings = () => {
    let hasErrors = false;
    setBookings(pS =>
      produce(pS, dS => {
        bookings.forEach((booking, i) => {
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

  const getTotalPrice = () => {
    const services = get(servicesResponse, 'data.getBranch.services.items');
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

  const getTotalDuration = () =>
    moment
      .duration(
        bookings.reduce((acc, booking) => (acc += booking.selectedDuration || 0), 0),
        's',
      )
      .format('h[h] m[min]', { trim: 'both' });

  const confirmCancel = () => {
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

  return (
    <>
      <GlobalStyles />
      <Modal
        title="Create Appointments"
        visible={visible}
        onOk={onOk}
        onCancel={confirmCancel}
        width="100%"
        style={{ top: 0 }}
        bodyStyle={{ height: '100%', padding: screenIsAtMost('md') ? 0 : '' }}
        footer={null}
        destroyOnClose
        wrapClassName="create-booking-modal"
      >
        <Row gutter={32} style={{ height: '100%' }}>
          <Col xs={{ span: 24 }} lg={{ span: 16 }}>
            <BookingDetails
              bookings={bookings}
              setBookings={setBookings}
              defaultBookingState={defaultBookingState}
              bookingDate={bookingDate}
              setBookingDate={setBookingDate}
              servicesResponse={servicesResponse}
              employeesResponse={employeesResponse}
              validateBookings={validateBookings}
              shouldValidate={shouldValidate}
            />
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 8 }}>
            <ClientDetails
              ref={ref => {
                formRef = (ref as unknown) as FormProps['form'];
              }}
            />
          </Col>
        </Row>
        <Card
          style={{
            position: 'fixed',
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: 10,
          }}
          bodyStyle={{
            height: '100%',
          }}
        >
          <Row
            gutter={32}
            justify="space-between"
            type="flex"
            style={{ padding: '0px 5px', height: '100%', alignItems: 'center' }}
          >
            <Button size="large" type="ghost" onClick={confirmCancel}>
              Cancel
            </Button>
            <Col style={{ textAlign: 'center' }}>
              <Typography>{`Total: $${getTotalPrice()} (${getTotalDuration()})`}</Typography>
              <Button
                size="large"
                type="primary"
                loading={loadingCreateBooking}
                onClick={() => {
                  setShouldValidate(true);
                  if (formRef) {
                    formRef.validateFields((errors, values) => {
                      if (!errors) {
                        if (!validateBookings()) {
                          bookings.forEach(booking => {
                            createBooking({
                              variables: {
                                createdAt: now,
                                start: booking.selectedStartTime,
                                end: moment(booking.selectedStartTime)
                                  .add(booking.selectedDuration, 's')
                                  .format(),
                                status: 'PENDING',
                                bookingBranchId: branchId,
                                bookingEmployeeId: booking.selectedEmployee,
                                clientEmail: values.clientEmail ? values.clientEmail : undefined,
                                clientName: values.clientName,
                                clientFamilyName: values.clientFamilyName,
                                clientPhone: values.clientPhone
                                  ? `+598${values.clientPhone}`
                                  : undefined,
                              },
                              refetchQueries: [
                                {
                                  query: GetBookingsForBranch,
                                  variables: {
                                    id: branchId,
                                  },
                                },
                              ],
                            });
                          });
                        }
                      }
                    });
                  }
                }}
              >
                Create
              </Button>
            </Col>
          </Row>
        </Card>
      </Modal>
    </>
  );
}
