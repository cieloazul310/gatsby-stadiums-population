import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAppLink from 'gatsby-theme-aoi/src/components/ListItemAppLink';
import { useAllVenues } from '../utils/graphql-hooks';
import { UseAllVenuesQuery } from '../../graphql-types';

interface Props {
  category: string | keyof UseAllVenuesQuery;
}

function VenuesList({ category }: Props) {
  const data = useAllVenues();
  if (!isCategory(category)) return null;
  const { edges } = data[category];

  return (
    <List subheader={<ListSubheader>{category}</ListSubheader>}>
      {edges
        .sort((a, b) => (b.node.population?.val_10 ?? 0) - (a.node.population?.val_10 ?? 0))
        .map(({ node }) => (
          <ListItemAppLink key={node.slug} button to={`/${node.slug}`}>
            <ListItemText primary={node.name} />
          </ListItemAppLink>
        ))}
    </List>
  );
}

export default VenuesList;

function isCategory(str: string | keyof UseAllVenuesQuery): str is keyof UseAllVenuesQuery {
  if (!['J1', 'J2', 'J3', 'JFL'].includes(str)) return false;
  return true;
}
