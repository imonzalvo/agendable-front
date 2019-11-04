import moment, { Moment } from 'moment';

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
    { date: start.toISOString(), time: start.format('h:mm A') },
    ...getPeriodTimeslots(newStart, duration, to),
  ];
};

export const getTimeslots = (
  availables: [
    {
      to: string;
      from: string;
    },
  ],
  dateSelected: string,
  duration: number,
): ({ date: string; time: string })[] => {
  const now = moment();
  const timeslots = availables.map(available => {
    const from = moment(`${dateSelected} ${available.from}`);
    const to = moment(`${dateSelected} ${available.to}`);
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
