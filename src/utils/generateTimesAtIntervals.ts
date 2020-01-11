export default function generateTimesAtIntervals(intervalDuration: number = 5) {
  const DAY_HOURS = 24;
  const MINUTES_IN_HOUR = 60;
  return Array.from(
    {
      length: (DAY_HOURS * MINUTES_IN_HOUR) / intervalDuration,
    },
    (_, i) => {
      let h = Math.floor((i * intervalDuration) / MINUTES_IN_HOUR);
      let m: string | number = i * intervalDuration - h * MINUTES_IN_HOUR;
      //pad zero to minute
      if (m < 10) {
        m = '0' + m;
      }
      return h + ':' + m;
    },
  );
}
