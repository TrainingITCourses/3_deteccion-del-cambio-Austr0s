import {AgenciesActions, AgenciesActionTypes} from './agencies.actions';

export interface State {
  agencies: any[];
  loading: boolean;
}

export const initialState: State = {
  agencies: [],
  loading: false
};

export function reducer(state = initialState, action: AgenciesActions): State {
  switch (action.type) {
    case AgenciesActionTypes.LoadAgencies:
      return {...state, loading: true};
    case AgenciesActionTypes.AgenciesLoaded:
      return {agencies: action.payload, loading: false};
    default:
      return state;
  }
}
