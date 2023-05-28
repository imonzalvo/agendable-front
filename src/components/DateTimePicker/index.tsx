import React, { useState } from 'react';
import moment, { Moment } from 'moment-timezone';
import { animateScroll as scroll } from 'react-scroll';
import { Divider, Empty, Card } from 'antd';
import { useSpring, animated, config } from 'react-spring';
import InfiniteCalendar from 'react-infinite-calendar';
import { formatMessage, getLocale } from 'umi-plugin-locale';
import es from 'date-fns/locale/es';
import en from 'date-fns/locale/en';
import 'react-infinite-calendar/styles.css';

import GlobalStyles, { Container } from './styles';
import { getTimeslots } from '@/utils/getTimeslots';
import Timeslots from './timeslots';

const AnimatedContainer = animated(Container);

interface DateTimePickerProps {
  isLoading?: boolean;
  availablePeriods: { from: string; to: string }[];
  serviceDuration: number;
  handleSelectDate: (date: string) => void;
  handleDateChange: (date: Moment) => void;
  scheduleSeparation: number;
}

moment.locale('es');
const today = new Date();
const maxDate = moment()
  .add(1, 'M')
  .toDate();

const DateTimePicker = ({
  isLoading,
  availablePeriods,
  serviceDuration,
  handleSelectDate,
  handleDateChange,
  scheduleSeparation,
}: DateTimePickerProps) => {
  const [date, setDate] = useState();
  const timeslots = date
    ? getTimeslots(availablePeriods, date.format('YYYY-MM-DD'), serviceDuration, scheduleSeparation)
    : [];
  const spring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { ...config.gentle, tension: 500 },
  });

  const onDateChange = (newDate: Moment) => {
    setDate(newDate);
    handleDateChange(newDate);
  };

  return (
    <AnimatedContainer style={spring}>
      <GlobalStyles />
      <Card
        style={{
          borderRadius: 10,
          overflow: 'hidden',
          boxShadow: `6px 0 16px -8px rgba(0, 0, 0, 0.08), 9px 0 28px 0 rgba(0, 0, 0, 0.05),
            12px 0 48px 16px rgba(0, 0, 0, 0.03)`,
        }}
        bodyStyle={{ padding: 0 }}
      >
        <InfiniteCalendar
          width={350}
          height={250}
          selected={date || false}
          min={today}
          max={maxDate}
          minDate={today}
          maxDate={maxDate}
          locale={{
            locale: getLocale().startsWith('es') ? es : en,
            blank: formatMessage({ id: 'dates.picker.headerBlank' }),
            headerFormat: formatMessage({ id: 'dates.picker.headerFormat' }),
            todayLabel: {
              long: formatMessage({ id: 'dates.picker.todayLabel.long' }),
            },
            weekdays: [
              formatMessage({ id: 'dates.weekday.sun' }),
              formatMessage({ id: 'dates.weekday.mon' }),
              formatMessage({ id: 'dates.weekday.tue' }),
              formatMessage({ id: 'dates.weekday.wed' }),
              formatMessage({ id: 'dates.weekday.thu' }),
              formatMessage({ id: 'dates.weekday.fri' }),
              formatMessage({ id: 'dates.weekday.sat' }),
            ],
            weekStartsOn: Number(formatMessage({ id: 'dates.weekStartsOn' })),
          }}
          onSelect={(newDate: Date) => {
            onDateChange(moment(newDate));
            scroll.scrollTo(200);
          }}
          theme={{
            headerColor: 'rgb(0, 21, 41)',
            weekdayColor: '#fff',
            accentColor: '#33cc99',
            selectionColor: '#3c9',
            todayColor: '#ccc',
            floatingNav: {
              background: 'rgba(51, 204, 153, 0.72)',
              chevron: '#fff',
              color: '#FFF',
            },
          }}
        />
      </Card>

      {date ? (
        <Timeslots
          isLoading={isLoading}
          timeslots={timeslots}
          handleSelectDate={handleSelectDate}
        />
      ) : (
        <>
          <Divider />
          <Empty description={formatMessage({ id: 'booking.selectDateFirst' })} />
        </>
      )}
    </AnimatedContainer>
  );
};

export default DateTimePicker;
