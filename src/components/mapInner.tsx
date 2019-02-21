// TODO: graphql のクエリを実行し、maps コンポーネントに受け渡す役割に変更する
// TODO: ts-error を潰していく

import * as React from 'react';
import { Link } from 'gatsby';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// styles
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
// icons
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { AutoSizer } from 'react-virtualized';
import { feature as topofeature } from 'topojson-client';

import MapApp from './MapApp';
import DrawerInner from './DrawerInner';
import MapLegends from './MapLegends';
import { sortData } from './RCTable';
//import DirectionTable from '../components/DirectionTable';
import ValuesTable from './ValuesTable';
import Pie from './Pie';
import Attribution from './Attribution';
import Container from './Container';
import { DataAttribution, MapAttribution } from './MapAttribution';
import AdBox from './AdBox';
import Footer from './Footer';
import { LocationWithState, initialAppState, navigateWithState, BufferProperties } from '../utils/types';
import { Directions, directions, Radiuses, Data, Edge, MapState, initialMapState } from '../types';

const drawerWidth = 280;

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      display: 'flex'
    },
    drawer: {
      [theme.breakpoints.up('md')]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    appBar: {
      marginLeft: drawerWidth,
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`
      }
    },
    menuButton: {
      marginRight: 10,
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    },
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1,
      paddingTop: 56,
      '@media (min-width: 600px)': {
        paddingTop: 64
      }
    },
    apptitle: {
      flexGrow: 1,
      lineHeight: 1.2,
      [theme.breakpoints.down('sm')]: {
        fontSize: '90%'
      }
    },
    fullWidthContainer: {
      width: '100%',
      margin: 'auto',
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2
    },
    autoSizerWrapper: {
      height: 'calc(100vh - 122px)',
      '@media (min-width: 600px)': {
        height: 'calc(100vh - 64px)'
      }
    },
    fabZoomIn: {
      position: 'absolute',
      bottom: theme.spacing.unit * 10,
      right: theme.spacing.unit * 2
    },
    fabZoomOut: {
      position: 'absolute',
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2
    },
    description: {
      maxWidth: 800,
      margin: 'auto'
    },
    descParagraph: {
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2
    }
  });

interface Props extends WithStyles<typeof styles> {
  edges: Edge[];
  data: Data;
  location: LocationWithState;
}

interface State extends MapState {
  readonly drawerOpen: boolean;
}

class MapInner extends React.Component<Props, State> {
  readonly state = this.props.location.state
    ? {
        ...this.props.location.state.mapState,
        drawerOpen: false
      }
    : {
        ...initialAppState.mapState,
        drawerOpen: false
      };
  private handleDrawerToggle = () => {
    this.setState(prev => ({
      drawerOpen: !prev.drawerOpen
    }));
  };
  private handlePopVisibility = () => {
    this.setState(prev => ({
      popVisibility: !prev.popVisibility
    }));
  };
  private handleBufferVisibility = () => {
    this.setState(prev => ({
      bufferVisibility: !prev.bufferVisibility
    }));
  };
  private handleZoomIn = () => {
    this.setState(prev => ({ zoomLevel: prev.zoomLevel !== 0 ? prev.zoomLevel - 1 : prev.zoomLevel }));
  };
  private handleZoomOut = () => {
    this.setState(prev => ({ zoomLevel: prev.zoomLevel !== 3 ? prev.zoomLevel + 1 : prev.zoomLevel }));
  };
  private handleTerrain = () => {
    this.setState(prev => ({
      terrain: !prev.terrain
    }));
  };

  public render() {
    console.log(this.props);
    const { classes, data, location } = this.props;
    const { popVisibility, bufferVisibility, zoomLevel, terrain } = this.state;
    const tableState = location.state ? location.state.tableState : initialAppState.tableState;
    const { edges } = data.allVenuesJson;
    const { summary, topojson } = data.venuesJson;
    const geojson = topofeature(topojson, topojson.objects.points);
    const meshes = geojson.features;
    const buffers = topofeature(topojson, topojson.objects.buffers).features;
    const others = sortData(edges, tableState.ascSort, tableState.sortKey, tableState.filterRule);
    const { name, club, category, slug } = summary;
    const drawer = (
      <DrawerInner
        summary={summary}
        edges={others}
        appState={{ tableState, mapState: { popVisibility, bufferVisibility, zoomLevel, terrain } }}
        handleDrawerToggle={this.handleDrawerToggle}
        handleZoomIn={this.handleZoomIn}
        handleZoomOut={this.handleZoomOut}
        handleBufferVisibility={this.handleBufferVisibility}
        handlePopVisibility={this.handlePopVisibility}
        handleTerrain={this.handleTerrain}
      />
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="fixed">
          <ToolBar>
            <IconButton
              className={classes.menuButton}
              role="presentation"
              aria-owns="menu"
              aria-haspopup="true"
              onClick={this.handleDrawerToggle}
              color="inherit"
            >
              <Menu />
            </IconButton>
            <Typography color="inherit" className={classes.apptitle} component="h1" variant="h6">
              {name}
            </Typography>
            <IconButton
              aria-owns="next"
              role="button"
              aria-haspopup="true"
              onClick={() => {
                const currentIndex = others.map(edge => edge.node.summary.slug).indexOf(slug);
                const next = currentIndex === others.length - 1 ? others[0] : others[currentIndex + 1];
                navigateWithState(`/${next.node.summary.slug}/`, {
                  tableState,
                  mapState: { popVisibility, bufferVisibility, zoomLevel, terrain }
                });
              }}
              color="inherit"
            >
              <ArrowForward />
            </IconButton>
          </ToolBar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden mdUp implementation="css">
            <SwipeableDrawer
              variant="temporary"
              open={this.state.drawerOpen}
              onClose={this.handleDrawerToggle}
              onOpen={this.handleDrawerToggle}
              classes={{ paper: classes.drawerPaper }}
            >
              {drawer}
            </SwipeableDrawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <div className={classes.content}>
          <main>
            <div className={classes.autoSizerWrapper}>
              <AutoSizer>
                {({ width, height }) => (
                  <div>
                    <MapApp
                      width={width}
                      height={height}
                      meshes={meshes}
                      buffers={buffers}
                      mapState={{ popVisibility, bufferVisibility, zoomLevel, terrain }}
                    />
                    <Hidden implementation="css" mdUp>
                      <Fab
                        className={classes.fabZoomIn}
                        color="primary"
                        disabled={zoomLevel === 0}
                        onClick={this.handleZoomIn}
                        role="button"
                      >
                        <AddIcon />
                      </Fab>
                      <Fab
                        className={classes.fabZoomOut}
                        color="primary"
                        disabled={zoomLevel === 3}
                        onClick={this.handleZoomOut}
                        role="button"
                      >
                        <RemoveIcon />
                      </Fab>
                    </Hidden>
                  </div>
                )}
              </AutoSizer>
            </div>
            <Container>
              <MapLegends />
            </Container>
            <Container>
              <AdBox />
            </Container>
            <Container>
              <Typography component="h2" variant="h5" gutterBottom>
                {name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                クラブ: {club.join(', ')}
                {'  '}
                カテゴリー: {category.join(', ')}
              </Typography>
            </Container>
            <Container>
              <Grid container className={classes.grid} direction="row-reverse" alignContent="center">
                <Grid item xs={12} sm={8}>
                  <ValuesTable summary={summary} />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Pie item={data.venuesJson.topojson.objects.buffers.geometries} />
                </Grid>
              </Grid>
            </Container>
          </main>
          <aside>
            <Container>
              <Attribution />
            </Container>
            <Container>
              <DataAttribution />
            </Container>
            <Container>
              <MapAttribution />
              <Link to="/" state={{ tableState, mapState: { popVisibility, bufferVisibility, zoomLevel } }}>
                トップに戻る
              </Link>
            </Container>
            <Container>
              <AdBox />
            </Container>
          </aside>
          <Footer />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MapInner);

// helper

function createDescriptionString(name: string, club: string[]): string {
  const intro = club[0] !== 'その他' ? `${club.join(',')} のホームスタジアム・` : '';
  return `${intro}${name}周辺の人口を総務省統計局の国勢調査に関する地域メッシュ統計(平成27年度)から算出し、地図に表示しました。`;
}

type DirectionObj = {
  [key in keyof typeof Directions]: Array<{
    radius: keyof typeof Radiuses;
    population: number;
    diff: number;
  }>
};

function getItemsDiff(items: Array<{ properties: BufferProperties }>): DirectionObj {
  const obj: any = {};
  directions.forEach(direction => {
    obj[direction] = items.map((item, index, arr) => ({
      radius: item.properties.radius,
      population: item.properties[direction],
      diff: index === 0 ? item.properties[direction] : item.properties[direction] - arr[index - 1].properties[direction]
    }));
  });
  return obj;
}
