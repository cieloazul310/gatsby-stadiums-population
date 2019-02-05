import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import { arc as d3arc } from 'd3-shape';
import { scaleSequential } from 'd3-scale';
import { interpolateSpectral } from 'd3-scale-chromatic';

import { Buffer } from '../utils/types';

const styles = (themes: Theme): StyleRules => ({
  root: {}
});

interface Props extends WithStyles<typeof styles> {
  width: number;
  buffers: Buffer[];
}

const color = scaleSequential(interpolateSpectral).domain([10000, 0]);

const BufferArcs: React.FunctionComponent<Props> = (props: Props) => {
  const { classes, buffers, width } = props;
  const size = Math.min(width, 600);
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
                  <path d={arc(item)} fill={color(calcDensity(item.val, item.from, item.to))} fillOpacity={item.val ? 1 : 0.1} />
                </g>
              );
            })}
          </g>
        ))}
      </g>
      <g>
        <text x={size / 2} dy="1em" textAnchor="middle">
          北
        </text>
        <text x={size / 2} y={size} textAnchor="middle">
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
};

export default withStyles(styles)(BufferArcs);

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
