import * as React from 'react';
import Helmet from 'react-helmet';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { StaticQuery, graphql } from 'gatsby';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {}
  });

interface Props extends WithStyles<typeof styles> {
  children: React.ReactNode;
}

type StaticQueryProps = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
};

const Layout: React.FunctionComponent<Props> = (props: Props) => (
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
      <div className={props.classes.root}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: 'gatsbyjs, gatsby, javascript, sample, something' }
          ]}
        />
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6">{data.site.siteMetadata.title}</Typography>
          </Toolbar>
        </AppBar>
        {props.children}
      </div>
    )}
  />
);

export default withStyles(styles)(Layout);
