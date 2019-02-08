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
    zoomLevel: 3
  }
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
}

export interface AppState {
  tableState: TableState;
  mapState: MapState;
}

export interface LocationWithState extends LocationProps {
  state: AppState | null;
}

export interface Summary {
  name: string;
  club: string[];
  category: string[];
  shortname: string[];
  slug: string;
  radius1000: number;
  radius3000: number;
  radius5000: number;
  radius10000: number;
}

export interface VenueEdge {
  node: {
    summary: Summary;
  };
}

export interface BufferPropertis extends EighthDirections {
  name: string;
  radius: number;
  population: number;
}

export type Buffer = Feature<Polygon, BufferPropertis>;

export interface MeshProperties {
  id: number;
  val: number;
}

export interface ForthDirections {
  north: number;
  east: number;
  south: number;
  west: number;
}

export interface EighthDirections extends ForthDirections {
  northeast: number;
  southeast: number;
  southwest: number;
  northwest: number;
}
