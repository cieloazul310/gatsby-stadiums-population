import * as React from 'react';
//import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { DirectionObj, directionToKanji } from '../types';

const styles = createStyles({
  root: {
    width: '100%',
    maxWidth: '100%'
  },
  tableWrapper: {
    width: '100%',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    overflowScrolling: 'touch',
    WebkitOverflowScrolling: 'touch'
  }
});

interface Props extends WithStyles<typeof styles> {
  selected?: string;
  directionObject: DirectionObj;
}

const DirectionTable: React.FC<Props> = ({ classes, directionObject }: Props) => (
  <div className={classes.root}>
    <div className={classes.tableWrapper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>方角</TableCell>
            <TableCell align="right">1km以内</TableCell>
            <TableCell align="right">1km - 3km</TableCell>
            <TableCell align="right">3km - 5km</TableCell>
            <TableCell align="right">5km - 10km</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(directionObject).map((d, i) => (
            <TableRow key={i}>
              <TableCell align="center">{directionToKanji(d[0])}</TableCell>
              {d[1].map((v, index) => (
                <TableCell key={index} align="right">
                  {v.diff.toLocaleString()}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
);

export default withStyles(styles)(DirectionTable);
