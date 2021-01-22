import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { valToStr } from '../utils/valToStr';
import { VenueQuery } from '../../graphql-types';

interface Props {
  venues: VenueQuery['venues'];
}

function DrawerTable({ venues }: Props) {
  const population = venues?.population;
  return population ? (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell component="th">半径</TableCell>
            <TableCell component="th">人口</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="right" component="th">
              1km
            </TableCell>
            <TableCell align="right">{valToStr(population.val_1)}人</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right" component="th">
              3km
            </TableCell>
            <TableCell align="right">{valToStr(population.val_3)}人</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right" component="th">
              5km
            </TableCell>
            <TableCell align="right">{valToStr(population.val_5)}人</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right" component="th">
              10km
            </TableCell>
            <TableCell align="right">{valToStr(population.val_10)}人</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ) : null;
}

export default DrawerTable;
