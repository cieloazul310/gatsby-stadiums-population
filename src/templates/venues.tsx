import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Container from '@material-ui/core/Container';
import Layout from '../layout';
import ImageContainer from '../components/ImageContainer';
import Images from '../components/Images';
import DrawerTable from '../components/DrawerTable';
import DrawerNavigation from '../components/DrawerNavigation';
import Attribution from '../components/Attribution';
import { DataAttribution } from '../components/MapAttribution';
import { VenueQuery, SitePageContext } from '../../graphql-types';

function VenuesTemplate({ data, pageContext }: PageProps<VenueQuery, SitePageContext>) {
  console.log(data, pageContext);
  const images = data.allFile.nodes.filter((node) => node.childImageSharp);
  return (
    <Layout
      title={data.venues?.name ?? undefined}
      image={images[1].childImageSharp?.fluid?.src}
      disablePaddingTop
      disableGutters
      drawerContents={
        <>
          <DrawerTable venues={data.venues} />
          <DrawerNavigation pageContext={pageContext} />
        </>
      }
    >
      <ImageContainer>
        <Images images={images} />
      </ImageContainer>
      <Container maxWidth="md">
        <Attribution />
        <DataAttribution />
      </Container>
    </Layout>
  );
}
export default VenuesTemplate;

export const query = graphql`
  query Venue($slug: String, $relativeDirectory: String) {
    venues(slug: { eq: $slug }) {
      name
      population {
        val_1
        val_3
        val_5
        val_10
      }
      clubs {
        area
        category
        hometown
        id
        name
        short_name
        slug
      }
      coordinates
      id
      slug
      type
    }
    allFile(filter: { relativeDirectory: { eq: $relativeDirectory }, ext: { eq: ".png" } }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
