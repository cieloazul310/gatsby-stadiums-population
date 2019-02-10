import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {}
  });

interface Query {
  site: {
    siteMetadata: {
      title: string;
      siteUrl: string;
      description: string;
      author: {
        name: string;
        url: string;
      };
    };
  };
}

type Props = WithStyles<typeof styles>;

const Attribution: React.FunctionComponent<Props> = ({ classes }: Props) => (
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
            }
          }
        }
      }
    `}
    render={(data: Query) => (
      <div className={classes.root}>
        <aside>
          <Typography variant="h6">{data.site.siteMetadata.title}</Typography>
          <Typography variant="body1">{data.site.siteMetadata.description}</Typography>
        </aside>
      </div>
    )}
  />
);

export default withStyles(styles)(Attribution);
