import seedrandom from 'seedrandom';

/**
 * Returns a random pastel color from any string in hsl format
 */
export default function getColor(seed: string) {
  const rng = seedrandom(seed);
  return 'hsl(' + 360 * rng() + ',' + (25 + 70 * rng()) + '%,' + (75 + 10 * rng()) + '%)';
}
