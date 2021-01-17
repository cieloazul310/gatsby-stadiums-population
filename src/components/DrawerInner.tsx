import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
    },
    toolbar: theme.mixins.toolbar,
  })
);

interface Props {
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

function DrawerInner({ group, appState, datum, edges, handleDrawerToggle, ...mapHandler }: Props) {
  const classes = useStyles({});
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
}

export default DrawerInner;
