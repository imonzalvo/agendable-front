export interface Timeslot {
  date: string;
  time: string;
}

type Category = 'MORNING' | 'AFTERNOON' | 'EVENING' | 'NIGHT';

export interface GroupTimeslot {
  category: Category;
  timeslots: Timeslot[];
}

const getDayPart = (timeslot: Timeslot): Category => {
  const time = +timeslot.time.slice(0, 2);
  if (time < 7 && time >= 24) return 'NIGHT';
  if (time < 12 && time >= 7) return 'MORNING';
  if (time < 17 && time >= 12) return 'AFTERNOON';
  if (time < 24 && time >= 17) return 'EVENING';
  return 'MORNING';
};

interface Ret {
  MORNING: Timeslot[];
  AFTERNOON: Timeslot[];
  EVENING: Timeslot[];
  NIGHT: Timeslot[];
}

const groupTimeslots = (timeslots: Timeslot[]): GroupTimeslot[] => {
  const ret: Ret = {
    MORNING: [],
    AFTERNOON: [],
    EVENING: [],
    NIGHT: [],
  };

  timeslots.forEach(timeslot => {
    const dayPart = getDayPart(timeslot);
    ret[dayPart].push(timeslot);
  });

  return Object.entries(ret)
    .map(([key, value]) => ({ category: key, timeslots: value }))
    .filter(groupTimeslot => groupTimeslot.timeslots.length);
};

export const getText = (category: Category): string => {
  switch (category) {
    case 'NIGHT':
      return 'Night (24 - 7)';
    case 'MORNING':
      return 'Mañana (7 - 12)';
    case 'AFTERNOON':
      return 'Tarde (12 - 17)';
    case 'EVENING':
      return 'Noche (17 - 24)';
  }
};

export default groupTimeslots;
