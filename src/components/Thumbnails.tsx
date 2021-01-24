import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Image from 'gatsby-image';
import AppLink from 'gatsby-theme-aoi/src/components/AppLink';
import { useThumbnails } from '../utils/graphql-hooks';
import { Category } from '../types';

interface Props {
  items: ReturnType<typeof useThumbnails>[Category];
}

function Thumbnails({ items }: Props) {
  return (
    <Grid container spacing={2}>
      {items.map(({ name, slug, population_1 }, index) => (
        <Grid item key={slug ?? index} xs={6} sm={4}>
          <AppLink to={`/${slug}`} color="inherit">
            <Image fluid={population_1?.fluid} />
            <Typography variant="body2" paragraph>
              {name}
            </Typography>
          </AppLink>
        </Grid>
      ))}
    </Grid>
  );
}

export default Thumbnails;
