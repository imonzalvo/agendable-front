import React from 'react';
import { Row, Col, Empty, Divider } from 'antd';
import styles from './timeslotsStyles.less';

import Timeslot from './Timeslot';

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

  return (
    <Row style={{ marginBottom: 36 }} justify="center" type="flex">
      {timeslots.map((item, i) => (
        <>
          {i === 0 && <Divider>Morning (7 - 12)</Divider>}
          {i === 6 && <Divider>Afternoon (12 - 17)</Divider>}
          <Col key={`${item.date} ${item.time}`}>
            <Timeslot date={item.date} time={item.time} handleClick={handleSelectDate} />
          </Col>
        </>
      ))}
    </Row>
  );
}

export default Timeslots;
