import { LocationProps } from '@reach/router';
import { navigate } from 'gatsby';
import { Radiuses } from './Radiuses';
import { Categories } from './Categories';

export interface AppState {
  mapState: MapState;
  tableState: TableState;
}

export type StateObject =
  | {
      key: string;
      appState: AppState;
    }
  | null
  | undefined;

export interface LocationWithState extends LocationProps {
  state: StateObject;
}

export interface TableState {
  readonly ascSort: boolean;
  readonly sortKey: Radiuses;
  readonly filterRule: Categories[];
}

export interface MapState {
  readonly popVisibility: boolean;
  readonly bufferVisibility: boolean;
  readonly zoomLevel: Radiuses;
  readonly terrain: boolean;
}

export const navigateWithState = (to: string, appState: AppState) => {
  navigate(to, { state: { appState } });
};

export const initialTableState: TableState = {
  ascSort: false,
  sortKey: Radiuses.radius10000,
  filterRule: []
};

export const initialMapState: MapState = {
  popVisibility: true,
  bufferVisibility: true,
  zoomLevel: Radiuses.radius10000,
  terrain: false
};

export const initialAppState: AppState = {
  tableState: initialTableState,
  mapState: initialMapState
};

export const createInitialAppState = (location: LocationWithState): AppState => {
  if (location.state === null || location.state === undefined) return initialAppState;
  else if (location.state.appState === undefined) return initialAppState;
  else return location.state.appState;
};
