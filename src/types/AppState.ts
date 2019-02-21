import { LocationProps } from '@reach/router';
import { navigate } from 'gatsby';
import { Radiuses } from './Radiuses';

export interface AppState {
  mapState: MapState;
  tableState: TableState;
}

export type StateObject = {
  key: string;
  appState: AppState;
} | null;

export interface LocationWithState extends LocationProps {
  state: StateObject;
}

export interface TableState {
  readonly ascSort: boolean;
  readonly sortKey: Radiuses;
  readonly filterRule: string[];
}

export interface MapState {
  readonly popVisibility: boolean;
  readonly bufferVisibility: boolean;
  readonly zoomLevel: Radiuses;
  readonly terrain: boolean;
}

export const navigateWithState = (to: string, state: AppState) => {
  navigate(to, { state });
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
