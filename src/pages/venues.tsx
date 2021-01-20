import * as React from 'react';
import Layout from 'gatsby-theme-aoi/src/layout';

function Stadiums() {
  return (
    <Layout>
      <p>Stadiums</p>
    </Layout>
  );
}

export default Stadiums;
/*
export const query = graphql`
  {
    allVenuesJson {
      edges {
        node {
          fields {
            slug
          }
          summary {
            name
            club
            category
            shortname
            slug
            radius1000
            radius3000
            radius5000
            radius10000
          }
        }
      }
    }
  }
`;
*/
