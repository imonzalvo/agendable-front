import moment, { Moment } from 'moment-timezone';

const TIME_SLOT = 15;

const getPeriodTimeslots = (
  start: Moment,
  duration: number,
  to: Moment,
): ({ date: string; time: string })[] => {
  if (to.isBefore(moment(start).add(duration, 'm'))) {
    return [];
  }
  const newStart = moment(start);
  newStart.add(TIME_SLOT, 'm');
  return [
    { date: start.format(), time: start.format('h:mm A') },
    ...getPeriodTimeslots(newStart, duration, to),
  ];
};

export const getTimeslots = (
  availables: { from: string; to: string }[],
  dateSelected: string,
  duration: number,
): ({ date: string; time: string })[] => {
  const now = moment();
  const timeslots = availables.map(available => {
    const from = moment.utc(`${dateSelected} ${available.from}`).local();
    const to = moment.utc(`${dateSelected} ${available.to}`).local();
    // Check si el turno disponible sea despues que la hora en que quiera reservar.
    // Check si la reserva del servicio entra en el timeslot.
    if (to.isAfter(now) && to.isSameOrAfter(moment(now).add(duration, 'm'))) {
      return getPeriodTimeslots(from, duration, to);
    }
    return [];
  });
  // Timeslots: [[], [], []];
  return timeslots.flat();
};