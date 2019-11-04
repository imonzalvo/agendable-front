import React, { useState } from 'react';
import { Modal, Row, Col, Button, Card, Typography } from 'antd';
import { FormProps } from 'antd/lib/form';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QueryResult } from '@apollo/react-common';

import BookingDetails from './BookingDetails';
import ClientDetails from './ClientDetails';
import { GetBranchServices, CreateBooking } from './queries';
import { GlobalStyles } from './styles';
import { GetBranchServices as GetBranchServicesType } from './__generated__/GetBranchServices';
import { GetBranchEmployees as IGetBranchEmployees } from '@/queries/__generated__/GetBranchEmployees';

moment.locale('es');

const now = new Date().toISOString();

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
}: {
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
  employeesResponse: QueryResult<IGetBranchEmployees, Record<string, any>>;
  branchId: string;
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
  const [createBooking, bookingResponse] = useMutation(CreateBooking);

  let formRef: FormProps['form'] | null = null;

  const servicesResponse = useQuery<GetBranchServicesType>(GetBranchServices, {
    variables: { id: branchId },
  });

  const getTotal = () => bookingState.selectedServices.reduce((acc, _service, i) => acc + i, 0);

  return (
    <>
      <GlobalStyles />
      <Modal
        title="New Appointment"
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
        width="100%"
        style={{ top: 0 }}
        bodyStyle={{ height: '100%' }}
        footer={null}
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
            style={{ padding: '0px 15px', height: '100%', alignItems: 'center' }}
          >
            <Button size="large" type="ghost">
              Cancel
            </Button>
            <Typography.Title style={{ marginBottom: 0 }}>
              Total: <Typography.Text>${getTotal()}</Typography.Text>
            </Typography.Title>
            <Button
              size="large"
              type="primary"
              style={{ marginLeft: 16 }}
              onClick={() => {
                if (formRef) {
                  formRef.validateFields((errors, values) => {
                    if (!errors) {
                      // setBookingState(pS => ({ ...pS, ...values }));
                      createBooking({
                        variables: {
                          createdAt: now,
                          start: bookingState.selectedDateTime,
                          end: moment(bookingState.selectedDateTime)
                            .add(1, 'hour')
                            .toISOString(),
                          status: 'PENDING',
                          bookingBranchId: branchId,
                          bookingEmployeeId: bookingState.selectedEmployee,
                          clientEmail: values.clientEmail ? values.clientEmail : undefined,
                          clientName: values.clientName,
                          clientFamilyName: values.clientFamilyName,
                          clientPhone: values.clientPhone ? `+598${values.clientPhone}` : undefined,
                        },
                      });
                    }
                  });
                }
              }}
            >
              Create
            </Button>
          </Row>
        </Card>
      </Modal>
    </>
  );
}
