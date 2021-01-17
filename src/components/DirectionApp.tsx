import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Pie from './Pie';
import DirectionTable from './DirectionTable';
import { BufferProps, Radiuses, directions, Directions } from '../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    pieContainer: {
      border: '1px solid #ccc',
      padding: theme.spacing(1),
      display: 'flex',
      alignContent: 'center',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    tableContainer: {
      border: '1px solid #ccc',
      flex: 1,
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
  })
);

interface Props {
  data: Array<{ properties: BufferProps }>;
}

function DirectionApp({ data }: Props) {
  const classes = useStyles({});

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

export default DirectionApp;

// helpers
type DirectionObj = {
  [key in keyof typeof Directions]: Array<{
    radius: keyof typeof Radiuses;
    population: number;
    diff: number;
  }>;
};

function getItemsDiff(items: Array<{ properties: BufferProperties }>): DirectionObj {
  const obj: any = {};
  directions.forEach((direction) => {
    obj[direction] = items.map((item, index, arr) => ({
      radius: item.properties.radius,
      population: item.properties[direction],
      diff: index === 0 ? item.properties[direction] : item.properties[direction] - arr[index - 1].properties[direction],
    }));
  });
  return obj;
}
