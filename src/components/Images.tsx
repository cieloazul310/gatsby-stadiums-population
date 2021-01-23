import * as React from 'react';
import { withPrefix } from 'gatsby';
import clsx from 'clsx';
import Image from 'gatsby-image';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useAppState } from '../gatsby-theme-aoi-top-layout/utils/AppStateContext';
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
      pointerEvents: 'none',
    },
  })
);

function Images({ images }: Props) {
  const classes = useStyles();
  const { visibility } = useAppState();
  return (
    <div className={classes.root}>
      <a href={withPrefix(images[visibility ? 1 : 0].childImageSharp?.original?.src ?? '#')} target="_blank" rel="noopener noreferrer">
        <Image className={classes.layer} style={{ position: 'absolute' }} fluid={images[0].childImageSharp?.fluid} />
        <Image
          className={clsx(classes.layer, { [classes.invisible]: !visibility })}
          style={{ position: 'absolute' }}
          fluid={images[1].childImageSharp?.fluid}
        />
      </a>
    </div>
  );
}

export default Images;
