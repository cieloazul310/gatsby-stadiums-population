import * as React from 'react';
import Layout from '../layout';
import StadiumsTable from '../components/StadiumsTable';

function IndexPage() {
  return (
    <Layout disablePaddingTop>
      <StadiumsTable />
    </Layout>
  );
}

export default IndexPage;
