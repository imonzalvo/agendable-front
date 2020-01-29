import moment from 'moment-timezone';
import MockDate from 'mockdate';

import { getTimeslots } from './getTimeslots';

const availablePeriods = [{ from: '03:00', to: '03:30' }];

describe('getTimeslots tests', (): void => {
  // mock timezone
  moment.tz.setDefault('America/Montevideo');
  MockDate.set('2019-11-01');
  it('should return the correct dateTime if `today` is before selected date', (): void => {
    expect(getTimeslots(availablePeriods, '2019-11-16', 30)).toEqual([
      {
        date: '2019-11-16T00:00:00-03:00',
        time: '00:00',
      },
    ]);
  });
});
