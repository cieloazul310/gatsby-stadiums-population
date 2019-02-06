import * as React from 'react';
import { Link } from 'gatsby';
import Toolbar from '@material-ui/core/Toolbar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Typography from '@material-ui/core/Typography';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { VenueEdge, AppState, TableState } from '../utils/types';

const tableStyles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3
    },
    table: {
      minWidth: 760
    },
    tableWrapper: {
      overflowX: 'auto'
    },
    indexCell: {
      width: '2em',
      padding: '4px 8px 4px 8px'
    },
    nameCell: {
      width: '16em',
      padding: '4px 16px 4px 24px'
    },
    filterMenuWrapper: {
      zIndex: 1
    }
  });

interface Summary {
  name: string;
  club: string;
  category: string;
  shortname: string;
  slug: string;
  radius1000: number;
  radius3000: number;
  radius5000: number;
  radius10000: number;
}

interface Props extends WithStyles<typeof tableStyles> {
  title: string;
  data: Array<VenueEdge>;
  appState: AppState | null;
}

interface State extends TableState {
  readonly menuOpen: boolean;
}

class TableApp extends React.Component<Props, State> {
  private anchorEl: HTMLElement = undefined;
  readonly state: State = this.props.appState
    ? {
        ...this.props.appState.tableState,
        menuOpen: false
      }
    : {
        ascSort: false,
        sortKey: 3,
        menuOpen: false
      };

  private _handleSort = (index: number) => {
    this.setState(prevState => ({
      ascSort: prevState.sortKey === index ? !prevState.ascSort : false,
      sortKey: index
    }));
  };

  public render() {
    const { classes, title, data, appState } = this.props;
    const { ascSort, sortKey, menuOpen } = this.state;
    return (
      <Paper className={classes.root}>
        <Toolbar>
          <div style={{ flex: '0 0 auto' }}>
            <Typography variant="h6">{title}</Typography>
          </div>
          <div style={{ flex: '1 1 100%' }} />
          <div>
            <div>
              <Tooltip title="Filter">
                <IconButton
                  aria-owns={menuOpen ? 'menu-list' : undefined}
                  aria-haspopup="true"
                  buttonRef={node => {
                    this.anchorEl = node;
                  }}
                  onClick={() => {
                    this.setState(prev => ({ menuOpen: !prev.menuOpen }));
                  }}
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
                  <Grow id="menu-list" {...TransitionProps} style={{ transformOrigin: 'right top' }}>
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
                            <MenuItem key={index}>
                              <ListItemIcon>
                                <CheckCircleIcon />
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
            </div>
          </div>
        </Toolbar>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.indexCell} align="right">
                  i
                </TableCell>
                <TableCell className={classes.nameCell}>name</TableCell>
                {['1km', '3km', '5km', '10km'].map((str, index) => (
                  <TableCell key={index} align="right">
                    <TableSortLabel active={index === sortKey} direction={ascSort ? 'asc' : 'desc'} onClick={() => this._handleSort(index)}>
                      {str}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {sortData(data, ascSort, sortKey).map((datum, index) => (
                <TableRow key={index}>
                  <TableCell className={classes.indexCell} component="th" scope="row" align="right">
                    {index + 1}
                  </TableCell>
                  <TableCell className={classes.nameCell} component="th" scope="row">
                    <Link
                      to={`/${datum.node.summary.slug}/`}
                      state={{
                        mapState: appState.mapState || null,
                        tableState: {
                          ascSort,
                          sortKey
                        }
                      }}
                    >
                      {datum.node.summary.name}
                    </Link>
                  </TableCell>
                  <TableCell align="right">{datum.node.summary.radius1000.toLocaleString()}</TableCell>
                  <TableCell align="right">{datum.node.summary.radius3000.toLocaleString()}</TableCell>
                  <TableCell align="right">{datum.node.summary.radius5000.toLocaleString()}</TableCell>
                  <TableCell align="right">{datum.node.summary.radius10000.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Paper>
    );
  }
}

export default withStyles(tableStyles)(TableApp);

// utils

export function sortData(data: Array<{ node: { summary: Summary } }>, ascSort: boolean, sortKey: number) {
  const isAsc = ascSort ? 1 : -1;
  const sortProperty = sortKey === 0 ? 'radius1000' : sortKey === 1 ? 'radius3000' : sortKey === 2 ? 'radius5000' : 'radius10000';

  return data.sort((a, b) => isAsc * (a.node.summary[sortProperty] - b.node.summary[sortProperty]));
}
