import * as React from 'react';
import { Link } from 'gatsby';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Typography from '@material-ui/core/Typography';
//import Grid from "@material-ui/core/Grid";
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Layout from '../layouts/Layout';

import withRoot from '../utils/withRoot';
import data from '../data/stadiums.json';
import { Toolbar } from '@material-ui/core';

const styles = (theme: Theme): object => ({
  root: {
    textAlign: 'center',
    width: '100%',
    padding: '1em'
  }
});

console.log(data);
/*
const SortIcon = (props: {isSelected: boolean, isAsc: boolean}) => props.isSelected ? (
  <div></div>
) : null;
*/
interface State {
  ascSort: boolean;
  sortKey: number;
}

class TableApp extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      ascSort: false,
      sortKey: 3
    };
    this._handleSort = this._handleSort.bind(this);
  }

  _handleSort(index: number) {
    this.setState(prev => {
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
    const { ascSort, sortKey } = this.state;
    return (
      <Paper>
        <Toolbar>
          <div>
            <Typography variant="h6">スタジアムと距離圏人口</Typography>
          </div>
        </Toolbar>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>i</TableCell>
              <TableCell>name</TableCell>
              {['500m', '1500m', '3000m', '5000m'].map((str, index) => (
                <TableCell key={index} align="right">
                  <TableSortLabel active={index === sortKey} direction={ascSort ? 'asc' : 'desc'} onClick={() => this._handleSort(index)} />
                  {str}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedFeatures(data.features, ascSort, sortKey).map((feature, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row" align="right">
                  {index + 1}
                </TableCell>
                <TableCell component="th" scope="row">
                  {feature.properties.name}
                </TableCell>
                <TableCell align="right">{feature.properties.radius500}</TableCell>
                <TableCell align="right">{feature.properties.radius1500}</TableCell>
                <TableCell align="right">{feature.properties.radius3000}</TableCell>
                <TableCell align="right">{feature.properties.radius5000}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

const IndexPage = (props: WithStyles) => (
  <Layout className={props.classes.root}>
    <Typography variant="h1">Hello, World!</Typography>
    <Link to="/page-2/">Go to page 2</Link>
    <Button
      onClick={() => {
        console.log('Pushed!');
      }}
      color="primary"
    >
      Push!
    </Button>
    <TableApp />
  </Layout>
);

export default withRoot(withStyles(styles)(IndexPage));

// utils

function sortedFeatures(features: any[], ascSort: boolean, sortKey: number) {
  const isAsc = ascSort ? 1 : -1;
  const sortProperty = sortKey === 0 ? 'radius500' : sortKey === 1 ? 'radius1500' : sortKey === 2 ? 'radius3000' : 'radius5000';

  return features.sort((a, b) => isAsc * (a.properties[sortProperty] - b.properties[sortProperty]));
}
