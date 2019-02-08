import * as React from 'react';
import { scaleLinear, scalePow, scaleSequential } from 'd3-scale';
import { interpolateSpectral } from 'd3-scale-chromatic';
import { Feature, Point } from '@turf/helpers';
import { GeoProjection } from 'd3-geo';

import { MeshProperties } from '../utils/types';

interface Props {
  feature: Feature<Point, MeshProperties>;
  projection: GeoProjection;
}

export const colorScale = scaleSequential(interpolateSpectral).domain([1000, 0]);

export const sizeScale = scalePow()
  .domain([0, 1000])
  .range([0, 8])
  .exponent(0.5);

const MeshRect: React.FunctionComponent<Props> = (props: Props) => {
  const { feature, projection } = props;
  const { val } = feature.properties;
  const center = projection(feature.geometry.coordinates);
  const size = Math.abs(sizeScale(val) * Math.min(Math.max(1, projection.scale() / 125000), 2.5));

  return (
    <rect
      fill={colorScale(val)}
      fillOpacity={0.6}
      x={center[0] - size / 2}
      y={center[1] - size / 2}
      width={size}
      height={size}
      style={{ mixBlendMode: 'multiply' }}
    />
  );
};

export default MeshRect;
