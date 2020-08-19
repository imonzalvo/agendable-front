import React from 'react';
import { Row, Col, Empty, Divider } from 'antd';
import styles from './timeslotsStyles.less';

import Timeslot from './Timeslot';
import groupTimeslots, { getText } from '@/utils/groupTimeslots';
import { TimeslotsContainer } from './styles';

function Timeslots({
  timeslots,
  isLoading,
  handleSelectDate,
}: {
  isLoading?: boolean;
  timeslots: { date: string; time: string }[];
  handleSelectDate: (date: string) => void;
}) {
  if (isLoading) {
    return (
      <Row style={{ marginBottom: 36 }} justify="center" type="flex">
        <>
          <Divider />
          {Array(20)
            .fill(1)
            .map(() => (
              <Col>
                <div className={styles.skeleton}></div>
              </Col>
            ))}
        </>
      </Row>
    );
  }

  if (timeslots.length === 0)
    return (
      <>
        <Divider />
        <Empty description={<span>No timeslots availables left, try selecting other day</span>} />
      </>
    );

  const dayParts = groupTimeslots(timeslots);

  return (
    <Row style={{ marginBottom: 36 }} justify="center" type="flex">
      {dayParts.map(({ category, timeslots }) => (
        <>
          <Divider>{getText(category)}</Divider>
          <TimeslotsContainer>
            {timeslots.map(timeslot => (
              <Col key={`${timeslot.date} ${timeslot.time}`}>
                <Timeslot
                  date={timeslot.date}
                  time={timeslot.time}
                  handleClick={handleSelectDate}
                />
              </Col>
            ))}
          </TimeslotsContainer>
        </>
      ))}
    </Row>
  );
}

export default Timeslots;
