/* eslint @typescript-eslint/no-var-requires: off */
/* eslint @typescript-eslint/no-unsafe-assignment: off */
/* eslint @typescript-eslint/no-unsafe-call: off */
/* eslint @typescript-eslint/no-unsafe-member-access: off */

import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'yaml';
import { venue, Venue } from './helpers';
import { draw } from './draw';

const stadiums = yaml.parse(fs.readFileSync(path.resolve(__dirname, '../dataset/frames/stadiums.yaml'), 'utf8'));

(async () => {
  for await (const datum of stadiums) {
    console.log(datum.slug);
    const outDir = path.resolve(__dirname, '../dataset/yaml/stadiums', datum.slug);
    const item = yaml.parse(fs.readFileSync(path.resolve(outDir, 'index.yaml'), 'utf8'));

    const newer = {
      ...datum,
      population: item.population,
    };
    fs.writeFileSync(path.resolve(outDir, 'index.yaml'), yaml.stringify(newer));
  }
})();

/*
(async () => {
  for await (const datum of stadiums) {
    console.log(datum.slug);
    await Convert(venue(datum));
  }
})();

function Convert(datum: Venue): Promise<void> {
  const outDir = path.resolve(__dirname, '../dataset/yaml/stadiums', datum.slug);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
  return draw(datum, outDir);
}
*/
