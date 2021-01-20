import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

function MapContainer({ children }: Props) {
  return <div>{children}</div>;
}

export default MapContainer;
