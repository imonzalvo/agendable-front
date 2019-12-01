import moment from 'moment-timezone';
import MockDate from 'mockdate';

import { generateWeekdays } from './generateWeekdays';

describe('generateWeekdays tests', (): void => {
  MockDate.set('2019-11-30');
  moment.tz.setDefault('America/Montevideo');

  const today = moment();
  it('should return correct weekdays for a Saturday', (): void => {
    expect(generateWeekdays(today.toDate())).toEqual([
      today
        .clone()
        .subtract(5, 'day')
        .toDate(),
      today
        .clone()
        .subtract(4, 'day')
        .toDate(),
      today
        .clone()
        .subtract(3, 'day')
        .toDate(),
      today
        .clone()
        .subtract(2, 'day')
        .toDate(),
      today
        .clone()
        .subtract(1, 'day')
        .toDate(),
      today.toDate(),
      today
        .clone()
        .add(1, 'day')
        .toDate(),
    ]);
  });
});
