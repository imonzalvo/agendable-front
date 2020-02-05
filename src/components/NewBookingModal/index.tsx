import React, { useState } from 'react';
import { Modal, Row, Col, Button, Card, message } from 'antd';
import { FormProps } from 'antd/lib/form';
import moment from 'moment-timezone';
import 'react-dates/lib/css/_datepicker.css';
import { useQuery, useMutation, QueryResult } from '@apollo/client';
import { Moment } from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { useResponsive } from 'react-hooks-responsive';
import { formatMessage } from 'umi-plugin-locale';

import { CREATE_BOOKING } from '@/graphql/sharedQueries';
import { GetBranchServices } from '@/queries/adminPageQueries';
import ClientDetails from '@/components/ClientDetails';
import BookingDetails from '@/components/BookingDetails';
import { GlobalStyles } from './styles';
import { defaultScreenSizes } from '@/utils/utils';
import {
  validateBookings,
  getTotalPrice,
  getTotalDuration,
  confirmCancel,
} from '@/utils/bookingModalShared';
import { GetBookingsForBranch } from '@/components/AdminCalendar/queries';
import { ModalState, BookingState } from '@/pages/a/$businessHandle/admin';
import { GetBranchServices as GetBranchServicesType } from '@/queries/__generated__/GetBranchServices';
import { GetBranchEmployees as IGetBranchEmployees } from '@/queries/__generated__/GetBranchEmployees';

moment.locale('es');
momentDurationFormatSetup(moment);

const now = moment().format();

export interface NewBookingModalProps {
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
  employeesResponse: QueryResult<IGetBranchEmployees, Record<string, any>>;
  branchId: string;
  modalParams: ModalState['params'];
}

export default function NewBookingModal({
  visible,
  onOk,
  onCancel,
  employeesResponse,
  branchId,
  modalParams,
}: NewBookingModalProps) {
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

  const [createBooking, { loading: loadingCreateBooking }] = useMutation(CREATE_BOOKING, {
    onCompleted: d => {
      message.success(formatMessage({ id: 'booking.success' }));
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

  const { screenIsAtMost } = useResponsive(defaultScreenSizes);

  return (
    <>
      <GlobalStyles />
      <Modal
        title={formatMessage({ id: 'modal.createAppointment' })}
        visible={visible}
        onOk={onOk}
        onCancel={() => confirmCancel(onCancel)}
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
              validateBookings={() => validateBookings(setBookings)}
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
            justify="end"
            type="flex"
            style={{ padding: '0px 5px', height: '100%', alignItems: 'center' }}
          >
            <Col style={{ textAlign: 'center' }}>
              <Button
                size="large"
                type="ghost"
                onClick={() => confirmCancel(onCancel)}
                style={{ marginRight: 24 }}
              >
                Cancel
              </Button>
              <Button
                size="large"
                type="primary"
                loading={loadingCreateBooking}
                onClick={() => {
                  setShouldValidate(true);
                  if (formRef) {
                    formRef.validateFields((errors, values) => {
                      if (!errors) {
                        if (!validateBookings(setBookings)) {
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
                                servicesId: booking.selectedServices,
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
                {`${formatMessage({ id: 'button.createBooking' })} | 
                ${getTotalPrice(servicesResponse, bookings)} (${getTotalDuration(bookings)})`}
              </Button>
            </Col>
          </Row>
        </Card>
      </Modal>
    </>
  );
}
