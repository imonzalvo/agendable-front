import React, { useState } from 'react';
import { Spin, Row, Col } from 'antd';
import { DayPickerSingleDateController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment, { Moment } from 'moment';
import 'moment/locale/es';

import { Container } from './styles';

import TimeSlot from './TimeSlot';

moment.locale('es');
const today = moment();
const maxDate = moment().add(1, 'M');

const DateTimePicker = () => {
  const [date, setDate] = useState(today);
  const [isFocused, setfocus] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const onDateChange = (newDate: Moment) => {
    setLoading(true);
    setDate(newDate);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const onFocusChange = () => {
    setfocus(prevFocus => !prevFocus);
  };

  const renderTimeSlots = () => {
    const dummyTimeSlots = [
      { id: 1, time: '4 PM', handleClick: () => {} },
      { id: 2, time: '4:30 PM', handleClick: () => {}, disabled: true },
      { id: 3, time: '5 PM', handleClick: () => {} },
    ];
    return (
      <Row>
        {dummyTimeSlots.map(timeSlot => (
          <Col xs={12}>
            <TimeSlot {...timeSlot} />
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
