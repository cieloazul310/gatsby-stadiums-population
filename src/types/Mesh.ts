import { GeometryCollection } from 'topojson-specification';
import { Feature, GeometryObject } from 'geojson';

export interface MeshProps {
  id: string;
  val: number;
}
export type MeshObject = GeometryCollection<MeshProps>;
export type Mesh = Feature<GeometryObject, MeshProps>;
