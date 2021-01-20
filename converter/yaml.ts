import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'yaml';

const data = yaml.parse(fs.readFileSync(path.resolve(__dirname, '../dataset/frames/jclub.yaml'), 'utf8'));

const out = yaml.stringify(
  [...data].map(({ id, slug, name, short_name, category, hometown, area }) => ({
    id,
    slug,
    name,
    short_name,
    category,
    hometown,
    area,
  }))
);
fs.writeFileSync(path.resolve(__dirname, '../dataset/frames/jclub.yaml'), out);
