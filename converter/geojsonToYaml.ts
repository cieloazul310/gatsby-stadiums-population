/* eslint @typescript-eslint/no-var-requires: off */
/* eslint @typescript-eslint/no-unsafe-assignment: off */
/* eslint @typescript-eslint/no-unsafe-call: off */
/* eslint @typescript-eslint/no-unsafe-member-access: off */
/* eslint @typescript-eslint/no-explicit-any: off */

const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

const arenas = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../raw/arenas.geojson'), 'utf8'));

const data = arenas.features.map(({ properties, geometry }: any) => {
  const { slug, name, shortname } = properties;
  const { coordinates } = geometry;
  const clubs = shortname.split(',');
  return {
    id: slug,
    type: 'arenas',
    slug,
    name,
    coordinates: coordinates.map((d: number) => Math.round(d * 1000000) / 1000000),
    clubs,
  };
});

fs.writeFileSync(
  path.resolve(__dirname, '../dataset/frames/arenas.yaml'),
  yaml.stringify([...data].sort((a, b) => b.coordinates[0] - a.coordinates[0]))
);
