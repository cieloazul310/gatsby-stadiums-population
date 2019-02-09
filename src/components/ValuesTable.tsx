import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { Summary } from '../utils/types';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {},
    thead: {
      padding: theme.spacing.unit * 2
    }
  });

interface Props extends WithStyles<typeof styles> {
  summary: Summary;
}

const ValuesTable: React.FunctionComponent<Props> = (props: Props) => {
  const { classes, summary } = props;
  const { club, category, radius1000, radius3000, radius5000, radius10000 } = summary;

  return (
    <div className={classes.root}>
      <div className={classes.thead}>
        <Typography variant="caption">クラブ: {club.join(', ')}</Typography>
        <Typography variant="caption">カテゴリー: {category.join(', ')}</Typography>
      </div>
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

export default withStyles(styles)(ValuesTable);
