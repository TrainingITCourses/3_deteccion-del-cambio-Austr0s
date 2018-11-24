import { Action } from '@ngrx/store';

export enum AgenciesActionTypes {
  LoadAgencies = '[Agencies] Load Agenciess',
  AgenciesLoaded = '[Agencies] Agencies Loaded'
}

export class LoadAgencies implements Action {
  readonly type = AgenciesActionTypes.LoadAgencies;
}
export  class AgenciesLoaded implements  Action {
  readonly  type = AgenciesActionTypes.AgenciesLoaded;
  constructor(readonly payload: any[]) {}
}
export type AgenciesActions = LoadAgencies | AgenciesLoaded;
