import * as React from 'react';
import Fab from '@material-ui/core/Fab';
import { makeStyles, createStyles, useTheme, Theme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CallMadeIcon from '@material-ui/icons/CallMade';
import Tooltip from '@material-ui/core/Tooltip';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import BlurOffIcon from '@material-ui/icons/BlurOff';
import { useWindowSize } from '../utils/useWindowSize';
import { useAppState, useDispatch } from '../gatsby-theme-aoi-top-layout/utils/AppStateContext';

interface StylesProps {
  size: number;
}

const useStyles = makeStyles<Theme, StylesProps>((theme) =>
  createStyles({
    root: {
      background: theme.palette.background.paper,
      display: 'flex',
      justifyContent: 'center',
      height: ({ size }) => size,
      position: 'relative',
      transition: theme.transitions.create('height'),
    },
    inner: {
      width: ({ size }) => size,
      height: ({ size }) => size,
      transition: theme.transitions.create(['width', 'height']),
    },
    fabLayer: {
      position: 'absolute',
      top: 0,
      right: 0,
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(1),
    },
    fab: {
      padding: theme.spacing(1),
    },
  })
);

interface Props {
  children: React.ReactNode;
}

function ImageContainer({ children }: Props) {
  const { fullWidth, visibility } = useAppState();
  const dispatch = useDispatch();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  const { width, height } = useWindowSize();
  const maxHeight = height - (mdUp ? 64 : 56);
  const contentWidth = mdUp ? width - 280 : width;
  const classes = useStyles({ size: fullWidth ? contentWidth : Math.min(maxHeight, contentWidth) });
  const _toggleFullWidth = () => {
    dispatch({ type: 'TOGGLE_FULLWIDTH' });
  };
  const _toggleVisibility = () => {
    dispatch({ type: 'TOGGLE_VISIBILITY' });
  };

  return (
    <div className={classes.root}>
      <div className={classes.inner}>{children}</div>
      <div className={classes.fabLayer}>
        {maxHeight < contentWidth ? (
          <div className={classes.fab}>
            <Tooltip title={fullWidth ? '縮小' : '拡大'}>
              <Fab onClick={_toggleFullWidth}>{fullWidth ? <CallReceivedIcon /> : <CallMadeIcon />}</Fab>
            </Tooltip>
          </div>
        ) : null}
        <div className={classes.fab}>
          <Tooltip title={visibility ? '人口を非表示' : '人口を表示'}>
            <Fab onClick={_toggleVisibility}>{visibility ? <BlurOnIcon /> : <BlurOffIcon />}</Fab>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default ImageContainer;
