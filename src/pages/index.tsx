import * as React from 'react';
import Button from '@material-ui/core/Button';
import Layout from 'gatsby-theme-aoi/src/layout';
import AppLink from 'gatsby-theme-aoi/src/components/AppLink';
import { useAllVenues } from '../utils/graphql-hooks';

function IndexPage() {
  const allVenues = useAllVenues();
  return (
    <Layout>
      {allVenues.map(({ node }, index) => (
        <Button component={AppLink} key={index} to={`/${node.slug}`}>
          {node.name}
        </Button>
      ))}
    </Layout>
  );
}

export default IndexPage;
