export enum Radiuses {
  radius1000 = 1000,
  radius3000 = 3000,
  radius5000 = 5000,
  radius10000 = 10000,
}

export const radiuses: Radiuses[] = [Radiuses.radius1000, Radiuses.radius3000, Radiuses.radius5000, Radiuses.radius10000];

export const radiusKeys: Array<keyof typeof Radiuses> = ['radius1000', 'radius3000', 'radius5000', 'radius10000'];

export type RadiusProps = { [key in keyof typeof Radiuses]: number };

type RadiusLabels = { [key in keyof typeof Radiuses]: string };

export const radiusLabels: RadiusLabels = {
  radius1000: '1km',
  radius3000: '3km',
  radius5000: '5km',
  radius10000: '10km',
};
