import * as React from 'react';
//import { scaleSequential } from 'd3-scale';
//import { interpolateSpectral } from 'd3-scale-chromatic';
import { arc as d3arc } from 'd3-shape';
import { colorScale } from './MeshFeature';
import { Directions, directions, Radiuses, radiuses, radiusKeys, BufferProperties } from '../utils/types';

interface Props {
  width: number;
  item: Array<{ properties: BufferProperties }>;
}

//const color = scaleSequential(interpolateSpectral).domain([10000, 0]);
const color = colorScale.copy();
color.domain(colorScale.domain().map(d => d * 8));

const Pie: React.FC<Props> = ({ width, item }: Props) => {
  const size = width || 10;

  return (
    <svg width={size} height={size}>
      {item.map((d, i) => (
        <g key={i} transform={`translate(${size / 2}, ${size / 2})`}>
          {directions.map(key => (
            <path
              key={key}
              d={
                d3arc()({
                  ...directionToAngle(Directions[key]),
                  outerRadius: ((size - 8) * (i + 2)) / 10,
                  innerRadius: ((size - 8) * (i + 1)) / 10 + 2,
                  padAngle: 0.02
                }) || undefined
              }
              fill={color(calcDensity(d.properties[key], d.properties.radius))}
            />
          ))}
        </g>
      ))}
    </svg>
  );
};

export default Pie;

// utils
function directionToAngle(direction: Directions) {
  const angle = (Math.PI * 2) / (Object.keys(Directions).length / 2);
  return {
    startAngle: direction * angle - angle / 2,
    endAngle: direction * angle + angle / 2
  };
}

function calcDensity(val: number, radius: Radiuses) {
  const index = radiuses.indexOf(radius);
  return index === 0
    ? (val * 8) / (Math.pow(radiuses[index] / 1000, 2) * Math.PI)
    : (val * 8) / (Math.pow(radiuses[index] / 1000, 2) * Math.PI - Math.pow(radiuses[index - 1] / 1000, 2) * Math.PI);
}
