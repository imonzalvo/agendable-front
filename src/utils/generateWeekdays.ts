import moment from 'moment-timezone';

export const generateDays = (date: Date, days: number, direction: 'before' | 'after') => {
  const arrOfDays = [...Array(days)];
  if (days === 0) {
    return [];
  }
  return arrOfDays.map((_value, i) => {
    if (direction === 'before') {
      return moment(date)
        .subtract(days - i, 'day')
        .toDate();
    }
    return moment(date)
      .add(i + 1, 'day')
      .toDate();
  });
};

/**
 * Generates moment objects for whole week from a single date.
 *
 * Ex. if given monday, generates an array of m, t, w, t, f, s, s
 */
export const generateWeekdays = (date: Date) => {
  const day = moment(date).weekday() + 1;
  return [...generateDays(date, day - 1, 'before'), date, ...generateDays(date, 7 - day, 'after')];
};
