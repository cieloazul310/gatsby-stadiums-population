import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

function VenuesContainer({ children }: Props) {
  return <div>{children}</div>;
}

export default VenuesContainer;
