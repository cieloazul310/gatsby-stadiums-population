import * as React from 'react';
import { scaleLinear, scaleSequential } from 'd3-scale';
import { interpolateSpectral } from 'd3-scale-chromatic';
import { Feature } from '@turf/helpers';
import { GeoProjection } from 'd3-geo';

interface MeshFeature extends Feature {
  properties: {
    val: number;
  };
}

interface Props {
  feature: MeshFeature;
  projection: GeoProjection;
}

const colorScale = scaleSequential(interpolateSpectral /*interpolateYlOrRd*/).domain([1000, 0]);
const sizeScale = scaleLinear()
  .domain([0, 1000])
  .range([2, 8]);

const MeshRect: React.FunctionComponent<Props> = (props: Props) => {
  const { feature, projection } = props;
  const { val } = feature.properties;
  const center = projection(feature.geometry.coordinates);
  const size = Math.abs((sizeScale(val) * projection.scale()) / 175216);

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
