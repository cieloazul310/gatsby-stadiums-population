export enum Directions {
  north,
  northeast,
  east,
  southeast,
  south,
  southwest,
  west,
  northwest
}

export const directions: Array<keyof typeof Directions> = [
  'north',
  'northeast',
  'east',
  'southeast',
  'south',
  'southwest',
  'west',
  'northwest'
];

export type DirectionProps = { [key in keyof typeof Directions]: number };

export function directionToKanji(direction: keyof typeof Directions): string {
  return direction === 'north'
    ? '北'
    : direction === 'northeast'
    ? '北東'
    : direction === 'east'
    ? '東'
    : direction === 'southeast'
    ? '南東'
    : direction === 'south'
    ? '南'
    : direction === 'southwest'
    ? '南西'
    : direction === 'west'
    ? '西'
    : direction === 'northwest'
    ? '北西'
    : '';
}
