import * as React from 'react';
import { Helmet } from 'react-helmet';
import { AutoSizer } from 'react-virtualized';
import RCTable from '../components/RCTable';
import Attribution from '../components/Attribution';
import withRoot from '../utils/withRoot';

const Page = () => (
  <div style={{ maxWidth: 1000, margin: 'auto' }}>
    <Helmet>
      <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui" />
    </Helmet>
    <div style={{ height: 'calc(100vh)' }}>
      <AutoSizer>{({ width, height }) => <RCTable width={width} height={height} />}</AutoSizer>
    </div>
    <Attribution />
  </div>
);

export default withRoot(Page);
