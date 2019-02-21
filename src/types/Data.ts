import { Topology } from 'topojson-specification';
import { Summary } from './Summary';
import { BuffersObject } from './Buffer';
import { MeshObject } from './Mesh';

interface Fields {
  slug: string;
}

export interface Data extends Fields {
  summary: Summary;
  topojson: Topology<{
    buffers: BuffersObject;
    points: MeshObject;
  }>;
}

export interface Edge {
  node: {
    fields: Fields;
    summary: Summary;
  };
}
