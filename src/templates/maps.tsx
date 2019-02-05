import * as React from 'react';
import { graphql, Link, navigate } from 'gatsby';
import Helmet from 'react-helmet';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ListIcon from '@material-ui/icons/List';
import Typography from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { AutoSizer } from 'react-virtualized';
import { feature as topofeature } from 'topojson-client';
import { Topology } from 'topojson-specification';

import MapApp from '../components/MapApp';
import BufferArcs from '../components/BuffersArcs';
import { Summary, LocationWithState } from '../utils/types';
import withRoot from '../utils/withRoot';

const drawerWidth = 240;

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
      marginRight: 20,
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1,
      paddingTop: 48
    },
    apptitle: {
      flexGrow: 1
    },
    autoSizerWrapper: {
      height: 'calc(100vh - 56px)'
    },
    buffersWrapper: {
      width: '100%',
      maxWidth: 600,
      margin: 'auto'
    },
    description: {
      maxWidth: 800,
      margin: 'auto',
      padding: theme.spacing.unit * 3
    }
  });

interface Props extends WithStyles<typeof styles> {
  data: {
    allVenuesJson: {
      edges: Array<{
        node: {
          summary: {
            name: string;
            slug: string;
          };
        };
      }>;
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

interface State {
  readonly drawerOpen: boolean;
}

class MapPage extends React.Component<Props, State> {
  readonly state = {
    drawerOpen: false
  };
  private handleDrawerToggle = () => {
    this.setState(prev => ({
      drawerOpen: !prev.drawerOpen
    }));
  };

  public render() {
    const { classes, data } = this.props;
    const { edges } = data.allVenuesJson;
    const { summary, topojson, fields } = data.venuesJson;
    const geojson = topofeature(topojson, topojson.objects.points);
    const buffers = topofeature(topojson, topojson.objects.buffers).features;

    const { name, radius1000, radius3000, radius5000, radius10000, slug } = summary;

    const drawer = (
      <div>
        <List subheader={<ListSubheader>地図</ListSubheader>}>
          <ListItem
            button
            onClick={() => {
              navigate('/');
            }}
          >
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText>表に戻る</ListItemText>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText>地図を拡大</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText>地形モード</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText>人口を非表示</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText>距離円を非表示</ListItemText>
          </ListItem>
          <Divider />
        </List>
        <List subheader={<ListSubheader>一覧</ListSubheader>}>
          {edges.map(edge => (
            <ListItem
              key={edge.node.summary.slug}
              button
              selected={edge.node.summary.slug === slug}
              onClick={() => {
                navigate(`/${edge.node.summary.slug}/`);
              }}
            >
              <ListItemText>{edge.node.summary.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <Helmet>
          <title>{summary.name}周辺の人口 | サッカースタジアムと人口</title>
          <meta name="description" content={`${summary.name}周辺の人口を表示した地図`} />
          <meta property="og:type" content="article" />
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
                const slugs = edges.map(edge => edge.node.summary.slug);
                const next = slugs[Math.round(Math.random() * slugs.length)];
                navigate(`/${next}/`, { state: { from: fields.slug } });
              }}
              color="inherit"
            >
              <ArrowForward />
            </IconButton>
          </ToolBar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden mdUp implementation="css">
            <Drawer
              variant="temporary"
              open={this.state.drawerOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <div className={classes.content}>
          <div className={classes.autoSizerWrapper}>
            <AutoSizer>{({ width, height }) => <MapApp width={width} height={height} geojson={geojson} buffers={buffers} />}</AutoSizer>
          </div>
          <div className={classes.description}>
            <Typography variant="h5">{name}</Typography>
            <div className={classes.buffersWrapper}>
              <AutoSizer disableHeight>{({ width }) => <BufferArcs buffers={buffers} width={width} />}</AutoSizer>
            </div>
            <ul>
              <li>{`1km: ${radius1000}`}</li>
              <li>{`3km: ${radius3000}`}</li>
              <li>{`5km: ${radius5000}`}</li>
              <li>{`10km: ${radius10000}`}</li>
            </ul>
            <Link to="/" state={this.props.location.state}>
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
export const query = graphql`
  query($slug: String!) {
    allVenuesJson {
      edges {
        node {
          summary {
            slug
            name
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
        shortname
        category
        radius1000
        radius3000
        radius5000
        radius10000
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
