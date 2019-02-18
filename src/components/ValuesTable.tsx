import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Summary } from '../utils/types';

interface Props {
  summary: Summary;
}

const ValuesTable: React.FunctionComponent<Props> = (props: Props) => {
  const { summary } = props;
  const { radius1000, radius3000, radius5000, radius10000 } = summary;

  return (
    <div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell align="right">1km圏</TableCell>
            <TableCell align="right">{radius1000.toLocaleString()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">3km圏</TableCell>
            <TableCell align="right">{radius3000.toLocaleString()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">5km圏</TableCell>
            <TableCell align="right">{radius5000.toLocaleString()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">10km圏</TableCell>
            <TableCell align="right">{radius10000.toLocaleString()}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ValuesTable;
