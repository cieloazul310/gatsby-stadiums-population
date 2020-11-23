import * as React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
/*
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
*/
import Typography from '@material-ui/core/Typography';
import RCTable from '../components/RCTable';
import Container from '../components/Container';
import Attribution from '../components/Attribution';
import { DataAttribution } from '../components/MapAttribution';
import Sharer from '../components/Sharer';
import Footer from '../components/Footer';
import { AutoSizer } from 'react-virtualized';
import { Group, Edge, AppState } from '../types';
import AdBox from '../components/AdBox';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    main: {
      width: '100%'
    },
    content: {
      width: '100%',
      margin: 'auto',
      maxWidth: 1000
    },
    table: {
      width: '100%',
      height: '100vh'
    },
    aside: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    }
  })
);

interface Props {
  group: Group;
  edges: Edge[];
  appState: AppState;
}

function TablePage({ group, edges, appState }: Props) {
  const classes = useStyles({});
  const groupTitle = group === 'venues' ? 'スタジアム' : group === 'arenas' ? 'アリーナ' : '';
  const url = `https://cieloazul310.github.io/gatsby-stadiums-population/${group}`;

  return (
    <div className={classes.root}>
      <Helmet>
        <html lang="ja" />
        <title>{groupTitle}周辺人口一覧 | スタジアム・アリーナと人口</title>
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,minimal-ui" />
        <meta
          name="description"
          content={`日本国内の主要な${groupTitle}の周辺人口を総務省統計局の地域メッシュ統計から算出し、地図に表示しました。`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${groupTitle}周辺人口一覧 | スタジアム・アリーナと人口`} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://cieloazul310.github.io/img/ogp2.png" />
        <meta property="og:site_name" content="水戸地図" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content={`日本国内の主要な${groupTitle}の周辺人口を総務省統計局の地域メッシュ統計から算出し、地図に表示しました。`}
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </Helmet>
      <main className={classes.main}>
        <div className={classes.content}>
          <div className={classes.table}>
            <AutoSizer defaultWidth={300} defaultHeight={300}>
              {({ width, height }) => (
                <RCTable width={width} height={height} edges={edges} group={group} appState={appState} title={groupTitle} />
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
          <Container>
            <Typography variant="body1" paragraph>
              <Link
                to={group === 'venues' ? '/arenas' : '/venues'}
                state={{
                  appState: appState
                }}
              >
                {group === 'venues' ? 'バスケットボール' : 'サッカー'}版へ
              </Link>
            </Typography>
            <Typography variant="body1" paragraph>
              <Link
                to="/"
                state={{
                  appState: appState
                }}
              >
                トップに戻る
              </Link>
            </Typography>
          </Container>
          <Container>
            <Sharer title={`${groupTitle}周辺人口一覧 | スタジアム・アリーナと人口`} url={url} />
          </Container>
          <Container>
            <AdBox />
          </Container>
        </div>
      </aside>
      <Footer />
    </div>
  );
}

export default TablePage;
