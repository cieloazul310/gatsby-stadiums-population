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
import Button from '@material-ui/core/Button';
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
//import Grid from "@material-ui/core/Grid";
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import Layout from '../layouts/Layout';

import withRoot from '../utils/withRoot';
import data from '../data/stadiums.json';

const styles = (theme: Theme): object => ({
  root: {
    textAlign: 'center',
    width: '100%',
    padding: '1em'
  }
});

console.log(data);

const tableStyles = (theme: Theme): object => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 800
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

interface State {
  ascSort: boolean;
  sortKey: number;
  menuOpen: boolean;
}

class TableApp extends React.Component<{ classes? }, State> {
  constructor(props: { classes? }) {
    super(props);
    this.state = {
      ascSort: false,
      sortKey: 3,
      menuOpen: false
    };
    this._handleSort = this._handleSort.bind(this);
  }

  _handleSort(index: number) {
    this.setState((prev: State) => {
      if (prev.sortKey === index) {
        return {
          ascSort: !prev.ascSort
        };
      } else {
        return {
          ascSort: false,
          sortKey: index
        };
      }
    });
  }

  public render() {
    let anchorEl = null;
    const { classes } = this.props;
    const { ascSort, sortKey, menuOpen } = this.state;
    return (
      <Paper className={classes.root}>
        <Toolbar>
          <div style={{ flex: '0 0 auto' }}>
            <Typography variant="h6">スタジアムと距離圏人口</Typography>
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
                    onClick={() => {
                      this.setState(prev => ({ menuOpen: !prev.menuOpen }));
                    }}
                    buttonRef={node => {
                      anchorEl = node;
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
                    {feature.properties.name}
                  </TableCell>
                  <TableCell align="right">{feature.properties.radius500}</TableCell>
                  <TableCell align="right">{feature.properties.radius1000}</TableCell>
                  <TableCell align="right">{feature.properties.radius1500}</TableCell>
                  <TableCell align="right">{feature.properties.radius3000}</TableCell>
                  <TableCell align="right">{feature.properties.radius5000}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Paper>
    );
  }
}

const EnhancedTableApp = withStyles(tableStyles)(TableApp);

const IndexPage = (props: WithStyles) => (
  <Layout className={props.classes.root}>
    <Typography variant="body1">
      <Link to="/page-2/">Go to page 2</Link>
    </Typography>
    <Button
      onClick={() => {
        console.log('Pushed!');
      }}
      color="primary"
    >
      Push!
    </Button>
    <EnhancedTableApp />
  </Layout>
);

export default withRoot(withStyles(styles)(IndexPage));

// utils

function sortedFeatures(features: any[], ascSort: boolean, sortKey: number) {
  const isAsc = ascSort ? 1 : -1;
  const sortProperty = sortKey === 0 ? 'radius500' : sortKey === 1 ? 'radius1500' : sortKey === 2 ? 'radius3000' : 'radius5000';

  return features.sort((a, b) => isAsc * (a.properties[sortProperty] - b.properties[sortProperty]));
}
