import * as React from 'react';
/*
const filterMatrix = [
  "0.3333 0.3333 0.3333 0 0",
  "0.3333 0.3333 0.3333 0 0",
  "0.3333 0.3333 0.3333 0 0",
  "0 0 0 1 0"
];
*/
const filterMatrix = ['0.3333 0.3333 0.3333 0 0', '0.3333 0.3333 0.3333 0 0', '0.3333 0.3333 0.3333 0 0', '0 0 0 1 0'];

interface Props {
  id: string;
}

const GrayScaleFilter: React.FunctionComponent<Props> = (props: Props) => (
  <filter id={props.id}>
    <feColorMatrix type="matrix" values={filterMatrix.join(' ')} />
  </filter>
);

export default GrayScaleFilter;
