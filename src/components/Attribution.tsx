import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';

interface Query {
  site: {
    siteMetadata: {
      title: string;
      siteUrl: string;
      description: string;
      author: {
        name: string;
        url: string;
        siteName: string;
        twitter: string;
        github: string;
      };
    };
  };
}

const Attribution: React.FunctionComponent<{}> = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            author {
              name
              url
              siteName
              twitter
              github
            }
          }
        }
      }
    `}
    render={(data: Query) => (
      <section>
        <Typography variant="h5">{data.site.siteMetadata.title}</Typography>
        <Typography variant="body1">{data.site.siteMetadata.description}</Typography>
        <ul>
          <Typography component="li" variant="body1">
            {`Twitter: `}
            <a href={`https://twitter.com/${data.site.siteMetadata.author.twitter}`} target="_blank" rel="noopener noreferrer">{`@${
              data.site.siteMetadata.author.twitter
            }`}</a>
          </Typography>
          <Typography component="li" variant="body1">
            {`制作: ${data.site.siteMetadata.author.siteName} `}
            <a href={data.site.siteMetadata.author.url} target="_blank" rel="noopener noreferrer">
              {data.site.siteMetadata.author.url}
            </a>
          </Typography>
        </ul>
      </section>
    )}
  />
);

export default Attribution;
