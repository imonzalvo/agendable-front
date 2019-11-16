import React, { useState } from 'react';
import { Spin, Row, Col } from 'antd';
import { DayPickerSingleDateController } from 'react-dates';
import moment, { Moment } from 'moment-timezone';
import 'react-dates/lib/css/_datepicker.css';
import 'moment/locale/es';

import { Container } from './styles';
import Timeslot from './Timeslot';
import { getTimeslots } from '@/utils/getTimeslots';

interface DateTimePickerProps {
  isLoading?: boolean;
  availablePeriods: { from: string; to: string }[];
  serviceDuration: number;
  handleSelectDate: (date: string) => void;
  handleDateChange: (date: Moment) => void;
}

moment.locale('es');
const today = moment();
const maxDate = moment().add(1, 'M');

const DateTimePicker = ({
  isLoading,
  availablePeriods,
  serviceDuration,
  handleSelectDate,
  handleDateChange,
}: DateTimePickerProps) => {
  const [date, setDate] = useState(today);
  const [isFocused, setfocus] = useState(false);

  const onDateChange = (newDate: Moment) => {
    setDate(newDate);
    handleDateChange(newDate);
  };

  const onFocusChange = () => {
    setfocus(prevFocus => !prevFocus);
  };
  const renderTimeSlots = () => {
    const timeslots = getTimeslots(availablePeriods, date.format('YYYY-MM-DD'), serviceDuration);

    return (
      <Row>
        {timeslots.map(({ date: dateTime, time }) => (
          <Col key={dateTime} xs={12}>
            <Timeslot date={dateTime} time={time} handleClick={handleSelectDate} />
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <Container>
      <DayPickerSingleDateController
        onDateChange={newDate => !!newDate && onDateChange(newDate)}
        onFocusChange={onFocusChange}
        focused={isFocused}
        date={date}
        isOutsideRange={d => !moment(d).isBetween(today, maxDate)}
      />
      {isLoading ? <Spin style={{ marginTop: 8 }} /> : renderTimeSlots()}
    </Container>
  );
};

export default DateTimePicker;
