import * as React from 'react';
import { graphql } from 'gatsby';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import { Helmet } from 'react-helmet';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withRoot from '../utils/withRoot';
import TableApp from '../components/TableApp';
import { VenueEdge, LocationWithState, AppState, initialAppState } from '../utils/types';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      textAlign: 'center',
      width: '100%'
    },
    content: {
      paddingTop: 56
    }
  });

interface Props extends WithStyles<typeof styles> {
  data: {
    allVenuesJson: {
      edges: Array<VenueEdge>;
    };
  };
  location: LocationWithState;
}

class IndexPage extends React.PureComponent<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Helmet>
          <title>サッカースタジアムと人口</title>
          <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui" />
          <meta
            name="description"
            content="日本国内の主要なサッカースタジアムの周辺人口を総務省統計局の地域メッシュ統計から算出し、地図に表示しました。"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="サッカースタジアムと人口" />
          <meta property="og:url" content="https://cieloazul310.github.io/gatsby-stadiums-population/" />
          <meta property="og:image" content="https://cieloazul310.github.io/img/ogp2.png" />
          <meta property="og:site_name" content="水戸地図" />
          <meta name="twitter:card" content="summary" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        </Helmet>
        <AppBar>
          <ToolBar>
            <Typography variant="h6" color="inherit">
              スタジアムと距離圏人口
            </Typography>
          </ToolBar>
        </AppBar>
        <div className={classes.content}>
          <TableApp
            title="スタジアムと距離圏人口"
            data={this.props.data.allVenuesJson.edges}
            appState={this.props.location.state || initialAppState}
          />
        </div>
      </div>
    );
  }
}
export default withRoot(withStyles(styles)(IndexPage));

export const query = graphql`
  {
    allVenuesJson {
      edges {
        node {
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
