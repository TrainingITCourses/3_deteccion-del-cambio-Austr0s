import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromAgencies from './agencies/agencies.reducer';
import * as fromMissionTypes from './missionTypes/mission-types.reducer';
import * as fromStatuses from './statuses/statuses.reducer';

export interface State {
  agencies: fromAgencies.State;
  missionTypes: fromMissionTypes.State;
  statuses: fromStatuses.State;
}

export const reducers: ActionReducerMap<State> = {
  agencies: fromAgencies.reducer,
  missionTypes: fromMissionTypes.reducer,
  statuses: fromStatuses.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
