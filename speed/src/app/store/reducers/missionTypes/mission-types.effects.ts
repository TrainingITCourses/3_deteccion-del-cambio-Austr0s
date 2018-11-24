import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {MissionTypesActionTypes, MissionTypesLoaded} from './mission-types.actions';
import {ApiService} from '../../api.service';
import {map, mergeMap} from 'rxjs/operators';

@Injectable()
export class MissionTypesEffects {

  @Effect()
  public load$ = this.actions$
    .pipe(
      ofType(MissionTypesActionTypes.LoadMissionTypes),
      mergeMap(() => this.api.getMissionTypes().pipe(map(missionTypes => new MissionTypesLoaded(missionTypes))))
    );

  constructor(private actions$: Actions, private api: ApiService) {}
}
