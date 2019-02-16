import { navigate } from 'gatsby';
import { Feature, Polygon } from '@turf/helpers';
import { LocationProps } from '@reach/router';

export const initialAppState: AppState = {
  tableState: {
    ascSort: false,
    sortKey: 3,
    filterRule: []
  },
  mapState: {
    popVisibility: true,
    bufferVisibility: true,
    zoomLevel: 3,
    terrain: false
  }
};

// gatsby navigate with strict type checking
export const navigateWithState = (to: string, state: AppState) => {
  navigate(to, { state });
};

export interface TableState {
  readonly ascSort: boolean;
  readonly sortKey: number;
  readonly filterRule: string[];
}

export interface MapState {
  readonly popVisibility: boolean;
  readonly bufferVisibility: boolean;
  readonly zoomLevel: number;
  readonly terrain?: boolean;
}

export interface AppState {
  tableState: TableState;
  mapState: MapState;
}

export interface LocationWithState extends LocationProps {
  state: AppState | null;
}

export interface Summary extends RadiusProps {
  name: string;
  club: string[];
  category: string[];
  shortname: string[];
  slug: string;
}

export interface VenueEdge {
  node: {
    summary: Summary;
  };
}

export interface BufferProperties extends DirectionProps {
  name: string;
  radius: number;
  population: number;
}

export type Buffer = Feature<Polygon, BufferProperties>;

export interface MeshProperties {
  id: number;
  val: number;
}

export enum Radiuses {
  radius1000 = 1000,
  radius3000 = 3000,
  radius5000 = 5000,
  radius10000 = 10000
}

export const radiuses: Radiuses[] = [Radiuses.radius1000, Radiuses.radius3000, Radiuses.radius5000, Radiuses.radius10000];

export const radiusKeys: Array<keyof typeof Radiuses> = ['radius1000', 'radius3000', 'radius5000', 'radius10000'];

export type RadiusProps = { [key in keyof typeof Radiuses]: number };

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
