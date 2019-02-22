import * as React from 'react';
import { color } from 'd3-color';
import { scalePow, scaleSequential } from 'd3-scale';
import { interpolateSpectral } from 'd3-scale-chromatic';
import { GeoProjection } from 'd3-geo';
import { Mesh } from '../types';

interface Props {
  feature: Mesh;
  projection: GeoProjection;
}

export const colorScale = scaleSequential(interpolateSpectral).domain([1250, 0]);

export const sizeScale = scalePow()
  .domain([0, 1000])
  .range([0, 8])
  .exponent(0.5);

const MeshRect: React.FunctionComponent<Props> = (props: Props) => {
  const { feature, projection } = props;
  const { val } = feature.properties;
  const center = projection(feature.geometry.coordinates) || [0, 0];
  const size = Math.abs(sizeScale(val) * Math.min(Math.max(1, projection.scale() / 125000), 2.5));

  return (
    <rect
      fill={color(colorScale(val)).hex()}
      fillOpacity={0.6}
      x={(center[0] - size / 2).toFixed(2)}
      y={(center[1] - size / 2).toFixed(2)}
      width={size.toFixed(2)}
      height={size.toFixed(2)}
    />
  );
};

export default MeshRect;
