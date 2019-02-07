import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Buffer } from '../utils/types';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {}
  });

interface Props extends WithStyles<typeof styles> {
  buffers: Buffer[];
}

const ValuesTable: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Paper className={props.classes.root}>
      <Table>
        {/*
        <TableHead>
          <TableRow>
            <TableCell>1km</TableCell>
            <TableCell>3km</TableCell>
            <TableCell>5km</TableCell>
            <TableCell>10km</TableCell>
          </TableRow>
      </TableHead>*/}
        <TableBody>
          <TableRow>
            <TableCell>1km</TableCell>
            <TableCell>val</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1km</TableCell>
            <TableCell>val</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1km</TableCell>
            <TableCell>val</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1km</TableCell>
            <TableCell>val</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

export default withStyles(styles)(ValuesTable);
