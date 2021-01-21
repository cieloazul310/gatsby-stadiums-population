import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ListItemAppLink from 'gatsby-theme-aoi/src/components/ListItemAppLink';
import { SitePageContext } from '../../graphql-types';

interface Props {
  pageContext: SitePageContext;
}

function DrawerNavigation({ pageContext }: Props) {
  const { previous, next } = pageContext;
  return (
    <List subheader={<ListSubheader>Navigation</ListSubheader>}>
      {previous && previous.slug ? (
        <ListItemAppLink button to={`/${previous.slug}`}>
          <ListItemIcon>
            <ArrowBackIcon />
          </ListItemIcon>
          <ListItemText primary={previous.name} secondary="previous" />
        </ListItemAppLink>
      ) : null}
      {next && next.slug ? (
        <ListItemAppLink button to={`/${next.slug}`}>
          <ListItemIcon>
            <ArrowForwardIcon />
          </ListItemIcon>
          <ListItemText primary={next.name} secondary="next" />
        </ListItemAppLink>
      ) : null}
    </List>
  );
}

export default DrawerNavigation;
