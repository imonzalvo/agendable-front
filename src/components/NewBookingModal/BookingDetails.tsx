import React, { useState, useEffect } from 'react';
import { Row, Col, Select, Typography, Card, Form, Empty } from 'antd';
import { SingleDatePicker } from 'react-dates';
import moment, { Moment } from 'moment';
import produce from 'immer';
import { QueryResult } from '@apollo/react-common';
import { oc } from 'ts-optchain';
import { useLazyQuery } from '@apollo/react-hooks';
import { get } from 'lodash';

import {
  GetBranchServices as GetBranchServicesType,
  GetBranchServices_getBranch_services_items_service,
} from './__generated__/GetBranchServices';
import {
  GetBranchEmployees as IGetBranchEmployees,
  GetBranchEmployees_getBranch_employees_items,
} from '@/queries/__generated__/GetBranchEmployees';
import { GetEmployeeAvailableTime } from './queries';
import { BookingState } from '.';
import { getTimeslots } from '@/utils/getTimeslots';
import PageLoading from '@/components/PageLoading';
import Timeslot from './Timeslot';

moment.locale('es');
const { Option } = Select;

const today = moment();

interface BookingDetailsProps {
  setBookingState: React.Dispatch<React.SetStateAction<BookingState>>;
  servicesResponse: QueryResult<GetBranchServicesType, Record<string, any>>;
  employeesResponse: QueryResult<IGetBranchEmployees, Record<string, any>>;
  selectedServices: BookingState['selectedServices'];
  selectedEmployee: BookingState['selectedEmployee'];
  selectedDateTime: BookingState['selectedDateTime'];
}

export default function BookingDetails({
  setBookingState,
  servicesResponse,
  employeesResponse,
  selectedServices,
  selectedEmployee,
  selectedDateTime,
}: BookingDetailsProps) {
  const [calendarState, setCalendarState] = useState<{
    isLoading: boolean;
    isFocused: boolean;
    date: Moment;
  }>({
    isLoading: false,
    isFocused: false,
    date: today,
  });

  const [getEmployeeAvailableTime, employeeAvailableTimeResponse] = useLazyQuery(
    GetEmployeeAvailableTime,
  );

  useEffect(() => {
    if (calendarState.date && selectedServices.length > 0 && selectedEmployee) {
      getEmployeeAvailableTime({
        variables: {
          id: selectedEmployee,
          duration: 40,
          date: calendarState.date,
        },
      });
    }
  }, [calendarState.date, selectedServices, selectedEmployee]);

  const onDateChange = (newDate: Moment) => {
    setCalendarState(pS =>
      produce(pS, calendar => {
        calendar.date = newDate;
        calendar.isLoading = true;
      }),
    );
    setTimeout(() => {
      setCalendarState(pS =>
        produce(pS, calendar => {
          calendar.isLoading = false;
        }),
      );
    }, 1000);
  };

  const onFocusChange = () => {
    setCalendarState(pS =>
      produce(pS, calendar => {
        calendar.isFocused = !calendar.isFocused;
      }),
    );
  };

  const onServiceChange = (e: BookingDetailsProps['selectedServices']) => {
    setBookingState(pS =>
      produce(pS, dS => {
        dS.selectedServices = e;
      }),
    );
  };

  const onEmployeeChange = (e: BookingDetailsProps['selectedEmployee']) => {
    setBookingState(pS =>
      produce(pS, dS => {
        dS.selectedEmployee = e;
      }),
    );
  };

  const onSelectTimeslot = (dateTime: string) => {
    setBookingState(pS =>
      produce(pS, dS => {
        dS.selectedDateTime = dateTime;
      }),
    );
  };

  const getServices = () => {
    const services: [{ service: GetBranchServices_getBranch_services_items_service }] = get(
      servicesResponse,
      'data.getBranch.services.items',
    );
    if (Array.isArray(services)) {
      return services.map(({ service: { id, name } }) => (
        <Option key={id} value={id}>
          {name}
        </Option>
      ));
    }
    return [];
  };

  const getEmployees = () => {
    const employees: [GetBranchEmployees_getBranch_employees_items] = get(
      employeesResponse,
      'data.getBranch.employees.items',
    );
    return Array.isArray(employees)
      ? employees.map(({ id, givenName }) => (
          <Option key={id} value={id}>
            {givenName}
          </Option>
        ))
      : null;
  };

  const renderTimeslots = () => {
    if (!calendarState.date) {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Empty description="Select Date" />
        </div>
      );
    }
    if (selectedServices.length === 0) {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Empty description="Select at least one Service" />
        </div>
      );
    }
    if (!selectedEmployee) {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Empty description="Select Employee" />
        </div>
      );
    }
    if (employeeAvailableTimeResponse.loading || !employeeAvailableTimeResponse.data) {
      return (
        <div
          style={{
            height: '100%',
          }}
        >
          <PageLoading />
        </div>
      );
    }
    const availablePeriods = JSON.parse(
      employeeAvailableTimeResponse.data.getEmployeeAvailableTime,
    );

    const timeslots = getTimeslots(availablePeriods, calendarState.date.format('YYYY-MM-DD'), 40);

    if (timeslots.length > 0) {
      return (
        <Row>
          {timeslots.map(({ date: dateTime, time }: { date: string; time: string }) => (
            <Col key={dateTime} xs={12}>
              <Timeslot
                isSelected={dateTime === selectedDateTime}
                date={dateTime}
                time={time}
                handleClick={date => onSelectTimeslot(date)}
              />
            </Col>
          ))}
        </Row>
      );
    }
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Empty description="No timeslots left" />
      </div>
    );
  };

  return (
    <Card style={{ height: '75%' }} bodyStyle={{ height: '100%' }}>
      <Typography.Title>Appointment Details</Typography.Title>
      <Row gutter={32} style={{ height: '100%' }}>
        <Col
          span={12}
          style={{
            height: '85%',
            overflow: 'auto',
          }}
        >
          <Form.Item label="Date">
            <SingleDatePicker
              onDateChange={date => !!date && onDateChange(date)}
              onFocusChange={onFocusChange}
              focused={calendarState.isFocused}
              date={calendarState.date}
              isOutsideRange={() => false}
              numberOfMonths={1}
              id="booking-date"
            />
          </Form.Item>
          {!servicesResponse.loading && !!oc(servicesResponse).data.getBranch.services.items && (
            <Form.Item label="Services">
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Please select"
                value={selectedServices}
                onChange={onServiceChange}
                size="large"
              >
                {getServices()}
              </Select>
            </Form.Item>
          )}
          {!employeesResponse.loading && (
            <Form.Item label="Employee">
              <Select
                showSearch
                style={{ width: '100%' }}
                placeholder="Please select"
                value={selectedEmployee}
                onChange={onEmployeeChange}
                size="large"
                disabled={selectedServices.length === 0}
              >
                {getEmployees()}
              </Select>
            </Form.Item>
          )}
        </Col>
        <Col
          span={12}
          style={{
            height: '85%',
            overflow: 'auto',
          }}
        >
          {renderTimeslots()}
        </Col>
      </Row>
    </Card>
  );
}
