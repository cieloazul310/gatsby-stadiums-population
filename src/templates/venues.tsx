import * as React from 'react';
import { graphql, navigate, PageProps } from 'gatsby';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Layout from '../layout';
import ImageContainer from '../components/ImageContainer';
import Images from '../components/Images';
import DrawerTable from '../components/DrawerTable';
import DrawerNavigation from '../components/DrawerNavigation';
import Attribution from '../components/Attribution';
import { AdInArticle, AdInFooter } from '../components/Ads';
import Basis from '../components/Basis';
import VenuesList from '../components/VenuesList';
import { useIsMobile } from '../utils/useIsMobile';
import { VenueQuery, SitePageContext } from '../../graphql-types';

function VenuesTemplate({ data, pageContext }: PageProps<VenueQuery, SitePageContext>) {
  const isMobile = useIsMobile();
  const { venues, allFile } = data;
  const images = allFile.nodes.filter((node) => node.childImageSharp);
  const category = venues?.clubs ? venues.clubs[0]?.category ?? 'J1' : 'J1';

  React.useEffect(() => {
    function keyPressEvent(event: KeyboardEvent) {
      const { key } = event;
      const { next, previous } = pageContext;
      if ((key === 'Right' || key === 'ArrowRight') && next) {
        navigate(`/${next.node?.slug}`);
      } else if ((key === 'Left' || key === 'ArrowLeft') && previous) {
        navigate(`/${previous.node?.slug}`);
      }
      //event.preventDefault();
    }
    if (window) window.addEventListener('keydown', keyPressEvent);
    return () => {
      window.removeEventListener('keydown', keyPressEvent);
    };
  }, [pageContext]);

  return (
    <Layout
      title={venues?.name ?? undefined}
      image={images[1].childImageSharp?.gatsbyImageData?.src}
      disablePaddingTop
      disableGutters
      drawerContents={
        <>
          <DrawerTable venues={venues} />
          <DrawerNavigation pageContext={pageContext} />
          <Divider />
          {!isMobile ? <VenuesList category={category} /> : null}
        </>
      }
    >
      <ImageContainer>
        <Images images={images} />
      </ImageContainer>
      <Basis>
        <Container maxWidth="sm">
          <Typography variant="h5" gutterBottom>
            {venues?.name}
          </Typography>
          <Typography>都道府県: {venues?.pref}</Typography>
          <Typography>クラブ: {venues?.clubs?.map((club) => club?.name).join(', ')}</Typography>
          <DrawerTable venues={venues} />
        </Container>
      </Basis>
      <Basis>
        <AdInArticle />
      </Basis>
      <>
        {isMobile ? (
          <Basis>
            <VenuesList category={category} />
          </Basis>
        ) : null}
      </>
      <Basis>
        <Container maxWidth="sm">
          <Attribution />
        </Container>
      </Basis>
      <Basis>
        <AdInFooter />
      </Basis>
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
      pref
      id
      slug
      type
    }
    allFile(filter: { relativeDirectory: { eq: $relativeDirectory }, ext: { eq: ".png" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
          original {
            src
          }
        }
      }
    }
  }
`;
