import * as React from 'react';
import { graphql, Link, navigate } from 'gatsby';
import Helmet from 'react-helmet';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListSubheader from '@material-ui/core/ListSubheader';
import Fab from '@material-ui/core/Fab';
import Switch from '@material-ui/core/Switch';
import Divider from '@material-ui/core/Divider';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Typography from '@material-ui/core/Typography';
// styles
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
// icons
import ZoomIn from '@material-ui/icons/ZoomIn';
import ZoomOut from '@material-ui/icons/ZoomOut';
import PeopleIcon from '@material-ui/icons/People';
import Adjust from '@material-ui/icons/Adjust';
import LandScape from '@material-ui/icons/Landscape';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Reply from '@material-ui/icons/Reply';

import { AutoSizer } from 'react-virtualized';
import { feature as topofeature } from 'topojson-client';
import { Topology } from 'topojson-specification';

import MapApp from '../components/MapApp';
import MapLegends from '../components/MapLegends';
import { sortData } from '../components/TableApp';
import BufferArcs from '../components/BuffersArcs';
import ValuesTable from '../components/ValuesTable';
import TwitterIcon from '../components/fa-buttons/TwitterIcon';
import FacebookIcon from '../components/fa-buttons/FacebookIcon';
import { Summary, LocationWithState, VenueEdge, MapState, initialAppState, TableState } from '../utils/types';
import withRoot from '../utils/withRoot';

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
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth
    },
    itemTitle: {
      fontSize: '80%',
      fontWeight: 'bold'
    },
    itemNumber: {
      textAlign: 'right'
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
    autoSizerWrapper: {
      height: 'calc(100vh - 56px)',
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
    buffersWrapper: {
      width: '100%',
      maxWidth: 480,
      margin: 'auto'
    },
    description: {
      maxWidth: 800,
      margin: 'auto'
    },
    descTitle: {
      padding: theme.spacing.unit * 2
    },
    descParagraph: {
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2
    }
  });

interface Props extends WithStyles<typeof styles> {
  data: {
    allVenuesJson: {
      edges: Array<VenueEdge>;
    };
    venuesJson: {
      fields: {
        slug: string;
      };
      summary: Summary;
      topojson: Topology;
    };
  };
  location: LocationWithState;
}

interface State extends MapState {
  readonly drawerOpen: boolean;
}

class MapPage extends React.Component<Props, State> {
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

