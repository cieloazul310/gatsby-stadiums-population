import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { AutoSizer } from 'react-virtualized';
import Pie from '../components/Pie';

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
    edges: any[];
  };
}

interface Props extends WithStyles<typeof styles> {
  data: Data;
}

interface State {}

class Pies extends React.Component<Props, State> {
  public render() {
    const { classes, data } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar>
          <Toolbar>
            <Typography variant="h6" color="inherit">
              スタジアムと人口
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>
          {['J1', 'J2', 'J3', 'JFL', '地域', 'その他'].map(str => (
            <Paper key={str} className={classes.paper}>
              <Typography className={classes.paperTitle} variant="h5" gutterBottom>
                {str}のスタジアム
              </Typography>
              <Grid container className={classes.container} spacing={0}>
                {data.allVenuesJson.edges
                  .filter(edge => edge.node.summary.category.includes(str))
                  .sort((a, b) => scorePopulation(b.node.summary) - scorePopulation(a.node.summary))
                  .map((edge, index) => (
                    <Grid key={index} item xs={6} sm={4} md={2} lg={2} className={classes.edge}>
                      <AutoSizer disableHeight>
                        {({ width }) => <Pie width={width} item={edge.node.topojson.objects.buffers.geometries} />}
                      </AutoSizer>
                      <div>
                        <Typography className={classes.label} variant="caption">
                          <Link to={`/${edge.node.summary.slug}`}>{edge.node.summary.name}</Link>
                        </Typography>
                      </div>
                    </Grid>
                  ))}
              </Grid>
            </Paper>
          ))}
        </div>
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
