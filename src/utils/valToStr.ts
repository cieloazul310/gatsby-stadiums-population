import { format as d3Format } from 'd3-format';

export function valToStr(val: number | undefined | null) {
  if (val === null || val === undefined) return '';
  const format = d3Format(',');
  return format(val);
}
