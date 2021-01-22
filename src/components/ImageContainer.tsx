import * as React from 'react';
import Fab from '@material-ui/core/Fab';
import { makeStyles, createStyles, useTheme, Theme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CallMadeIcon from '@material-ui/icons/CallMade';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import { useWindowSize } from '../utils/useWindowSize';
import { useAppState, useDispatch } from '../gatsby-theme-aoi-top-layout/utils/AppStateContext';

interface StylesProps {
  size: number;
}

const useStyles = makeStyles<Theme, StylesProps>((theme) =>
  createStyles({
    root: {
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
    fab: {
      position: 'absolute',
      top: theme.spacing(2),
      right: theme.spacing(2),
    },
  })
);

interface Props {
  children: React.ReactNode;
}

function ImageContainer({ children }: Props) {
  const { fullWidth } = useAppState();
  const dispatch = useDispatch();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  const { width, height } = useWindowSize();
  const maxHeight = height - (mdUp ? 64 : 56);
  const contentWidth = mdUp ? width - 280 : width;
  const classes = useStyles({ size: fullWidth ? contentWidth : Math.min(maxHeight, contentWidth) });
  const _onClick = () => {
    dispatch({ type: 'TOGGLE_FULLWIDTH' });
  };

  return (
    <div className={classes.root}>
      <div className={classes.inner}>{children}</div>
      <div className={classes.fab}>
        {maxHeight < contentWidth ? <Fab onClick={_onClick}>{fullWidth ? <CallReceivedIcon /> : <CallMadeIcon />}</Fab> : null}
      </div>
    </div>
  );
}

export default ImageContainer;
