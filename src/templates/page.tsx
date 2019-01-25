import * as React from 'react';
import { graphql } from 'gatsby';
import * as topojson from 'topojson-client';

/*
import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: {
          name: string;
          url: string;
        };
      };
    };
  };
}

const PageTemplate: React.SFC<PageTemplateProps> = props => {
  console.log(props);
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>{'aaa'}</h1>
          <div>{'bbb'}</div>
        </Container>
      </Page>
    </IndexLayout>
  );
};
*/
const PageTemplate: React.SFC = ({ data }) => {
  console.log(topojson.feature(data.topojsonJson, data.topojsonJson.objects.radius5000));
  return <div>aaa</div>;
};

export default PageTemplate;

export const query = graphql`
  query($slug: String!) {
    topojsonJson(fields: { slug: { eq: $slug } }) {
      type
      objects {
        radius5000 {
          type
          geometries {
            type
            properties {
              id
              val
            }
            arcs
            coordinates
          }
        }
      }
      arcs
      transform {
        scale
        translate
      }
    }
  }
`;

/*
export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
  }
`;
*/
/*
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      frontmatter {
        title
      }
    }
*/
