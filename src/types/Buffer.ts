import { GeometryCollection } from 'topojson-specification';
import { Feature, GeometryObject } from 'geojson';
import { Radiuses } from './Radiuses';
import { DirectionProps } from './Directions';
import { Summary } from './Summary';

export interface BufferProps extends Summary, DirectionProps {
  radius: Radiuses.radius1000 | Radiuses.radius3000 | Radiuses.radius5000 | Radiuses.radius10000;
}
export type BuffersObject = GeometryCollection<BufferProps>;
export type Buffer = Feature<GeometryObject, BufferProps>;
