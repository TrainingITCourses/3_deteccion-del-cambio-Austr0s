import {MissionTypesActions, MissionTypesActionTypes} from './mission-types.actions';

export interface State {
  missionTypes: any[];
  loading: boolean;
}

export const initialState: State = {
  missionTypes: [],
  loading: false
};

export function reducer(state = initialState, action: MissionTypesActions): State {
  switch (action.type) {
    case MissionTypesActionTypes.LoadMissionTypes:
      return {...state, loading: true};
    case MissionTypesActionTypes.MissionTypesLoaded:
      return {missionTypes: action.payload, loading: false};
    default:
      return state;
  }
}
