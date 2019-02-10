import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TwitterIcon from '../fa-buttons/TwitterIcon';
import FacebookIcon from '../fa-buttons/FacebookIcon';
import { Summary } from '../../utils/types';

interface Props {
  summary: Summary;
}

const SharesList: React.FunctionComponent<Props> = ({ summary }: Props) => (
  <List subheader={<ListSubheader>シェア</ListSubheader>}>
    <ListItem button component="a" href={createTwiterShareUrl(summary)} target="_blank" rel="noopener noreferrer">
      <ListItemIcon>
        <TwitterIcon />
      </ListItemIcon>
      <ListItemText primary="Twitterで共有" />
    </ListItem>
    <ListItem button component="a" href={createFbShareUrl(summary)} target="_blank" rel="noopener noreferrer">
      <ListItemIcon>
        <FacebookIcon />
      </ListItemIcon>
      <ListItemText primary="Facebookで共有" />
    </ListItem>
  </List>
);

export default SharesList;

// helpers
function createTwiterShareUrl(summary: Summary): string {
  return (
    `https://twitter.com/intent/tweet?text=` +
    encodeURI(`${summary.name}周辺の人口`) +
    `&url=` +
    encodeURIComponent(`https://cieloazul310.github.io/gatsby-stadiums-population/${summary.slug}/`)
  );
}

function createFbShareUrl(summary: Summary): string {
  return (
    `https://www.facebook.com/sharer/sharer.php?u=` +
    encodeURIComponent(`https://cieloazul310.github.io/gatsby-stadiums-population/${summary.slug}/`)
  );
}
