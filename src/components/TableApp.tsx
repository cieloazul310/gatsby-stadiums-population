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
import Fade from '@material-ui/core/Fade';
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
import data from '../data/stadiums.json';

const tableStyles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3
    },
    table: {
      minWidth: 920
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
    }
  });

interface Props extends WithStyles<typeof tableStyles> {
  title: string;
}

interface State {
  readonly ascSort: boolean;
  readonly sortKey: number;
  readonly menuOpen: boolean;
}

class TableApp extends React.Component<Props, State> {
  readonly state: State = {
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
    let anchorEl = null;
    const { classes, title } = this.props;
    const { ascSort, sortKey, menuOpen } = this.state;
    return (
      <Paper className={classes.root}>
        <Toolbar>
          <div style={{ flex: '0 0 auto' }}>
            <Typography variant="h6">{title}</Typography>
          </div>
          <div style={{ flex: '1 1 100%' }} />
          <div>
            <ClickAwayListener
              onClickAway={() => {
                this.setState({ menuOpen: false });
              }}
            >
              <div>
                <Tooltip title="Filter">
                  <IconButton
                    aria-describedby="filter"
                    aria-label="Filter"
                    onClick={event => {
                      anchorEl = event.currentTarget;
                      this.setState(prev => ({ menuOpen: !prev.menuOpen }));
                    }}
                  >
                    <FilterListIcon />
                  </IconButton>
                </Tooltip>
                <Popper anchorEl={anchorEl} open={menuOpen} id="filter" transition disablePortal placement="bottom-end">
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps}>
                      <Paper>
                        <MenuList>
                          {['J1', 'J2', 'J3', 'JFL', '地域'].map((str, index) => (
                            <MenuItem key={index}>
                              <ListItemIcon>
                                <CheckCircleIcon />
                              </ListItemIcon>
                              <ListItemText inset primary={str} />
                            </MenuItem>
                          ))}
                        </MenuList>
                      </Paper>
                    </Fade>
                  )}
                </Popper>
              </div>
            </ClickAwayListener>
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
                {['500m', '1000m', '1500m', '3000m', '5000m'].map((str, index) => (
                  <TableCell key={index} align="right">
                    <TableSortLabel
                      active={index === sortKey}
                      direction={ascSort ? 'asc' : 'desc'}
                      onClick={() => this._handleSort(index)}
                    />
                    {str}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedFeatures(data.features, ascSort, sortKey).map((feature, index) => (
                <TableRow key={index}>
                  <TableCell className={classes.indexCell} component="th" scope="row" align="right">
                    {index + 1}
                  </TableCell>
                  <TableCell className={classes.nameCell} component="th" scope="row">
                    <Link to={`/${feature.properties.id}/`}>{feature.properties.name}</Link>
                  </TableCell>
                  <TableCell align="right">{feature.properties.radius500.toLocaleString()}</TableCell>
                  <TableCell align="right">{feature.properties.radius1000.toLocaleString()}</TableCell>
                  <TableCell align="right">{feature.properties.radius1500.toLocaleString()}</TableCell>
                  <TableCell align="right">{feature.properties.radius3000.toLocaleString()}</TableCell>
                  <TableCell align="right">{feature.properties.radius5000.toLocaleString()}</TableCell>
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

function sortedFeatures(features: any[], ascSort: boolean, sortKey: number) {
  const isAsc = ascSort ? 1 : -1;
  const sortProperty =
    sortKey === 0 ? 'radius500' : sortKey === 1 ? 'radius1000' : sortKey === 2 ? 'radius1500' : sortKey === 3 ? 'radius3000' : 'radius5000';

  return features.sort((a, b) => isAsc * (a.properties[sortProperty] - b.properties[sortProperty]));
}
