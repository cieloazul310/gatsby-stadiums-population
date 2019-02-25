import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import FormatListNumbered from '@material-ui/icons/FormatListNumbered';
import PinDrop from '@material-ui/icons/PinDrop';
import Container from '../components/Container';
import Sharer from '../components/Sharer';
import Footer from '../components/Footer';
import { LocationWithState, createInitialAppState, navigateWithState } from '../types';
import AdBox from '../components/AdBox';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {},
    content: {
      padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 2}px`,
      maxWidth: 800,
      margin: 'auto'
    },
    title: {
      padding: `${theme.spacing.unit * 6}px 0`
    },
    group: {
      padding: `${theme.spacing.unit * 4}px 0`
    },
    buttons: {
      paddingTop: theme.spacing.unit,
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center'
    },
    button: {
      fontWeight: 'bold',
      margin: `0 ${theme.spacing.unit}px`
    },
    buttonIcon: {
      marginRight: theme.spacing.unit
    }
  });

interface Props extends WithStyles<typeof styles> {
  location: LocationWithState;
}
interface SlugEdge {
  node: {
    fields: {
      slug: string;
    };
  };
}
interface QueryData {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      siteUrl: string;
    };
  };
  allVenuesJson: {
    totalCount: number;
    edges: SlugEdge[];
  };
  allArenasJson: {
    totalCount: number;
    edges: SlugEdge[];
  };
}

class IndexPage extends React.PureComponent<Props> {
  render() {
    //console.log(this.props);
    const { classes, location } = this.props;
    const appState = createInitialAppState(location);
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
            allVenuesJson {
              totalCount
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
            allArenasJson {
              totalCount
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `}
        render={(data: QueryData) => (
          <div className={classes.root}>
            <CssBaseline />
            <Helmet>
              <html lang="ja" />
              <title>{data.site.siteMetadata.title} | 水戸地図</title>
              <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,minimal-ui" />
              <meta name="description" content={data.site.siteMetadata.description} />
              <meta property="og:type" content="website" />
              <meta property="og:title" content={data.site.siteMetadata.title} />
              <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
              <meta property="og:image" content="https://cieloazul310.github.io/img/ogp2.png" />
              <meta property="og:site_name" content="水戸地図" />
              <meta name="twitter:card" content="summary" />
              <meta name="twitter:description" content={data.site.siteMetadata.description} />
              <meta name="apple-mobile-web-app-capable" content="yes" />
              <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            </Helmet>
            <div className={classes.content}>
              <Typography variant="h4" component="h1" gutterBottom align="center" className={classes.title}>
                {data.site.siteMetadata.title}
              </Typography>
              <Typography variant="body2" paragraph>
                {data.site.siteMetadata.description}
              </Typography>
              <div className={classes.group}>
                <Typography variant="h6" gutterBottom align="center">
                  {data.allVenuesJson.totalCount} のサッカースタジアム
                </Typography>
                <Typography variant="caption" gutterBottom align="center">
                  J1, J2, J3, JFL のスタジアム、地域リーグの一部とその他のスタジアムを収録
                </Typography>
                <div className={classes.buttons}>
                  <Button
                    className={classes.button}
                    aria-label="表を見る"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      navigateWithState('/venues', appState);
                    }}
                  >
                    <FormatListNumbered className={classes.buttonIcon} />
                    表を見る
                  </Button>
                  <Button
                    className={classes.button}
                    aria-label="ランダムジャンプ"
                    color="primary"
                    onClick={() => {
                      navigateWithState(
                        data.allVenuesJson.edges[Math.round(Math.random() * (data.allVenuesJson.totalCount - 1))].node.fields.slug,
                        appState
                      );
                    }}
                  >
                    <PinDrop className={classes.buttonIcon} />
                    ランダムジャンプ
                  </Button>
                </div>
              </div>
              <div className={classes.group}>
                <Typography variant="h6" gutterBottom align="center">
                  {data.allArenasJson.totalCount} のアリーナ
                </Typography>
                <Typography variant="caption" gutterBottom align="center">
                  B1, B2, B3 のアリーナ、地域リーグの一部のアリーナを収録
                </Typography>
                <div className={classes.buttons}>
                  <Button
                    className={classes.button}
                    aria-label="表を見る"
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      navigateWithState('/arenas', appState);
                    }}
                  >
                    <FormatListNumbered className={classes.buttonIcon} />
                    表を見る
                  </Button>
                  <Button
                    className={classes.button}
                    aria-label="ランダムジャンプ"
                    color="secondary"
                    onClick={() => {
                      navigateWithState(
                        data.allArenasJson.edges[Math.round(Math.random() * (data.allArenasJson.totalCount - 1))].node.fields.slug,
                        appState
                      );
                    }}
                  >
                    <PinDrop className={classes.buttonIcon} />
                    ランダムジャンプ
                  </Button>
                </div>
              </div>
              <Container>
                <Sharer title={data.site.siteMetadata.title} url={data.site.siteMetadata.siteUrl} />
              </Container>
              <Container>
                <AdBox />
              </Container>
            </div>
            <Footer />
          </div>
        )}
      />
    );
  }
}

export default withStyles(styles)(IndexPage);
