export interface AppState {
  visibility: boolean;
  fullWidth: boolean;
}

export const initialAppState: AppState = {
  visibility: true,
  fullWidth: false,
};

export type Action = { type: 'TOGGLE_VISIBILITY' } | { type: 'TOGGLE_FULLWIDTH' };

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
    default:
      throw new Error();
  }
}
