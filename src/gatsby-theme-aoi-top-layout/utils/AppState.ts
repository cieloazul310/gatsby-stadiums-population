export interface AppState {
  visibility: boolean;
}

export const initialAppState: AppState = {
  visibility: true,
};

export type Action = { type: 'TOGGLE_VISIBILITY' };

export default function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'TOGGLE_VISIBILITY':
      return {
        ...state,
        visibility: !state.visibility,
      };
    default:
      throw new Error();
  }
}
