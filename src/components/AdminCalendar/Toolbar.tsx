import React, { useState } from 'react';
import { Button, Radio, Icon, DatePicker } from 'antd';
import { ToolbarProps } from 'react-big-calendar';
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
import Sticky from 'react-sticky-el';
import moment from 'moment-timezone';
import { useResponsive } from 'react-hooks-responsive';

import GlobalToolbarStyles, { DayContainer } from './toolbarStyles';
import { generateWeekdays } from '@/utils/generateWeekdays';
import useEffectSkipMount from '@/hooks/useEffectSkipMount';

const VirtualizeSwipeableViews = virtualize(SwipeableViews);

// TODO: use moment or i18n for day name localization
const weekDayNames = [
  { short: 'D', long: 'Domingo' },
  { short: 'L', long: 'Lunes' },
  { short: 'M', long: 'Martes' },
  { short: 'X', long: 'Miércoles' },
  { short: 'J', long: 'Jueves' },
  { short: 'V', long: 'Viernes' },
  { short: 'S', long: 'Sábado' },
];

interface CustomToolbarProps extends ToolbarProps {
  onNewBooking: (selectedDate: Date) => void;
  onDateChange: (selectedDate: Date) => void;
}

function CustomToolbar({
  date: selectedDate,
  onNavigate,
  onNewBooking,
  onDateChange,
}: CustomToolbarProps) {
  const [weekdays] = useState(generateWeekdays(selectedDate));
  const [sliderIndex, setSliderIndex] = useState(0);
  const { screenIsAtLeast } = useResponsive({
    xs: 0,
    sm: 415,
    md: 510,
  });

  useEffectSkipMount(() => {
    onDateChange(selectedDate);
    const weeksDifferenceFromSelectedDate = moment(selectedDate)
      .startOf('week')
      .diff(moment(weekdays[0]), 'weeks');
    // if new selected selectedDate is in a different weekday, set new slider index to the difference of curr selectedDate with the curr week
    if (weeksDifferenceFromSelectedDate) {
      setSliderIndex(weeksDifferenceFromSelectedDate);
    }
  }, [selectedDate]);

  const slideRenderer = ({ index, key }: { index: number; key: number }) => {
    const weekdaysArr =
      index < 0
        ? generateWeekdays(
            moment(weekdays[0])
              .subtract(-index, 'week')
              .toDate(),
          )
        : generateWeekdays(
            moment(weekdays[0])
              .add(index, 'week')
              .toDate(),
          );

    return (
      <Radio.Group
        value={selectedDate.valueOf()}
        onChange={v => {
          onNavigate('DATE', new Date(v.target.value));
        }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          flex: 1,
        }}
        key={key}
      >
        {weekdaysArr.map(weekDay => (
          <DayContainer
            value={weekDay.valueOf()}
            key={weekDay.valueOf()}
            isToday={moment(weekDay).isSame(moment(), 'day')}
            isChecked={weekDay.valueOf() === selectedDate.valueOf()}
          >
            <div style={{ lineHeight: 'initial' }}>{weekDay.getDate()}</div>
            <div style={{ lineHeight: 'initial' }}>
              {weekDayNames[weekDay.getDay()][screenIsAtLeast('md') ? 'long' : 'short']}
            </div>
          </DayContainer>
        ))}
      </Radio.Group>
    );
  };

  return (
    <>
      <GlobalToolbarStyles />
      <Sticky
        boundaryElement=".rbc-calendar"
        stickyStyle={{ zIndex: 20 }}
        style={{ position: 'relative', zIndex: 20 }}
      >
        <div className="rbc-toolbar">
          <div
            style={{
              zIndex: 15,
              padding: '10px 0',
              backgroundColor: 'rgb(240, 242, 245)',
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Button
                style={{ marginRight: 10 }}
                onClick={() => onNavigate('TODAY')}
                size="large"
                icon="history"
              >
                Today
              </Button>
              <DatePicker
                value={moment(selectedDate)}
                size="large"
                onChange={newDate => {
                  if (newDate) {
                    onNavigate('DATE', newDate.toDate());
                  }
                }}
                format="L"
                allowClear={false}
              />
              <Button
                type="primary"
                onClick={() => onNewBooking(selectedDate)}
                style={{ marginLeft: screenIsAtLeast('md') ? 'auto' : 10 }}
                size="large"
                icon="plus"
              >
                {screenIsAtLeast('sm') && 'Agendar'}
              </Button>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px 0',
                backgroundColor: 'rgb(240, 242, 245)',
                width: '100%',
              }}
            >
              <Button
                style={{ marginRight: 8, height: 40, padding: '0 7px' }}
                onClick={() => {
                  setSliderIndex(pS => pS - 1);
                }}
              >
                <Icon type="left" />
              </Button>
              <VirtualizeSwipeableViews
                index={sliderIndex}
                onChangeIndex={setSliderIndex}
                slideRenderer={slideRenderer}
                enableMouseEvents
                disableLazyLoading
                hysteresis={0.4}
                ignoreNativeScroll
                resistance
                overscanSlideAfter={1}
                overscanSlideBefore={1}
              />
              <Button
                style={{ marginLeft: 8, height: 40, padding: '0 7px' }}
                onClick={() => {
                  setSliderIndex(pS => pS + 1);
                }}
              >
                <Icon type="right" />
              </Button>
            </div>
          </div>
        </div>
      </Sticky>
    </>
  );
}

export default CustomToolbar;
