import { GeometryObject } from 'topojson-specification';
import { Radiuses } from './Radiuses';
import { BufferProps } from './Buffer';

export enum Directions {
  north,
  northeast,
  east,
  southeast,
  south,
  southwest,
  west,
  northwest,
}

export const directions: Array<keyof typeof Directions> = [
  'north',
  'northeast',
  'east',
  'southeast',
  'south',
  'southwest',
  'west',
  'northwest',
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

export type DirectionObj = {
  [key in keyof typeof Directions]: Array<{
    radius: keyof typeof Radiuses;
    population: number;
    diff: number;
  }>;
};

export function getItemsDiff(items: GeometryObject<BufferProps>[]): DirectionObj {
  const obj: any = {};
  directions.forEach((direction) => {
    obj[direction] = items.map((item, index, arr) => ({
      radius: item.properties.radius,
      population: item.properties[direction],
      diff: index === 0 ? item.properties[direction] : item.properties[direction] - arr[index - 1].properties[direction],
    }));
  });
  return obj;
}
