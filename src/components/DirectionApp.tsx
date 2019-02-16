import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import Pie from '../components/Pie';
import { BufferProperties } from '../utils/types';
import { AutoSizer } from 'react-virtualized';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column'
      }
    },
    container: {
      width: '50%',
      border: '1px solid #ccc',
      [theme.breakpoints.down('xs')]: {
        width: '100%'
      }
    }
  });

interface Props extends WithStyles<typeof styles> {
  data: Array<{ properties: BufferProperties }>;
}

interface State {}

class DirectionApp extends React.Component<Props, State> {
  public render() {
    const { classes, data } = this.props;
    console.log(data);
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <AutoSizer disableHeight>{({ width }) => <Pie item={data} width={width} />}</AutoSizer>
        </div>
        <div className={classes.container} />
      </div>
    );
  }
}

export default withStyles(styles)(DirectionApp);
