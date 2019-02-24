import * as React from 'react';
import { Link } from 'gatsby';
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
import Container from '../components/Container';
import Sharer from '../components/Sharer';
import Footer from '../components/Footer';
import { AppState, navigateWithState, EdgeWithBuffer, Group, Categories, footballCategories, basketballCategories } from '../types';
import AdBox from '../components/AdBox';

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

interface Props extends WithStyles<typeof styles> {
  edges: EdgeWithBuffer[];
  appState: AppState;
  group: Group;
}

interface State {}

class Pies extends React.Component<Props, State> {
  public render() {
    const { classes, edges, appState, group } = this.props;
    const categories: Categories[] = group === 'venues' ? footballCategories : group === 'arenas' ? basketballCategories : [];
    const groupTitle = group === 'venues' ? 'スタジアム' : group === 'arenas' ? 'アリーナ' : '';
    const url = `https://cieloazul310.github.io/gatsby-stadiums-population/${group}/manholes/`;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Helmet>
          <html lang="ja" />
          <title>{groupTitle}と距離圏人口 | 水戸地図</title>
          <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,minimal-ui" />
          <meta
            name="description"
            content={`日本国内の主要な${groupTitle}の周辺人口を総務省統計局の地域メッシュ統計から算出し、地図に表示しました。`}
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`${groupTitle}と人口`} />
          <meta property="og:url" content={url} />
          <meta property="og:image" content="https://cieloazul310.github.io/img/ogp2.png" />
          <meta property="og:site_name" content="水戸地図" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:description"
            content={`日本国内の主要な${groupTitle}の周辺人口を総務省統計局の地域メッシュ統計から算出し、地図に表示しました。`}
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        </Helmet>
        <AppBar>
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={() => {
                navigateWithState(`/${group}`, appState);
              }}
            >
              <ArrowBack />
            </IconButton>
            <Typography variant="h6" color="inherit">
              {groupTitle}と距離圏人口
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>
          {categories.map(category => (
            <Paper key={category} className={classes.paper}>
              <Typography className={classes.paperTitle} variant="h5" gutterBottom>
                {category !== '地域' ? category : '地域リーグ'}の{groupTitle}
              </Typography>
              <Grid container className={classes.container} spacing={0}>
                {edges
                  .filter(edge => edge.node.summary.category.includes(category))
                  .sort((a, b) => scorePopulation(b.node.summary) - scorePopulation(a.node.summary))
                  .map((edge, index) => (
                    <Grid key={index} item xs={6} sm={4} md={2} lg={2} className={classes.edge}>
                      <Pie item={edge.node.topojson.objects.buffers.geometries} />
                      <div>
                        <Typography className={classes.label} variant="caption">
                          <Link to={edge.node.fields.slug} state={{ appState }}>
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
        <Container>
          <Sharer title={`${groupTitle}と人口`} url={url} />
        </Container>
        <Container>
          <AdBox />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(Pies);

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