  public render() {
    const { classes, data, location } = this.props;
    const { popVisibility, bufferVisibility, zoomLevel } = this.state;
    const tableState = location.state ? location.state.tableState : initialAppState.tableState;
    const { edges } = data.allVenuesJson;
    const { summary, topojson } = data.venuesJson;
    const geojson = topofeature(topojson, topojson.objects.points);
    const buffers = topofeature(topojson, topojson.objects.buffers).features;
    const others = sortData(edges, tableState.ascSort, tableState.sortKey, tableState.filterRule);
    const sortProp =
      tableState.sortKey === 0
        ? 'radius1000'
        : tableState.sortKey === 1
        ? 'radius3000'
        : tableState.sortKey === 2
        ? 'radius5000'
        : 'radius10000';

    const { name, club, shortname, category, radius1000, radius3000, radius5000, radius10000, slug } = summary;
    const drawer = (
      <div>
        <div className={classes.toolbar}>
          <List>
            <ListItem
              button
              onClick={() => {
                navigate('/', { state: { tableState, mapState: { popVisibility, bufferVisibility, zoomLevel } } });
              }}
            >
              <ListItemIcon>
                <Reply />
              </ListItemIcon>
              <ListItemText>表に戻る</ListItemText>
            </ListItem>
          </List>
        </div>
        {/*
        <div className={classes.toolbar} />
                <List>
          <ListItem
            button
            onClick={() => {
              navigate('/', { state: { tableState, mapState: { popVisibility, bufferVisibility, zoomLevel } } });
            }}
          >
            <ListItemIcon>
              <Reply />
            </ListItemIcon>
            <ListItemText>表に戻る</ListItemText>
          </ListItem>
        </List>
        */}
        <Divider />
        <ValuesTable summary={summary} />
        <List subheader={<ListSubheader>地図</ListSubheader>}>
          <Hidden smDown implementation="css">
            <ListItem button selected={zoomLevel === 0} onClick={this.handleZoomIn}>
              <ListItemIcon>
                <ZoomIn />
              </ListItemIcon>
              <ListItemText>地図を拡大</ListItemText>
            </ListItem>
            <ListItem button selected={zoomLevel === 3} onClick={this.handleZoomOut}>
              <ListItemIcon>
                <ZoomOut />
              </ListItemIcon>
              <ListItemText primary="地図を縮小" />
            </ListItem>
          </Hidden>
          <ListItem button>
            <ListItemIcon>
              <LandScape />
            </ListItemIcon>
            <ListItemText primary="地形モード" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="人口" />
            <ListItemSecondaryAction>
              <Switch onChange={this.handlePopVisibility} checked={popVisibility} />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Adjust />
            </ListItemIcon>
            <ListItemText primary="距離円" />
            <ListItemSecondaryAction>
              <Switch onChange={this.handleBufferVisibility} checked={bufferVisibility} />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <Divider />
        <List subheader={<ListSubheader>シェア</ListSubheader>}>
          <ListItem
            button
            component="a"
            href={
              `https://twitter.com/intent/tweet?text=` +
              encodeURI(`${name}周辺の人口`) +
              `&url=` +
              encodeURIComponent(`https://cieloazul310.github.io/gatsby-stadiums-population/${slug}/`)
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListItemIcon>
              <TwitterIcon />
            </ListItemIcon>
            <ListItemText primary="Twitterで共有" />
          </ListItem>
          <ListItem
            button
            component="a"
            href={
              `https://www.facebook.com/sharer/sharer.php?u=` +
              encodeURIComponent(`https://cieloazul310.github.io/gatsby-stadiums-population/${slug}/`)
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListItemIcon>
              <FacebookIcon />
            </ListItemIcon>
            <ListItemText primary="Facebookで共有" />
          </ListItem>
        </List>
        <Divider />
        <List subheader={<ListSubheader>{`一覧 ${createSortString(tableState)}`}</ListSubheader>}>
          {others.map(edge => (
            <ListItem
              key={edge.node.summary.slug}
              button
              selected={edge.node.summary.slug === slug}
              onClick={() => {
                navigate(`/${edge.node.summary.slug}/`, {
                  state: { tableState, mapState: { popVisibility, bufferVisibility, zoomLevel } }
                });
              }}
            >
              <ListItemText
                primary={<Typography className={classes.itemTitle}>{edge.node.summary.name}</Typography>}
                secondary={
                  <Typography component="span" className={classes.itemNumber}>
                    {edge.node.summary[sortProp].toLocaleString()}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <Helmet>
          <title>{name}周辺の人口 | サッカースタジアムと人口</title>
          <meta name="description" content={createDescriptionString(name, club)} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={`${name}周辺の人口`} />
          <meta property="og:image" content="https://cieloazul310.github.io/img/ogp2.png" />
          <meta property="og:url" content={`https://cieloazul310.github.io/gatsby-stadiums-population/${slug}/`} />
          <meta property="og:site_name" content="水戸地図" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content={createDescriptionString(name, club)} />
        </Helmet>
        <AppBar className={classes.appBar} position="fixed">
          <ToolBar>
            <IconButton
              className={classes.menuButton}
              aria-owns="menu"
              aria-haspopup="true"
              onClick={this.handleDrawerToggle}
              color="inherit"
            >
              <Menu />
            </IconButton>
            <Typography color="inherit" className={classes.apptitle} variant="h6">
              {name}
            </Typography>
            <IconButton
              aria-owns="next"
              aria-haspopup="true"
              onClick={() => {
                const currentIndex = others.map(edge => edge.node.summary.slug).indexOf(slug);
                const next = currentIndex === others.length - 1 ? others[0] : others[currentIndex + 1];
                navigate(`/${next.node.summary.slug}/`, {
                  state: { tableState, mapState: { popVisibility, bufferVisibility, zoomLevel } }
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
          <div className={classes.autoSizerWrapper}>
            <AutoSizer>
              {({ width, height }) => (
                <div>
                  <MapApp
                    width={width}
                    height={height}
                    geojson={geojson}
                    buffers={buffers}
                    mapState={{ popVisibility, bufferVisibility, zoomLevel }}
                  />
                  <Hidden implementation="css" mdUp>
                    <Fab className={classes.fabZoomIn} color="primary" disabled={zoomLevel === 0} onClick={this.handleZoomIn}>
                      <AddIcon />
                    </Fab>
                    <Fab className={classes.fabZoomOut} color="primary" disabled={zoomLevel === 3} onClick={this.handleZoomOut}>
                      <RemoveIcon />
                    </Fab>
                  </Hidden>
                </div>
              )}
            </AutoSizer>
          </div>
          <MapLegends />
          <div className={classes.description}>
            <Typography className={classes.descTitle} variant="h6">
              {name}
            </Typography>
            <ValuesTable summary={summary} />
            <div className={classes.buffersWrapper}>
              <AutoSizer disableHeight>{({ width }) => <BufferArcs buffers={buffers} width={width} />}</AutoSizer>
            </div>
            <Link to="/" state={{ tableState, mapState: { popVisibility, bufferVisibility, zoomLevel } }}>
              トップに戻る
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(MapPage));

// helper
function createSortString(tableState: TableState): string {
  const { ascSort, sortKey } = tableState;
  const sortRule = ascSort ? '昇順' : '降順';
  const sortLabel = ['1km', '3km', '5km', '10km'][sortKey];

  return `${sortLabel}圏内 ${sortRule}`;
}

function createDescriptionString(name: string, club: string[]): string {
  const intro = club[0] !== 'その他' ? `${club.join(',')} のホームスタジアム・` : '';
  return `${intro}${name}周辺の人口を総務省統計局の国勢調査に関する地域メッシュ統計(平成27年度)から算出し、地図に表示しました。`;
}

export const query = graphql`
  query($slug: String!) {
    allVenuesJson {
      edges {
        node {
          summary {
            slug
            name
            club
            shortname
            category
            radius1000
            radius3000
            radius5000
            radius10000
          }
        }
      }
    }
    venuesJson(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      summary {
        name
        club
        shortname
        category
        radius1000
        radius3000
        radius5000
        radius10000
        slug
      }
      topojson {
        type
        transform {
          scale
          translate
        }
        objects {
          points {
            type
            geometries {
              type
              coordinates
              properties {
                id
                val
              }
            }
          }
          buffers {
            type
            geometries {
              type
              arcs
              properties {
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
        arcs
      }
    }
  }
`;
