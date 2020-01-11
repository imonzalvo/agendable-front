import React, { useState } from 'react';
import { Modal, Row, Col, Button, Card, Descriptions, message } from 'antd';
import { FormProps } from 'antd/lib/form';
import moment from 'moment-timezone';
import 'react-dates/lib/css/_datepicker.css';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QueryResult } from '@apollo/react-common';
import { get, keyBy } from 'lodash';

import { GetBranchServices, GetBooking, EditBooking } from './queries';
import ClientDetails from '@/components/ClientDetails';
import BookingDetails from '@/components/BookingDetails';
import { GetBookingsForBranch } from '@/components/AdminCalendar/queries';
import { GlobalStyles } from './styles';
import { GetBranchServices as GetBranchServicesType } from '@/components/NewBookingModal/__generated__/GetBranchServices';
import { GetBranchEmployees as IGetBranchEmployees } from '@/queries/__generated__/GetBranchEmployees';

moment.locale('es');

const now = moment().format();

export interface BookingState {
  selectedServices: [string?];
  selectedEmployee?: string;
  selectedDateTime?: string;
  clientEmail: string;
  clientName: string;
  clientFamilyName: string;
  clientPhone: string;
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
  modalParams?: { date?: Date };
}) {
  const [bookingState, setBookingState] = useState<BookingState>({
    selectedServices: [],
    selectedEmployee: undefined,
    selectedDateTime: undefined,
    clientEmail: '',
    clientName: '',
    clientFamilyName: '',
    clientPhone: '',
  });
  // const [editBooking] = useMutation(EditBooking, {
  //   onCompleted: d => {
  //     message.success('Successfully Created Booking');
  //     onCancel();
  //   },
  //   onError: err => {
  //     message.error(JSON.stringify(err));
  //   },
  // });

  let formRef: FormProps['form'] | null = null;

  const servicesResponse = useQuery<GetBranchServicesType>(GetBranchServices, {
    variables: { id: branchId },
  });

  const getTotal = () => {
    const services = get(servicesResponse, 'data.getBranch.services.items');
    if (services) {
      const servicesObj = keyBy(services, 'service.id');
      return bookingState.selectedServices.reduce(
        (acc: number | undefined, serviceId: string | undefined) =>
          serviceId ? acc + servicesObj[serviceId].service.price : 0,
        0,
      );
    }
    return 0;
  };

  const getTotalDuration = () => {
    const services = get(servicesResponse, 'data.getBranch.services.items');
    if (services) {
      const servicesObj = keyBy(services, 'service.id');
      return (
        bookingState.selectedServices.reduce(
          (acc: number | undefined, serviceId: string | undefined) =>
            serviceId ? acc + servicesObj[serviceId].service.duration : 0,
          0,
        ) || 0
      );
    }
    return 0;
  };

  const getBookingEnd = () =>
    moment(bookingState.selectedDateTime).add(getTotalDuration(), 'minutes');

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
        title="New Appointment"
        visible={visible}
        onOk={onOk}
        onCancel={confirmCancel}
        width="100%"
        style={{ top: 0 }}
        bodyStyle={{ height: '100%' }}
        footer={null}
        destroyOnClose
        wrapClassName="create-booking-modal"
      >
        <Row gutter={32} style={{ height: '100%' }}>
          <Col span={16} style={{ height: '100%' }}>
            <BookingDetails
              setBookingState={setBookingState}
              servicesResponse={servicesResponse}
              employeesResponse={employeesResponse}
              selectedServices={bookingState.selectedServices}
              selectedEmployee={bookingState.selectedEmployee}
              selectedDateTime={bookingState.selectedDateTime}
              duration={getTotalDuration()}
              defaultDate={get(modalParams, 'date')}
            />
          </Col>
          <Col span={8} style={{ height: '100%' }}>
            <ClientDetails
              ref={ref => {
                formRef = (ref as unknown) as FormProps['form'];
              }}
            />
          </Col>
        </Row>
        <Card
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
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
            <Descriptions layout="vertical" bordered size="small">
              <Descriptions.Item label="Scheduled Time">
                {bookingState.selectedDateTime
                  ? `${moment(bookingState.selectedDateTime).format(
                      'HH:mm',
                    )} to ${getBookingEnd().format('HH:mm')}`
                  : 'Select Timeslot'}
              </Descriptions.Item>
              <Descriptions.Item label="Total">${getTotal()}</Descriptions.Item>
            </Descriptions>
            <Button
              size="large"
              type="primary"
              style={{ marginLeft: 16 }}
              // onClick={() => {
              //   if (formRef) {
              //     formRef.validateFields((errors, values) => {
              //       if (!errors) {
              //         // setBookingState(pS => ({ ...pS, ...values }));
              //         editBooking({
              //           variables: {
              //             createdAt: now,
              //             start: bookingState.selectedDateTime,
              //             end: getBookingEnd().format(),
              //             status: 'PENDING',
              //             bookingBranchId: branchId,
              //             bookingEmployeeId: bookingState.selectedEmployee,
              //             clientEmail: values.clientEmail ? values.clientEmail : undefined,
              //             clientName: values.clientName,
              //             clientFamilyName: values.clientFamilyName,
              //             clientPhone: values.clientPhone ? `+598${values.clientPhone}` : undefined,
              //           },
              //           refetchQueries: [
              //             {
              //               query: GetBookingsForBranch,
              //               variables: {
              //                 id: branchId,
              //               },
              //             },
              //           ],
              //         });
              //       }
              //     });
              //   }
              // }}
            >
              Create
            </Button>
          </Row>
        </Card>
      </Modal>
    </>
  );
}
