import * as React from 'react';
import Helmet from 'react-helmet';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { StaticQuery, graphql } from 'gatsby';

interface Props {
  children: React.ReactNode;
  className?: string;
}

type StaticQueryProps = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
};

const Layout: React.FunctionComponent<Props> = ({ children, className }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <div className={className}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: 'gatsbyjs, gatsby, javascript, sample, something' }
          ]}
        />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">{data.site.siteMetadata.title}</Typography>
          </Toolbar>
        </AppBar>
        {children}
      </div>
    )}
  />
);

export default Layout;
