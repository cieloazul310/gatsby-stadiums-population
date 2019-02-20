import * as React from 'react';
import { scaleLinear } from 'd3-scale';
import { arc as d3arc } from 'd3-shape';
import { colorScale } from './MeshFeature';
import { Directions, directions, Radiuses, radiuses, BufferProperties } from '../utils/types';

interface Props {
  item: Array<{ properties: BufferProperties }>;
}

const color = colorScale.copy();
const newDomain: [number, number] = [colorScale.domain()[0] * 8, 0];
color.domain(newDomain);
const opacity = scaleLinear()
  .domain([250, 0])
  .range([1, 0]);

const Pie: React.FC<Props> = ({ item }: Props) => {
  const size = 300;

  return (
    <svg viewBox={`0 0 ${size} ${size}`}>
      {item.map((d, i, arr) => (
        <g key={i} transform={`translate(${size / 2}, ${size / 2})`}>
          {directions.map(key => {
            const val = i === 0 ? d.properties[key] : d.properties[key] - arr[i - 1].properties[key];
            const density = calcDensity(val, d.properties.radius);
            const { startAngle, endAngle } = directionToAngle(Directions[key]);
            const arc = d3arc()({
              startAngle,
              endAngle,
              innerRadius: ((size - 8) * (i + 1)) / 10 + 2,
              outerRadius: ((size - 8) * (i + 2)) / 10,
              padAngle: 0.05
            });
            return (
              <g key={key}>
                <path key={key} d={arc || undefined} fill={color(density)} fillOpacity={opacity(density)} />
              </g>
            );
          })}
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
