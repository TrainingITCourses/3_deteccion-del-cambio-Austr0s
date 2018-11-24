import { Action } from '@ngrx/store';

export enum StatusesActionTypes {
  LoadStatuses = '[Statuses] Load Statuses',
  StatusesLoaded = '[Statuses] Statuses Loaded'
}

export class LoadStatuses implements Action {
  readonly type = StatusesActionTypes.LoadStatuses;
}

export class StatusesLoaded implements Action {
  readonly type = StatusesActionTypes.StatusesLoaded;
  constructor(readonly payload: any[]) {}
}

export type StatusesActions = LoadStatuses | StatusesLoaded;
