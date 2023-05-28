import moment, { Moment } from 'moment-timezone';
import { flatten } from 'lodash';

const TIME_SLOT = 15;

const getPeriodTimeslots = (
  start: Moment,
  duration: number,
  to: Moment,
  scheduleSeparation: number,
): { date: string; time: string }[] => {
  if (to.isBefore(moment(start).add(duration, 'm'))) {
    return [];
  }
  const newStart = moment(start);
  newStart.add(scheduleSeparation, 'm');
  return [
    { date: start.format(), time: start.format('HH:mm') },
    ...getPeriodTimeslots(newStart, duration, to, scheduleSeparation),
  ];
};

export const getTimeslots = (
  availables: { from: string; to: string }[],
  dateSelected: string,
  duration: number,
  scheduleSeparation: number,
): { date: string; time: string }[] => {
  const now = moment();
  const timeslots = availables.map(available => {
    // H:mm to HH:mm
    const HHFrom = available.from.length === 5 ? available.from : `0${available.from}`;
    const HHTo = available.to.length === 5 ? available.to : `0${available.to}`;

    const from = moment(`${dateSelected} ${HHFrom}`);
    //TODO: Should we use local??
    // .utc(`${dateSelected} ${HHFrom}`);
    // .local();
    const to = moment(`${dateSelected} ${HHTo}`);
    //TODO: Should we use local??
    // .utc(`${dateSelected} ${HHTo}`);
    // .local();

    // Check si el turno disponible sea despues que la hora en que quiera reservar.
    // Check si la reserva del servicio entra en el timeslot.
    if (to.isAfter(now) && to.isSameOrAfter(moment(now).add(duration, 'm'))) {
      return getPeriodTimeslots(from, duration, to, scheduleSeparation);
    }
    return [];
  });
  // Timeslots: [[], [], []];
  return flatten(timeslots);
};
