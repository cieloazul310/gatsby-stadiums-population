// FIXME: enum[enum.key] error

import * as React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import { navigateWithState, Edge, AppState, TableState, Radiuses, radiusLabels } from '../../types';

const styles: StyleRules = createStyles({
  root: {},
  itemTitle: {
    fontSize: '80%',
    fontWeight: 'bold'
  },
  itemNumber: {
    textAlign: 'right'
  }
});

interface Props extends WithStyles<typeof styles> {
  slug: string;
  edges: Edge[];
  appState: AppState;
}

const DrawerTable: React.FC<Props> = ({ classes, slug, edges, appState }: Props) => (
  <List className={classes.root} subheader={<ListSubheader>{`一覧 ${createSortString(appState.tableState)}`}</ListSubheader>}>
    {edges.map(edge => (
      <ListItem
        key={edge.node.summary.slug}
        button
        selected={edge.node.summary.slug === slug}
        onClick={() => {
          navigateWithState(edge.node.fields.slug, appState);
        }}
      >
        <ListItemText
          primary={<Typography className={classes.itemTitle}>{edge.node.summary.name}</Typography>}
          secondary={
            <Typography component="span" className={classes.itemNumber}>
              {edge.node.summary[Radiuses[appState.tableState.sortKey]].toLocaleString()}
            </Typography>
          }
        />
      </ListItem>
    ))}
  </List>
);

export default withStyles(styles)(DrawerTable);

// helpers
function createSortString({ ascSort, sortKey }: TableState): string {
  const sortRule = ascSort ? '昇順' : '降順';
  const sortLabel = radiusLabels[Radiuses[sortKey]];

  return `${sortLabel}圏人口 ${sortRule}`;
}
