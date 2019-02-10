import * as React from 'react';
import { Link } from 'gatsby';
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
// Icons
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RemoveIcon from '@material-ui/icons/Remove';
import FilterListIcon from '@material-ui/icons/FilterList';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import { VenueEdge, AppState, TableState } from '../utils/types';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      fontSize: '80%'
    },
    table: {
      overflowY: 'scroll'
    },
    header: {
      backgroundColor: theme.palette.primary.light,
      position: 'sticky',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: theme.shadows[1]
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
      zIndex: 1
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
    }
  });

interface Props extends WithStyles<typeof styles> {
  data: VenueEdge[];
  width: number;
  height: number;
  appState: AppState;
}

interface State extends TableState {
  readonly menuOpen: boolean;
  readonly sortKey: number;
  readonly filterRule: string[];
}

class RCTable extends React.Component<Props, State> {
  readonly state: State = this.props.appState
    ? {
        ...this.props.appState.tableState,
        menuOpen: false
      }
    : {
        ascSort: false,
        sortKey: 3,
        filterRule: [],
        menuOpen: false
      };
  private anchorEl: HTMLElement;
  private _handleSort = (index: number) => {
    this.setState(prevState => ({
      ascSort: prevState.sortKey === index ? !prevState.ascSort : false,
      sortKey: index
    }));
  };
  private _handleMenuOpen = () => {
    this.setState(prev => ({
      menuOpen: !prev.menuOpen
    }));
  };
  private _handleFilterRule = (str: string) => {
    this.setState(prevState => ({
      filterRule:
        prevState.filterRule.indexOf(str) >= 0 ? prevState.filterRule.filter(filter => filter !== str) : [...prevState.filterRule, str]
    }));
  };
  public render() {
    const { classes, data, width, height, appState } = this.props;
    const { ascSort, sortKey, filterRule, menuOpen } = this.state;
    const items = data;
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
            <Typography className={classes.title} variant="h6">
              スタジアムと距離圏人口
            </Typography>
            <Tooltip title="フィルター">
              <IconButton
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
              placement="bottom-end"
            >
              {({ TransitionProps }) => (
                <Grow {...TransitionProps} style={{ transformOrigin: 'right top' }}>
                  <Paper>
                    <ClickAwayListener
                      onClickAway={event => {
                        if (this.anchorEl.contains(event.target)) {
                          return;
                        }
                        this.setState({ menuOpen: false });
                      }}
                    >
                      <MenuList>
                        {['J1', 'J2', 'J3', 'JFL', '地域', 'その他'].map((str, index) => (
                          <MenuItem
                            key={index}
                            onClick={() => {
                              this._handleFilterRule(str);
                            }}
                          >
                            <ListItemIcon>
                              {filterRule.indexOf(str) < 0 ? <CheckCircleIcon /> : <RemoveIcon color="disabled" />}
                            </ListItemIcon>
                            <ListItemText inset primary={str} />
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Toolbar>
          <div className={classes.thead}>
            <div className={classes.row}>
              <div className={classes.headerRowHead}>
                <div className={classes.index}>i</div>
                <div className={classes.name}>name</div>
              </div>
              <div className={classes.headerRowBody}>
                {['1km', '3km', '5km', '10km'].map((str, index) => (
                  <div key={index} className={classes.val}>
                    <TableSortLabel active={index === sortKey} direction={ascSort ? 'asc' : 'desc'} onClick={() => this._handleSort(index)}>
                      {str}
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
            height: height - 120
          }}
        >
          {sortData(items, ascSort, sortKey, filterRule).map((edge, index) => (
            <div key={index} className={classes.row}>
              <div className={classes.rowHead}>
                <div className={classes.index}>{index + 1}</div>
                <div className={classes.name}>
                  <Link
                    to={`/${edge.node.summary.slug}/`}
                    state={{
                      mapState: appState.mapState || null,
                      tableState: {
                        ascSort,
                        sortKey,
                        filterRule
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
function sortData(data: VenueEdge[], ascSort: boolean, sortKey: number, filterRule: string[]): VenueEdge[] {
  const isAsc = ascSort ? 1 : -1;
  const prop = sortKey === 0 ? 'radius1000' : sortKey === 1 ? 'radius3000' : sortKey === 2 ? 'radius5000' : 'radius10000';

  return filterRule.length
    ? data
        .filter(edge => edge.node.summary.category.some(category => filterRule.indexOf(category) < 0))
        .sort((a, b) => isAsc * (a.node.summary[prop] - b.node.summary[prop]))
    : data.sort((a, b) => isAsc * (a.node.summary[prop] - b.node.summary[prop]));
}
