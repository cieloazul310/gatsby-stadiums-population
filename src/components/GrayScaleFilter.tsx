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

function GrayScaleFilter(props: Props) {
  return (
    <filter id={props.id}>
      <feColorMatrix type="matrix" values={filterMatrix.join(' ')} />
    </filter>
  );
}

export default GrayScaleFilter;
