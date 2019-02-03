import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import { Feature, Polygon } from '@turf/helpers';
import { arc as d3arc, pie as d3pie, arc } from 'd3-shape';
import { scaleSequential } from 'd3-scale';
import { interpolateYlOrRd } from 'd3-scale-chromatic';

const styles = (themes: Theme) => ({
  root: {}
});

interface BufferPropertis {
  name: string;
  radius: number;
  population: number;
  north: number;
  east: number;
  south: number;
  west: number;
  northeast: number;
  southeast: number;
  southwest: number;
  northwest: number;
}

type Buffer = Feature<Polygon, BufferPropertis>;

interface Props extends WithStyles<typeof styles> {
  width?: number;
  height?: number;
  buffers: Buffer[];
}

const color = scaleSequential(interpolateYlOrRd).domain([10000, 100000]);

const BufferArcs: React.FunctionComponent<Props> = (props: Props) => {
  const { classes, buffers } = props;
  console.log(buffers);
  const data = buffers.map(feature =>
    feature.properties
      ? {
          radius: feature.properties.radius,
          population: feature.properties.population,
          directions: createDirection(feature)
        }
      : {}
  );
  const arcs = d3arc()
    .outerRadius(200)
    .innerRadius(100);

  return (
    <svg className={classes.root} width={400} height={400}>
      <g transform={`translate(${200}, ${200})`}>
        {Object.values(data[3].directions).map((datum, index) => (
          <g key={index}>
            <path d={arcs(datum) || undefined} fill={color(datum.val)} />
            <text x={arcs.centroid(datum)[0]} y={arcs.centroid(datum)[1]} textAnchor="middle">
              {datum.val}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
};

export default withStyles(styles)(BufferArcs);

// utils

function createDirection(feature: Feature<Polygon, BufferPropertis>) {
  if (!feature.properties) return null;
  const { north, northeast, east, southeast, south, southwest, west, northwest } = feature.properties;
  const direction = { north, northeast, east, southeast, south, southwest, west, northwest };
  for (let key in direction) {
    const val = direction[key];
    direction[key] = { ...directionToAngle(key), val, dir: key };
  }
  return direction;
}

function directionToAngle(key: string) {
  const directions = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest'];
  const angle = (Math.PI * 2) / directions.length;
  return {
    startAngle: directions.indexOf(key) * angle - angle / 2,
    endAngle: directions.indexOf(key) * angle + angle / 2
  };
}
