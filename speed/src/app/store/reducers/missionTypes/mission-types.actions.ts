import { Action } from '@ngrx/store';

export enum MissionTypesActionTypes {
  LoadMissionTypes = '[MissionTypes] Load Mission Types',
  MissionTypesLoaded = '[MissionTypes] Mission Types Loaded'
}

export class LoadMissionTypes implements Action {
  readonly type = MissionTypesActionTypes.LoadMissionTypes;
}
export class MissionTypesLoaded implements Action {
  readonly type = MissionTypesActionTypes.MissionTypesLoaded;
  constructor(readonly payload: any[]) {}
}
export type MissionTypesActions = LoadMissionTypes | MissionTypesLoaded;
