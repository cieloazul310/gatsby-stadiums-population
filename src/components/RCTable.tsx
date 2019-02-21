import * as React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import lightBlue from '@material-ui/core/colors/lightBlue';
// Icons
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RemoveIcon from '@material-ui/icons/Remove';
import FilterListIcon from '@material-ui/icons/FilterList';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import ArrowForward from '@material-ui/icons/ArrowForward';

import {
  Edge,
  AppState,
  TableState,
  Radiuses,
  radiusLabels,
  Categories,
  navigateWithState,
  Group,
  footballCategories,
  basketballCategories
} from '../types';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      fontSize: '80%',
      fontFamily: theme.typography.fontFamily
    },
    table: {
      overflowY: 'scroll',
      overflowScrolling: 'touch',
      WebkitOverflowScrolling: 'touch',
      zIndex: 0
    },
    header: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      position: 'sticky',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: theme.shadows[1],
      zIndex: 99
    },
    toolbar: {
      display: 'flex',
      flexDirection: 'row',
      height: 56
    },
    title: {
      flex: 1
    },
    filterMenuWrapper: {
      zIndex: 100
    },
    headerRowHead: {
      flex: 1,
      display: 'flex',
      '@media (max-width: 720px)': {
        display: 'none'
      }
    },
    headerRowBody: {
      display: 'flex',
      justifyContent: 'space-evenly'
    },
    labelCell: {
      borderBottom: '2px solid rgba(255, 255, 255, 0)',
      transition: 'border .25s',
      '&:hover': {
        borderBottom: '2px solid white'
      }
    },
    labelCellActive: {
      borderBottom: '2px solid white'
    },
    labelRoot: {
      color: '#ddd',
      '&:hover': {
        color: theme.palette.primary.contrastText
      },
      '&:focus': {
        color: theme.palette.primary.contrastText
      }
    },
    labelActive: {
      color: theme.palette.primary.contrastText,
      '&:hover': {
        color: theme.palette.primary.contrastText
      },
      '&:focus': {
        color: theme.palette.primary.contrastText
      }
    },
    thead: {},
    row: {
      display: 'flex',
      flexDirection: 'row',
      '@media (max-width: 720px)': {
        flexDirection: 'column',
        borderBottom: '1px solid #ddd'
      }
    },
    rowHead: {
      flex: 1,
      display: 'flex',
      boxSizing: 'border-box',
      borderRight: '1px solid #eee',
      '@media (max-width: 720px)': {
        borderRight: 'none',
        borderBottom: '1px solid #eee'
      }
    },
    index: {
      width: '4em',
      padding: '1rem .5rem',
      boxSizing: 'border-box',
      textAlign: 'right'
    },
    name: {
      padding: '1rem',
      boxSizing: 'border-box',
      flex: 1,
      fontWeight: 'bold'
    },
    category: {
      color: '#333',
      padding: '1rem',
      boxSizing: 'border-box'
    },
    rowBody: {
      display: 'flex',
      justifyContent: 'space-evenly'
    },
    val: {
      width: '9em',
      padding: '1rem',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'row-reverse'
    },
    link: {
      color: theme.palette.primary.main,
      '&:visited': {
        color: lightBlue[900]
      },
      '&:hover': {
        color: lightBlue[500]
      }
    }
  });

interface Props extends WithStyles<typeof styles> {
  edges: Edge[];
  width: number;
  height: number;
  appState: AppState;
  group: Group;
  title: string;
}

interface State extends TableState {
  readonly menuOpen: boolean;
}

