import { Feature, Polygon } from '@turf/helpers';

export interface Summary {
  name: string;
  club: string;
  category: string;
  shortname: string;
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
