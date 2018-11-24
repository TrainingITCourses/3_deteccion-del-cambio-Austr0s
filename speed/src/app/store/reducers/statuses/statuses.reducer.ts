import {StatusesActions, StatusesActionTypes} from './statuses.actions';

export interface State {
  statuses: any[];
  loading: boolean;
}

export const initialState: State = {
  statuses: [],
  loading: false
};

export function reducer(state = initialState, action: StatusesActions): State {
  switch (action.type) {
    case StatusesActionTypes.LoadStatuses:
      return {...state, loading: true};
    case StatusesActionTypes.StatusesLoaded:
      return {statuses: action.payload, loading: false};
    default:
      return state;
  }
}
