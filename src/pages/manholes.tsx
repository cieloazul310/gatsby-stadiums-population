import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Pie from '../components/Pie';
import Footer from '../components/Footer';
import { LocationWithState, initialAppState, navigateWithState, EdgeWithBuffer } from '../types';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      flex: 1
    },
    content: {
      paddingTop: 64,
      paddingRight: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
      '@media (max-width: 599px)': {
        paddingTop: 56
      },
      [theme.breakpoints.down('xs')]: {
        paddingRight: 0,
        paddingLeft: 0
      }
    },
    container: {
      padding: theme.spacing.unit
    },
    paper: {
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2,
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2
    },
    paperTitle: {
      textAlign: 'center'
    },
    edge: {
      padding: theme.spacing.unit
    },
    label: {
      display: 'flex',
      justifyContent: 'center'
    }
  });

interface Data {
  allVenuesJson: {
    edges: EdgeWithBuffer[];
  };
}

interface Props extends WithStyles<typeof styles> {
  data: Data;
  location: LocationWithState;
}

interface State {}

class Pies extends React.Component<Props, State> {
  public render() {
    const { classes, data, location } = this.props;
    const { state } = location;
    return (
      <div className={classes.root}>
        <Helmet>
          <html lang="ja" />
          <title>スタジアムと距離圏人口</title>
          <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,minimal-ui" />
          <meta
            name="description"
            content="日本国内の主要なサッカースタジアムの周辺人口を総務省統計局の地域メッシュ統計から算出し、地図に表示しました。"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="サッカースタジアムと人口" />
          <meta property="og:url" content="https://cieloazul310.github.io/gatsby-stadiums-population/manholes/" />
          <meta property="og:image" content="https://cieloazul310.github.io/img/ogp2.png" />
          <meta property="og:site_name" content="水戸地図" />
          <meta name="twitter:card" content="summary" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        </Helmet>
        <CssBaseline />
        <AppBar>
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={() => {
                navigateWithState('./', state === null || state.appState === undefined ? initialAppState : state.appState);
              }}
            >
              <ArrowBack />
            </IconButton>
            <Typography variant="h6" color="inherit">
              スタジアムと距離圏人口
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>
          {['J1', 'J2', 'J3', 'JFL', '地域', 'その他'].map(str => (
            <Paper key={str} className={classes.paper}>
              <Typography className={classes.paperTitle} variant="h5" gutterBottom>
                {str !== '地域' ? str : '地域リーグ'}のスタジアム
              </Typography>
              <Grid container className={classes.container} spacing={0}>
                {data.allVenuesJson.edges
                  .filter(edge => edge.node.summary.category.includes(str))
                  .sort((a, b) => scorePopulation(b.node.summary) - scorePopulation(a.node.summary))
                  .map((edge, index) => (
                    <Grid key={index} item xs={6} sm={4} md={2} lg={2} className={classes.edge}>
                      <Pie item={edge.node.topojson.objects.buffers.geometries} />
                      <div>
                        <Typography className={classes.label} variant="caption">
                          <Link to={`/${edge.node.summary.slug}`} state={state || initialAppState}>
                            {edge.node.summary.name}
                          </Link>
                        </Typography>
                      </div>
                    </Grid>
                  ))}
              </Grid>
            </Paper>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(Pies);

export const query = graphql`
  {
    allVenuesJson {
      edges {
        node {
          summary {
            name
            shortname
            category
            slug
            radius1000
            radius3000
            radius5000
            radius10000
          }
          topojson {
            objects {
              buffers {
                geometries {
                  properties {
                    name
                    radius
                    population
                    north
                    northeast
                    east
                    southeast
                    south
                    southwest
                    west
                    northwest
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

// helpers
function scorePopulation(summary: any): number {
  enum Scores {
    radius1000 = 100,
    radius3000 = 33,
    radius5000 = 10,
    radius10000 = 1
  }

  const r: Array<keyof typeof Scores> = ['radius1000', 'radius3000', 'radius5000', 'radius10000'];

  return r.reduce((accum, curr, index, arr) => {
    return index === 0 ? accum + summary[curr] * Scores[curr] : accum + (summary[curr] - summary[arr[index - 1]]) * Scores[curr];
  }, 0);
}
