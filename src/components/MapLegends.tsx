import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { sizeScale, colorScale } from './MeshFeature';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    legends: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end'
    },
    legendItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: '80%',
      padding: theme.spacing(1)
    }
  })
);

function MapLegends() {
  const classes = useStyles({});
  return (
    <div className={classes.root}>
      <div className={classes.legends}>
        {[100, 250, 500, 750, 1000, 1500, 2000].map(val => {
          const size = sizeScale(val) * 2;
          const color = colorScale(val);
          return (
            <div className={classes.legendItem} key={val}>
              <svg width={30} height={30}>
                <rect x={15 - size / 2} y={15 - size / 2} width={size} height={size} fill={color} fillOpacity={1} />
              </svg>
              <Typography variant="caption">{val}</Typography>
            </div>
          );
        })}
      </div>
      <Typography variant="caption">1メッシュ(約250m四方)に含まれる人口</Typography>
    </div>
  );
}

export default MapLegends;
