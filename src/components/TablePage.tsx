import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import { Helmet } from 'react-helmet';
import RCTable from '../components/RCTable';
import Container from '../components/Container';
import Attribution from '../components/Attribution';
import { DataAttribution } from '../components/MapAttribution';
import Footer from '../components/Footer';
import { AutoSizer } from 'react-virtualized';
import { Group, Edge, AppState } from '../types';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      width: '100%'
    },
    content: {
      margin: 'auto',
      maxWidth: 1000
    },
    table: {
      width: '100%',
      height: '100vh',
      [theme.breakpoints.down('xs')]: {
        height: 'calc(100vh - 66px)'
      }
    },
    aside: {
      paddingTop: theme.spacing.unit * 4,
      paddingBottom: theme.spacing.unit * 4
    }
  });

interface Props extends WithStyles<typeof styles> {
  group: Group;
  edges: Edge[];
  appState: AppState;
}

class TablePage extends React.PureComponent<Props> {
  render() {
    const { classes, group, edges, appState } = this.props;
    const pageTitle = group === 'venues' ? 'スタジアム' : group === 'arenas' ? 'アリーナ' : '';

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Helmet>
          <html lang="ja" />
          <title>{pageTitle}と人口</title>
          <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,minimal-ui" />
          <meta
            name="description"
            content={`日本国内の主要な${pageTitle}の周辺人口を総務省統計局の地域メッシュ統計から算出し、地図に表示しました。`}
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`${pageTitle}と人口`} />
          <meta property="og:url" content="https://cieloazul310.github.io/gatsby-stadiums-population/" />
          <meta property="og:image" content="https://cieloazul310.github.io/img/ogp2.png" />
          <meta property="og:site_name" content="水戸地図" />
          <meta name="twitter:card" content="summary" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        </Helmet>
        <main>
          <div className={classes.content}>
            <div className={classes.table}>
              <AutoSizer>
                {({ width, height }) => (
                  <RCTable width={width} height={height} edges={edges} group={group} appState={appState} title={pageTitle} />
                )}
              </AutoSizer>
            </div>
          </div>
        </main>
        <aside>
          <div className={classes.aside}>
            <Container>
              <Attribution />
            </Container>
            <Container>
              <DataAttribution />
            </Container>
          </div>
        </aside>
        <Footer />
      </div>
    );
  }
}
export default withStyles(styles)(TablePage);
