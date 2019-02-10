import * as React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import { navigateWithState, VenueEdge, AppState, TableState } from '../../utils/types';

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
  edges: VenueEdge[];
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
          navigateWithState(`/${edge.node.summary.slug}/`, appState);
        }}
      >
        <ListItemText
          primary={<Typography className={classes.itemTitle}>{edge.node.summary.name}</Typography>}
          secondary={
            <Typography component="span" className={classes.itemNumber}>
              {edge.node.summary[sortKeyToProps(appState.tableState)].toLocaleString()}
            </Typography>
          }
        />
      </ListItem>
    ))}
  </List>
);

export default withStyles(styles)(DrawerTable);

// helpers
function sortKeyToProps(tableState: TableState) {
  return tableState.sortKey === 0
    ? 'radius1000'
    : tableState.sortKey === 1
    ? 'radius3000'
    : tableState.sortKey === 2
    ? 'radius5000'
    : 'radius10000';
}

function createSortString(tableState: TableState): string {
  const { ascSort, sortKey } = tableState;
  const sortRule = ascSort ? '昇順' : '降順';
  const sortLabel = ['1km', '3km', '5km', '10km'][sortKey];

  return `${sortLabel}圏人口 ${sortRule}`;
}
