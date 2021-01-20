/* eslint @typescript-eslint/no-var-requires: off */
/* eslint @typescript-eslint/no-unsafe-assignment: off */
/* eslint @typescript-eslint/no-unsafe-call: off */
/* eslint @typescript-eslint/no-unsafe-member-access: off */

import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'yaml';
import bbox from '@turf/bbox';
import { format as d3Format } from 'd3-format';
import { scaleSequential } from 'd3-scale';
import { interpolateSpectral } from 'd3-scale-chromatic';
import { CanvasMap, scaleToZoom, zoomToScale } from '@cieloazul310/canvasmap';
import { calcPopulation } from '@cieloazul310/population-calculator';
import { Venue } from './helpers';

export async function draw(data: Venue, outDir: string) {
  const population = await calcPopulation(data.coordinates, [1, 3, 5, 10], 'mesh250', {
    hard: true,
    baseUrl: '/Users/cieloazul310/Documents/github/binarytiles/docs/tile/population_250m/{z}/{x}/{y}.mvt',
  });

  const vals = population
    .map(({ feature, points }) => {
      const val = points.reduce((accum, curr) => accum + curr.properties.val, 0);
      console.log(`${feature.properties.radius}: ${val}`);
      return [feature.properties.radius, val];
    })
    .reduce((accum, curr) => ({ ...accum, [`val_${curr[0]}`]: curr[1] }), {});
  fs.writeFileSync(
    path.resolve(outDir, 'index.yaml'),
    yaml.stringify({
      ...data,
      population: vals,
    })
  );
  const largest = population[population.length - 1];

  const width = 1600;
  const height = 1600;
  const map = new CanvasMap(width, height, largest.feature, { title: data.name });
  await map.renderBasemap('vector', { backgroundFeature: largest.feature });
  map.addAttribution('地域メッシュ統計');

  const context = map.getContext();
  const projection = map.getProjection();
  const geoPath = map.getPath().pointRadius(pointRadius(projection.scale(), 'mesh250'));
  const fontSize = map.getMapFontSize();

  population.forEach(({ feature, points }) => {
    context.beginPath();
    geoPath(feature);
    context.strokeStyle = '#c77';
    context.lineWidth = 2;
    context.globalCompositeOperation = 'multiply';
    context.stroke();
    context.globalCompositeOperation = 'source-over';

    if (feature.properties?.radius) {
      const [minX, minY] = bbox(feature);
      const pos = projection([minX, minY]) ?? [0, 0];
      const size = fontSize.attribution;

      context.font = `${size}px sans-serif`;
      context.textAlign = 'right';
      context.textBaseline = 'bottom';
      context.fillStyle = '#c44';
      context.fillText(`${feature.properties.radius}km圏`, width - 6, pos[1] - 2);

      const val = points.reduce((accum, curr) => accum + curr.properties.val, 0);
      context.font = `bold ${size}px sans-serif`;
      context.textAlign = 'right';
      context.textBaseline = 'top';
      context.fillStyle = '#c44';
      context.fillText(`${d3Format(',')(val)}`, width - 6, pos[1]);
    }
  });

  const center = projection(data.coordinates as [number, number]);
  if (center) {
    context.beginPath();
    context.arc(center[0], center[1], 8, 0, Math.PI * 2);
    context.fillStyle = '#c44';
    context.fill();

    context.beginPath();
    context.arc(center[0], center[1], 4, 0, Math.PI * 2);
    context.fillStyle = '#fff';
    context.fill();
  }

  map.exportPng(path.resolve(outDir, './population_0.png'));

  largest.points.forEach((point) => {
    context.beginPath();
    geoPath(point);
    context.fillStyle = color(point.properties?.val ?? 0);
    context.globalCompositeOperation = 'multiply';
    context.fill();
    context.globalCompositeOperation = 'source-over';
  });

  [50, ...Array.from({ length: 8 }, (_, i) => 100 * (i + 1))].forEach((val, i, arr) => {
    context.beginPath();
    const size = fontSize.attribution * 1.5;
    const r = size / 2;
    const x = 3 * r;
    const y = height - 3 * r - (size + 4) * i;
    context.arc(x, y, r, 0, Math.PI * 2);
    context.fillStyle = color(val);
    context.globalCompositeOperation = 'multiply';
    context.fill();
    context.globalCompositeOperation = 'source-over';

    context.font = `${fontSize.attribution}px sans-serif`;
    context.textAlign = 'right';
    context.textBaseline = 'middle';
    context.fillStyle = '#333';
    const textSize = context.measureText('1000');

    context.fillText(i === arr.length - 1 ? `>${val}` : val.toString(), x + r + textSize.width + 10, y + 2);
  });

  map.exportPng(path.resolve(outDir, './population_1.png'));
}

export function color(val: number) {
  return (val > 100
    ? scaleSequential(interpolateSpectral).domain([800, 100])
    : scaleSequential(['#fff', interpolateSpectral(1)]).domain([0, 100]))(val);
}

export function pointRadius(scale: number, mode: 'mesh250' | 'mesh500'): number {
  const zoom = scaleToZoom(scale);
  const defaultSize = 4.5;
  const threshold = mode === 'mesh250' ? [12, 13] : [11, 12];
  return zoom > threshold[1]
    ? Math.min(defaultSize * (scale / zoomToScale(threshold[1])), 12)
    : zoom < threshold[0]
    ? Math.max(defaultSize * (scale / zoomToScale(threshold[0])), 2)
    : defaultSize;
}
