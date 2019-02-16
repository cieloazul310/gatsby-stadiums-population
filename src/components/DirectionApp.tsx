import * as React from 'react';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import Pie from '../components/Pie';
import DirectionTable from '../components/DirectionTable';
import { BufferProperties, Radiuses, directions, Directions } from '../utils/types';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column'
      }
    },
    pieContainer: {
      border: '1px solid #ccc',
      padding: theme.spacing.unit,
      display: 'flex',
      alignContent: 'center',
      [theme.breakpoints.down('xs')]: {
        width: '100%'
      }
    },
    tableContainer: {
      border: '1px solid #ccc',
      flex: 1,
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
    //console.log(getItemsDiff(data));
    return (
      <div className={classes.root}>
        <div className={classes.pieContainer}>
          <Pie item={data} width={320} />
        </div>
        <div className={classes.tableContainer}>
          <DirectionTable direction={getItemsDiff(data)} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DirectionApp);

// helpers
type DirectionObj = {
  [key in keyof typeof Directions]: Array<{
    radius: keyof typeof Radiuses;
    population: number;
    diff: number;
  }>
};

function getItemsDiff(items: Array<{ properties: BufferProperties }>): DirectionObj {
  const obj: any = {};
  directions.forEach(direction => {
    obj[direction] = items.map((item, index, arr) => ({
      radius: item.properties.radius,
      population: item.properties[direction],
      diff: index === 0 ? item.properties[direction] : item.properties[direction] - arr[index - 1].properties[direction]
    }));
  });
  return obj;
}
