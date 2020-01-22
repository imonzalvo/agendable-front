import React, { useEffect } from 'react';
import { Card, Form, Select, Row, Col } from 'antd';
import { Moment } from 'moment';
import moment from 'moment-timezone';
import momentDurationFormatSetup from 'moment-duration-format';
import { keyBy } from 'lodash';
import { QueryResult } from '@apollo/react-common';
import { useResponsive } from 'react-hooks-responsive';

import { GetBranchServices as GetBranchServicesType } from '../NewBookingModal/__generated__/GetBranchServices';
import { BookingState } from '@/components/NewBookingModal';
import generateTimesAtIntervals from '@/utils/generateTimesAtIntervals';
import useEffectSkipMount from '@/hooks/useEffectSkipMount';

const { Option } = Select;
momentDurationFormatSetup(moment);

export interface BookingCardProps extends BookingState {
  date: Moment;
  servicesResponse: QueryResult<GetBranchServicesType, Record<string, any>>;
  validateBookings: () => boolean;
  shouldValidate: boolean;
  renderEmployees: () => JSX.Element[] | null;
  renderServices: () => (false | JSX.Element)[];
  onSelectStartTime: (e: string) => void;
  onServiceChange: (e: string[]) => void;
  onEmployeeChange: (e?: string | undefined) => void;
  onSelectDuration: (e: number) => void;
}

export default function BookingCard({
  date,
  servicesResponse,
  errors,
  validateBookings,
  shouldValidate,
  renderEmployees,
  renderServices,
  selectedStartTime,
  selectedServices,
  selectedEmployee,
  selectedDuration,
  onSelectStartTime,
  onServiceChange,
  onEmployeeChange,
  onSelectDuration,
}: BookingCardProps) {
  useEffect(() => {
    const services = servicesResponse?.data?.getBranch?.services?.items;
    const servicesObj = keyBy(services, 'service.id');
    if (selectedServices.length > 0 && servicesObj) {
      const totalDuration =
        selectedServices.reduce(
          (acc: number | undefined, serviceId: string | undefined) =>
            serviceId ? acc || 0 + (servicesObj?.[serviceId]?.service?.duration || 0) : 0,
          0,
        ) || 0;
      if (totalDuration > 0) {
        onSelectDuration(totalDuration * 60);
      }
    }
  }, [selectedServices]);

  useEffectSkipMount(() => {
    if (shouldValidate) {
      validateBookings();
    }
  }, [shouldValidate, selectedStartTime, selectedServices, selectedEmployee, selectedDuration]);

  const { screenIsAtLeast } = useResponsive({
    xs: 0,
    sm: 480,
    md: 576,
    lg: 768,
  });

  const getTimes = () => {
    const timesAtIntervalsArr = generateTimesAtIntervals(5);

    return timesAtIntervalsArr.map(time => {
      const timeMoment = moment(time, 'H:mm')
        .year(date.year())
        .dayOfYear(date.dayOfYear());
      return <Option value={timeMoment.format()}>{timeMoment.format('LT')}</Option>;
    });
  };

  const getDurations = () => {
    const durations = [
      300,
      600,
      900,
      1200,
      1500,
      1800,
      2100,
      2400,
      2700,
      3000,
      3300,
      3600,
      3900,
      4200,
      4500,
      4800,
      5100,
      5400,
      5700,
      6000,
      6300,
      6600,
      6900,
      7200,
      8100,
      9000,
      9900,
      10800,
      11700,
      12600,
      13500,
      14400,
      16200,
      18000,
      19800,
      21600,
      23400,
      25200,
      27000,
      28800,
      32400,
      36000,
      39600,
      43200,
    ];

    return durations.map(duration => (
      <Option value={duration}>
        {moment.duration(duration, 's').format('h[h] m[min]', { trim: 'both' })}
      </Option>
    ));
  };

  const firstColProps = screenIsAtLeast('sm')
    ? {
        style: { width: 130 },
      }
    : { span: 24 };

  const secondColProps = screenIsAtLeast('sm')
    ? {
        style: { flex: 1, marginLeft: 20 },
      }
    : { span: 24 };

  return (
    <Card size="small">
      <Row type={screenIsAtLeast('sm') ? 'flex' : undefined}>
        <Col {...firstColProps}>
          <Form.Item
            label="Start Time"
            validateStatus={errors.find(err => err.selectedStartTime) && 'error'}
            help={errors.find(err => err.selectedStartTime)?.selectedStartTime}
          >
            <Select
              style={{ width: '100%' }}
              size="large"
              showSearch
              onChange={(v: string) => {
                onSelectStartTime(v);
              }}
              defaultValue={moment(selectedStartTime).format()}
            >
              {getTimes()}
            </Select>
          </Form.Item>
        </Col>
        <Col {...secondColProps}>
          <Form.Item
            label="Service"
            validateStatus={errors.find(err => err.selectedServices) && 'error'}
            help={errors.find(err => err.selectedServices)?.selectedServices}
          >
            <Select
              mode="multiple"
              style={{ width: '100%' }}
              size="large"
              value={selectedServices}
              onChange={onServiceChange}
              showSearch
            >
              {renderServices()}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row type={screenIsAtLeast('sm') ? 'flex' : undefined}>
        <Col {...firstColProps}>
          <Form.Item
            label="Duration"
            validateStatus={errors.find(err => err.selectedDuration) && 'error'}
            help={errors.find(err => err.selectedDuration)?.selectedDuration}
          >
            <Select
              style={{ width: '100%' }}
              size="large"
              value={selectedDuration}
              onChange={onSelectDuration}
            >
              {getDurations()}
            </Select>
          </Form.Item>
        </Col>
        <Col {...secondColProps}>
          <Form.Item
            label="Staff"
            validateStatus={errors.find(err => err.selectedEmployee) && 'error'}
            help={errors.find(err => err.selectedEmployee)?.selectedEmployee}
          >
            <Select
              style={{ width: '100%' }}
              size="large"
              value={selectedEmployee}
              onChange={onEmployeeChange}
              showSearch
            >
              {renderEmployees()}
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
}