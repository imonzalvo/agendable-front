import React, { useState } from 'react';
import { Modal, Row, Col, Button, Card, message, Spin } from 'antd';
import { FormProps } from 'antd/lib/form';
import moment from 'moment-timezone';
import 'react-dates/lib/css/_datepicker.css';
import { useQuery, useMutation, QueryResult } from '@apollo/client';
import { Moment } from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { useResponsive } from 'react-hooks-responsive';
import { formatMessage } from 'umi-plugin-locale';

import { UPDATE_BOOKING, DELETE_BOOKING } from './queries';
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

export interface EditBookingModalProps {
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
  employeesResponse: QueryResult<IGetBranchEmployees, Record<string, any>>;
  branchId: string;
  modalParams: ModalState['params'];
}

export default function EditBookingModal({
  visible,
  onOk,
  onCancel,
  employeesResponse,
  branchId,
  modalParams,
}: EditBookingModalProps) {
  console.log(modalParams, modalParams);
  const defaultBookingState = {
    id: modalParams?.bookingId,
    selectedServices: modalParams?.services.map(service => service.id),
    selectedEmployee: modalParams?.employeeId,
    selectedStartTime: moment(modalParams?.selectedStartTime).format(),
    selectedDuration: modalParams?.selectedDuration,
    errors: [],
  };

  const [bookings, setBookings] = useState<BookingState[]>([{ ...defaultBookingState }]);
  const [bookingDate, setBookingDate] = useState<Moment>(moment(modalParams?.date));
  const [shouldValidate, setShouldValidate] = useState(false);

  const [editBooking, { loading: loadingEditBooking }] = useMutation(UPDATE_BOOKING, {
    onCompleted: d => {
      message.success('Successfully Edited Booking');
      onCancel();
    },
    onError: err => {
      message.error(JSON.stringify(err));
    },
  });

  const [deleteBooking, { loading: loadingDeleteBooking }] = useMutation(DELETE_BOOKING);

  let formRef: FormProps['form'] | null = null;

  const servicesResponse = useQuery<GetBranchServicesType>(GetBranchServices, {
    variables: { id: branchId },
  });

  const { screenIsAtMost } = useResponsive(defaultScreenSizes);

  if (!modalParams) {
    return <div>err</div>;
  }

  return (
    <>
      <GlobalStyles />
      <Modal
        title={formatMessage({ id: 'modal.editAppointment' })}
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
        <Spin spinning={loadingDeleteBooking || loadingEditBooking}>
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
                clientEmail={modalParams.clientEmail}
                clientName={modalParams.clientName}
                clientFamilyName={modalParams.clientFamilyName}
                clientPhone={modalParams.clientPhone}
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
              <Button
                size="large"
                type="danger"
                ghost
                onClick={() => {
                  Modal.confirm({
                    title: formatMessage({ id: 'message.areYouSure' }),
                    content: formatMessage({ id: 'message.actionIrreversible' }),
                    onOk() {
                      const deleteBookingData = async () => {
                        await deleteBooking({
                          variables: {
                            id: modalParams.bookingId,
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
                        onCancel();
                      };
                      deleteBookingData();
                    },
                    okButtonProps: {
                      type: 'danger',
                    },
                    okText: formatMessage({ id: 'button.confirmDelete' }),
                    cancelText: formatMessage({ id: 'button.cancel' }),
                  });
                }}
              >
                {formatMessage({ id: 'button.delete' })}
              </Button>

              <Col style={{ textAlign: 'center' }}>
                <Button
                  size="large"
                  type="ghost"
                  onClick={() => confirmCancel(onCancel)}
                  style={{ marginRight: 24 }}
                >
                  {formatMessage({ id: 'button.cancel' })}
                </Button>
                <Button
                  size="large"
                  type="primary"
                  onClick={() => {
                    setShouldValidate(true);
                    if (formRef) {
                      formRef.validateFields((errors, values) => {
                        if (!errors) {
                          if (!validateBookings(setBookings)) {
                            bookings.forEach(async (booking, i) => {
                              try {
                                await editBooking({
                                  variables: {
                                    id: booking.id,
                                    start: booking.selectedStartTime,
                                    end: moment(booking.selectedStartTime)
                                      .add(booking.selectedDuration, 's')
                                      .format(),
                                    status: 'PENDING',
                                    branchId,
                                    servicesId: booking.selectedServices,
                                    employeeId: booking.selectedEmployee,
                                    clientEmail: values.clientEmail
                                      ? values.clientEmail
                                      : undefined,
                                    clientPhone: values.clientPhone
                                      ? `+598${values.clientPhone}`
                                      : undefined,
                                    clientName: values.clientName,
                                    clientFamilyName: values.clientFamilyName,
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
                              } catch (err) {
                                message.error(
                                  `There was an error when updating booking services. Contact support with this error: ${JSON.stringify(
                                    err,
                                  )}`,
                                  60000,
                                );
                              }
                            });
                          }
                        }
                      });
                    }
                  }}
                >
                  {`${formatMessage({ id: 'button.edit' })} |
                  ${getTotalPrice(servicesResponse, bookings)} (${getTotalDuration(bookings)})`}
                </Button>
              </Col>
            </Row>
          </Card>
        </Spin>
      </Modal>
    </>
  );
}
