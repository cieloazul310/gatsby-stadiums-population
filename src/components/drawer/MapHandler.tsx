import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Hidden from '@material-ui/core/Hidden';
import Switch from '@material-ui/core/Switch';
import { MapState } from '../../utils/types';

// Icons
import ZoomIn from '@material-ui/icons/ZoomIn';
import ZoomOut from '@material-ui/icons/ZoomOut';
import LandScape from '@material-ui/icons/LandScape';
import PeopleIcon from '@material-ui/icons/People';
import Adjust from '@material-ui/icons/Adjust';

interface Props {
  mapState: MapState;
  handleZoomIn: () => any;
  handleZoomOut: () => any;
  handleTerrain: () => any;
  handlePopVisibility: () => any;
  handleBufferVisibility: () => any;
}

const MapHandler: React.FunctionComponent<Props> = ({
  mapState,
  handleZoomIn,
  handleZoomOut,
  handleTerrain,
  handlePopVisibility,
  handleBufferVisibility
}: Props) => (
  <List subheader={<ListSubheader>地図</ListSubheader>}>
    <Hidden smDown implementation="css">
      <ListItem button selected={mapState.zoomLevel === 0} onClick={handleZoomIn}>
        <ListItemIcon>
          <ZoomIn />
        </ListItemIcon>
        <ListItemText>地図を拡大</ListItemText>
      </ListItem>
      <ListItem button selected={mapState.zoomLevel === 3} onClick={handleZoomOut}>
        <ListItemIcon>
          <ZoomOut />
        </ListItemIcon>
        <ListItemText primary="地図を縮小" />
      </ListItem>
    </Hidden>
    <ListItem button>
      <ListItemIcon>
        <LandScape />
      </ListItemIcon>
      <ListItemText primary="地形モード" />
      <ListItemSecondaryAction>
        <Switch onChange={handleTerrain} checked={mapState.terrain} />
      </ListItemSecondaryAction>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="人口" />
      <ListItemSecondaryAction>
        <Switch onChange={handlePopVisibility} checked={mapState.popVisibility} />
      </ListItemSecondaryAction>
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <Adjust />
      </ListItemIcon>
      <ListItemText primary="距離円" />
      <ListItemSecondaryAction>
        <Switch onChange={handleBufferVisibility} checked={mapState.bufferVisibility} />
      </ListItemSecondaryAction>
    </ListItem>
  </List>
);

export default MapHandler;
