import * as React from 'react';
import { navigate } from 'gatsby';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';

// Drawer Components
import MapHandler from './drawer/MapHandler';
import SharesList from './drawer/SharesList';
import DrawerTable from './drawer/DrawerTable';

// Icons
import Clear from '@material-ui/icons/Clear';
import Reply from '@material-ui/icons/Reply';

import ValuesTable from '../components/ValuesTable';
import { Summary, AppState, Edge, Group, navigateWithState } from '../types';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    toolbar: theme.mixins.toolbar
  });

interface Props extends WithStyles<typeof styles> {
  summary: Summary;
  appState: AppState;
  edges: Edge[];
  group: Group;
  handleDrawerToggle: () => any;
  handleZoomIn: () => any;
  handleZoomOut: () => any;
  handleTerrain: () => any;
  handlePopVisibility: () => any;
  handleBufferVisibility: () => any;
}

const DrawerInner: React.FunctionComponent<Props> = ({
  classes,
  summary,
  group,
  appState,
  edges,
  handleDrawerToggle,
  ...mapHandler
}: Props) => {
  const { mapState } = appState;

  const DrawerToolBar = () => (
    <div>
      <List>
        <Hidden mdUp implementation="css">
          <ListItem button onClick={handleDrawerToggle}>
            <ListItemIcon>
              <Clear />
            </ListItemIcon>
            <ListItemText primary="閉じる" />
          </ListItem>
        </Hidden>
        <ListItem
          button
          onClick={() => {
            navigateWithState(`/${group}`, appState);
          }}
        >
          <ListItemIcon>
            <Reply />
          </ListItemIcon>
          <ListItemText>表に戻る</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <DrawerToolBar />
      <ValuesTable summary={summary} />
      <MapHandler mapState={mapState} {...mapHandler} />
      <Divider />
      <SharesList summary={summary} />
      <Divider />
      <DrawerTable slug={summary.slug} edges={edges} appState={appState} />
    </div>
  );
};

export default withStyles(styles)(DrawerInner);
