import * as React from 'react';
import clsx from 'clsx';
import Image from 'gatsby-image';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useAppState, useDispatch } from 'gatsby-theme-aoi-top-layout/src/utils/AppStateContext';
import { VenueQuery } from '../../graphql-types';

interface Props {
  images: VenueQuery['allFile']['nodes'];
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      cursor: 'pointer',
      position: 'relative',
      paddingTop: '100%',
    },
    layer: {
      top: 0,
      left: 0,
      width: '100%',
      opacity: 1,
      transition: theme.transitions.create('opacity'),
    },
    invisible: {
      opacity: 0,
    },
  })
);

function Images({ images }: Props) {
  const classes = useStyles();
  const state = useAppState();
  const dispatch = useDispatch();
  const _onClick = () => {
    dispatch({ type: 'TOGGLE_VISIBILITY' });
  };
  return (
    <div className={classes.root} onClick={_onClick}>
      <Image className={classes.layer} style={{ position: 'absolute' }} fluid={images[0].childImageSharp?.fluid} />
      <Image
        className={clsx(classes.layer, { [classes.invisible]: !state.visibility })}
        style={{ position: 'absolute' }}
        fluid={images[1].childImageSharp?.fluid}
      />
      {/*<div className={clsx(classes.layer, { [classes.invisible]: !state.visibility })}>
        <Image fluid={images[1].childImageSharp?.fluid} />
      </div>
      <div className={clsx(classes.layer, { [classes.invisible]: state.visibility })}>
        <Image fluid={images[0].childImageSharp?.fluid} />
  </div>*/}
    </div>
  );
}

export default Images;