class RCTable extends React.Component<Props, State> {
  readonly state: State = this.props.appState
    ? {
        ...this.props.appState.tableState,
        menuOpen: false
      }
    : {
        ascSort: false,
        sortKey: Radiuses.radius10000,
        filterRule: [],
        menuOpen: false
      };
  private anchorEl: HTMLElement | null = null;
  private _handleSort = (radius: Radiuses) => {
    this.setState(prevState => ({
      ascSort: prevState.sortKey === radius ? !prevState.ascSort : false,
      sortKey: radius
    }));
  };
  private _handleMenuOpen = () => {
    this.setState(prev => ({
      menuOpen: !prev.menuOpen
    }));
  };
  private _handleFilterRule = (category: Categories) => {
    this.setState(prevState => ({
      filterRule:
        prevState.filterRule.indexOf(category) >= 0
          ? prevState.filterRule.filter(filter => filter !== category)
          : [...prevState.filterRule, category]
    }));
  };
  public render() {
    const { classes, edges, width, height, appState, group, title } = this.props;
    const { ascSort, sortKey, filterRule, menuOpen } = this.state;
    const categories: Categories[] = group === 'venues' ? footballCategories : group === 'arenas' ? basketballCategories : [];
    return (
      <Paper
        className={classes.root}
        style={{
          width: width,
          height: height
        }}
      >
        <div className={classes.header}>
          <Toolbar className={classes.toolbar}>
            {' '}
            <Tooltip title="フィルター">
              <IconButton
                color="inherit"
                aria-owns={menuOpen ? 'menu-list' : undefined}
                aria-haspopup="true"
                buttonRef={node => {
                  this.anchorEl = node;
                }}
                onClick={this._handleMenuOpen}
              >
                <FilterListIcon />
              </IconButton>
            </Tooltip>
            <Popper
              className={classes.filterMenuWrapper}
              anchorEl={this.anchorEl}
              open={menuOpen}
              transition
              disablePortal
              placement="bottom-start"
            >
              {({ TransitionProps }) => (
                <Grow {...TransitionProps} style={{ transformOrigin: 'left top' }}>
                  <Paper>
                    <ClickAwayListener
                      onClickAway={event => {
                        if (this.anchorEl === null || this.anchorEl.contains(event.target)) {
                          return;
                        }
                        this.setState({ menuOpen: false });
                      }}
                    >
                      <MenuList>
                        {categories.map((category, index) => (
                          <MenuItem
                            key={index}
                            onClick={() => {
                              this._handleFilterRule(category);
                            }}
                          >
                            <ListItemIcon>
                              {filterRule.indexOf(category) < 0 ? <CheckCircleIcon /> : <RemoveIcon color="disabled" />}
                            </ListItemIcon>
                            <ListItemText inset primary={category} />
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            <Typography className={classes.title} variant="h6" color="inherit">
              {title}と距離圏人口
            </Typography>
            <Tooltip title="ダイジェスト">
              <IconButton
                aria-owns="next"
                role="button"
                aria-haspopup="true"
                color="inherit"
                onClick={() => {
                  navigateWithState(`/${group}/manholes`, {
                    mapState: appState.mapState,
                    tableState: {
                      ascSort,
                      sortKey,
                      filterRule
                    }
                  });
                }}
              >
                <ArrowForward />
              </IconButton>
            </Tooltip>
          </Toolbar>
          <div className={classes.thead}>
            <div className={classes.row}>
              <div className={classes.headerRowHead}>
                <div className={classes.index}>i</div>
                <div className={classes.name}>name</div>
              </div>
              <div className={classes.headerRowBody}>
                {Object.entries(radiusLabels).map((d, index) => (
                  <div
                    key={index}
                    role="button"
                    className={classNames(classes.val, classes.labelCell, { [`${classes.labelCellActive}`]: Radiuses[d[0]] === sortKey })}
                  >
                    <TableSortLabel
                      classes={{
                        root: classes.labelRoot,
                        active: classes.labelActive
                      }}
                      active={Radiuses[d[0]] === sortKey}
                      direction={ascSort ? 'asc' : 'desc'}
                      onClick={() => this._handleSort(Radiuses[d[0]])}
                    >
                      {d[1]}
                    </TableSortLabel>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className={classes.table}
          style={{
            height: height - 140
          }}
        >
          {sortData(edges, { ascSort, sortKey, filterRule }).map((edge, index) => (
            <div key={index} className={classes.row}>
              <div className={classes.rowHead}>
                <div className={classes.index}>{index + 1}</div>
                <div className={classes.name}>
                  <Link
                    to={edge.node.fields.slug}
                    className={classes.link}
                    state={{
                      appState: {
                        mapState: appState.mapState,
                        tableState: {
                          ascSort,
                          sortKey,
                          filterRule
                        }
                      }
                    }}
                  >
                    {edge.node.summary.name}
                  </Link>
                </div>
                <div className={classes.category}>{edge.node.summary.shortname.join(' ')}</div>
              </div>
              <div className={classes.rowBody}>
                <div className={classes.val}>{edge.node.summary.radius1000.toLocaleString()}</div>
                <div className={classes.val}>{edge.node.summary.radius3000.toLocaleString()}</div>
                <div className={classes.val}>{edge.node.summary.radius5000.toLocaleString()}</div>
                <div className={classes.val}>{edge.node.summary.radius10000.toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(RCTable);

// helpers
export function sortData(edges: Edge[], { ascSort, sortKey, filterRule }: TableState): Edge[] {
  const isAsc = ascSort ? 1 : -1;
  const prop: keyof typeof Radiuses = Radiuses[sortKey];

  return filterRule.length
    ? edges
        .filter(edge => edge.node.summary.category.some(category => filterRule.indexOf(category) < 0))
        .sort((a, b) => isAsc * (a.node.summary[prop] - b.node.summary[prop]))
    : edges.sort((a, b) => isAsc * (a.node.summary[prop] - b.node.summary[prop]));
}
