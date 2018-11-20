import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GlobalActions, GlobalActionTypes } from './global-store.actions';
import { globalStoreReducer } from './global-store.reducer';
import { Global, globalInitialState } from './models/global.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalStore {
  private state: Global = { ...globalInitialState };
  private launches$ = new BehaviorSubject<any>(this.state.launches);
  private agencies$ = new BehaviorSubject<any>(this.state.agencies);
  private statuses$ = new BehaviorSubject<any>(this.state.statuses);
  private missionTypes$ = new BehaviorSubject<any>(this.state.missionTypes);

  constructor() {}

  public select$ = (slice: GlobalSlideTypes) => {
    switch (slice) {
      case GlobalSlideTypes.launches:
        return this.launches$.asObservable();
      case GlobalSlideTypes.agencies:
        return this.agencies$.asObservable();
      case GlobalSlideTypes.statuses:
        return this.statuses$.asObservable();
      case GlobalSlideTypes.missionTypes:
        return this.missionTypes$.asObservable();
    }
  }

  public selectSnapShot = (slice: GlobalSlideTypes) => {
    switch (slice) {
      case GlobalSlideTypes.launches:
        return [...this.state.launches];
      case GlobalSlideTypes.agencies:
        return [...this.state.agencies];
      case GlobalSlideTypes.statuses:
        return [...this.state.statuses];
      case GlobalSlideTypes.missionTypes:
        return [...this.state.missionTypes];
    }
  }

  public dispatch = (action: GlobalActions) => {
    this.state = globalStoreReducer(this.state, action);
    switch (action.type) {
      case GlobalActionTypes.LoadLaunches:
        this.launches$.next([...this.state.launches]);
        break;
      case GlobalActionTypes.LoadAgencies:
        this.agencies$.next([...this.state.agencies]);
        break;
      case GlobalActionTypes.LoadStatuses:
        this.statuses$.next([...this.state.statuses]);
        break;
      case GlobalActionTypes.LoadMissionTypes:
        this.missionTypes$.next([...this.state.missionTypes]);
        break;
    }
  }
}

export enum GlobalSlideTypes {
  launches =  'launches',
  agencies = 'agencies',
  statuses = 'statuses',
  missionTypes = 'missionTypes'
}
