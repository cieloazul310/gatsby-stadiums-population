import { VenuesPopulation } from '../../../graphql-types';

type SortRadius = keyof VenuesPopulation;

export interface AppState {
  visibility: boolean;
  fullWidth: boolean;
  sortAsc: boolean;
  sortRadius: SortRadius;
}

export const initialAppState: AppState = {
  visibility: true,
  fullWidth: false,
  sortAsc: false,
  sortRadius: 'val_10',
};

export type Action =
  | { type: 'TOGGLE_VISIBILITY' }
  | { type: 'TOGGLE_FULLWIDTH' }
  | { type: 'TOGGLE_SORTASC' }
  | { type: 'CHANGE_SORTRADIUS'; sortRadius: SortRadius };

export default function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'TOGGLE_VISIBILITY':
      return {
        ...state,
        visibility: !state.visibility,
      };
    case 'TOGGLE_FULLWIDTH':
      return {
        ...state,
        fullWidth: !state.fullWidth,
      };
    case 'TOGGLE_SORTASC':
      return {
        ...state,
        sortAsc: !state.sortAsc,
      };
    case 'CHANGE_SORTRADIUS':
      return {
        ...state,
        sortAsc: false,
        sortRadius: action.sortRadius,
      };
    default:
      throw new Error();
  }
}
