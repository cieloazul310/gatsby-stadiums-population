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
      {previous && previous.node ? (
        <ListItemAppLink button to={`/${previous.node?.slug}`}>
          <ListItemIcon>
            <ArrowBackIcon />
          </ListItemIcon>
          <ListItemText primary={previous.node?.name} secondary="previous" />
        </ListItemAppLink>
      ) : null}
      {next && next.node ? (
        <ListItemAppLink button to={`/${next.node?.slug}`}>
          <ListItemIcon>
            <ArrowForwardIcon />
          </ListItemIcon>
          <ListItemText primary={next.node?.name} secondary="next" />
        </ListItemAppLink>
      ) : null}
    </List>
  );
}

export default DrawerNavigation;
