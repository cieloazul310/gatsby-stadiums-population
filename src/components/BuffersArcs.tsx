import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { arc as d3arc } from 'd3-shape';
import { scaleSequential } from 'd3-scale';
import { interpolateSpectral } from 'd3-scale-chromatic';

import { Buffer } from '../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontFamily: theme.typography.fontFamily,
      margin: 'auto',
      display: 'block'
    },
    arc: {
      strokeWidth: 0,
      '&:hover': {
        strokeWidth: 3
      }
    }
  })
);

interface Props {
  width: number;
  buffers: Buffer[];
}

const color = scaleSequential(interpolateSpectral).domain([10000, 0]);

function BufferArcs({ buffers, width }: Props) {
  const classes = useStyles({});
  const size = Math.min(width, 320);
  const dirs = buffersToDirection(buffers);

  return (
    <svg className={classes.root} width={size} height={size}>
      <g transform={`translate(${size / 2}, ${size / 2})`}>
        {dirs.map((dir, index) => (
          <g key={index}>
            {dir.items.map((item, i) => {
              const arc = d3arc()
                .outerRadius(((size - 48) * (i + 2)) / 10)
                .innerRadius(((size - 48) * (i + 1)) / 10 + 4)
                .padAngle(0.02);
              return (
                <g key={i}>
                  <path
                    className={classes.arc}
                    d={arc(item)}
                    fill={color(calcDensity(item.val, item.from, item.to))}
                    fillOpacity={item.val ? 0.8 : 0.1}
                    stroke={color(calcDensity(item.val, item.from, item.to))}
                  />
                </g>
              );
            })}
          </g>
        ))}
      </g>
      <g>
        <text x={size / 2} dy="1.2em" textAnchor="middle">
          北
        </text>
        <text x={size / 2} y={size} dy="-.2em" textAnchor="middle">
          南
        </text>
        <text y={size / 2} dy=".5em" textAnchor="start">
          西
        </text>
        <text x={size} y={size / 2} dy=".5em" textAnchor="end">
          東
        </text>
      </g>
    </svg>
  );
}

export default BufferArcs;

// utils

function buffersToDirection(buffers: Buffer[]) {
  const directions = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest'];
  const dirObjs = directions.map(str => ({
    direction: str,
    items: buffers.map((feature, index, arr) => ({
      ...directionToAngle(str),
      from: index > 0 ? arr[index - 1].properties.radius : 0,
      to: feature.properties.radius,
      val: index > 0 ? feature.properties[str] - arr[index - 1].properties[str] : feature.properties[str]
    }))
  }));
  return dirObjs;
}

function directionToAngle(key: string) {
  const directions = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest'];
  const angle = (Math.PI * 2) / directions.length;
  return {
    startAngle: directions.indexOf(key) * angle - angle / 2,
    endAngle: directions.indexOf(key) * angle + angle / 2
  };
}

function calcDensity(val: number, from: number, to: number) {
  return from === 0
    ? (val * 8) / (Math.pow(to / 1000, 2) * Math.PI)
    : (val * 8) / (Math.pow(to / 1000, 2) * Math.PI - Math.pow(from / 1000, 2) * Math.PI);
}
