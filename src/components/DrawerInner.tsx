import * as React from 'react';
//import { navigate } from 'gatsby';
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
import { Data, AppState, Edge, Group, navigateWithState } from '../types';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      height: '100%'
    },
    toolbar: theme.mixins.toolbar
  });

interface Props extends WithStyles<typeof styles> {
  datum: Data;
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
  group,
  appState,
  datum,
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
      <ValuesTable summary={datum.summary} />
      <MapHandler mapState={mapState} {...mapHandler} />
      <Divider />
      <SharesList datum={datum} />
      <Divider />
      <DrawerTable slug={datum.summary.slug} edges={edges} appState={appState} />
    </div>
  );
};

export default withStyles(styles)(DrawerInner);
