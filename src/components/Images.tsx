import * as React from 'react';
import clsx from 'clsx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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
      <a href={images[visibility ? 1 : 0].childImageSharp?.original?.src ?? '#'} target="_blank" rel="noopener noreferrer">
        <GatsbyImage
          image={images[0]?.childImageSharp?.gatsbyImageData}
          className={classes.layer}
          style={{ position: 'absolute' }}
          alt="population"
        />
        <GatsbyImage
          image={images[1]?.childImageSharp?.gatsbyImageData}
          className={clsx(classes.layer, { [classes.invisible]: !visibility })}
          style={{ position: 'absolute' }}
          alt="background"
        />
      </a>
    </div>
  );
}

export default Images;
