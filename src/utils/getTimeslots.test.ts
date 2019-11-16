import moment from 'moment-timezone';

import { getTimeslots } from './getTimeslots';

const availablePeriods = [{ from: '03:00', to: '03:30' }];

describe('getTimeslots tests', (): void => {
  // mock timezone
  moment.tz.setDefault('America/Montevideo');
  it('should return the correct dateTime', (): void => {
    expect(getTimeslots(availablePeriods, '2019-11-16', 30)).toEqual([
      {
        date: '2019-11-16T00:00:00-03:00',
        time: '12:00 AM',
      },
    ]);
  });
});