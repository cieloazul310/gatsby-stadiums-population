import * as React from 'react';
import { withPrefix } from 'gatsby';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// icons
import HomeIcon from '@material-ui/icons/Home';
import ListItemAppLink from 'gatsby-theme-aoi/src/components/ListItemAppLink';
import { useLocation } from '@reach/router';
import { TableIcon } from '../../../icons';

function Contents() {
  const { pathname } = useLocation();
  return (
    <List subheader={<ListSubheader>Contents</ListSubheader>} role="menu">
      <ListItemAppLink to="/" button selected={pathname === withPrefix('/')} role="menuitem">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="トップページ" />
      </ListItemAppLink>
      <ListItemAppLink to="/venues" button selected={pathname === withPrefix('/venues')} role="menuitem">
        <ListItemIcon>
          <TableIcon />
        </ListItemIcon>
        <ListItemText primary="表" />
      </ListItemAppLink>
    </List>
  );
}

export default Contents;
