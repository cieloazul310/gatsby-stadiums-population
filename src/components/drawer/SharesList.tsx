import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TwitterIcon from '../fa-buttons/TwitterIcon';
import FacebookIcon from '../fa-buttons/FacebookIcon';
import { Data } from '../../types';

interface Props {
  datum: Data;
}

const SharesList: React.FunctionComponent<Props> = ({ datum }: Props) => (
  <List subheader={<ListSubheader>シェア</ListSubheader>}>
    <ListItem button component="a" href={createTwiterShareUrl(datum)} target="_blank" rel="noopener noreferrer">
      <ListItemIcon>
        <TwitterIcon />
      </ListItemIcon>
      <ListItemText primary="Twitterで共有" />
    </ListItem>
    <ListItem button component="a" href={createFbShareUrl(datum)} target="_blank" rel="noopener noreferrer">
      <ListItemIcon>
        <FacebookIcon />
      </ListItemIcon>
      <ListItemText primary="Facebookで共有" />
    </ListItem>
  </List>
);

export default SharesList;

// helpers
function createTwiterShareUrl(datum: Data): string {
  return (
    `https://twitter.com/intent/tweet?text=` +
    encodeURI(`${datum.summary.name}周辺の人口`) +
    `&url=` +
    encodeURIComponent(`https://cieloazul310.github.io/gatsby-stadiums-population${datum.fields.slug}`)
  );
}

function createFbShareUrl(datum: Data): string {
  return (
    `https://www.facebook.com/sharer/sharer.php?u=` +
    encodeURIComponent(`https://cieloazul310.github.io/gatsby-stadiums-population${datum.fields.slug}`)
  );
}
