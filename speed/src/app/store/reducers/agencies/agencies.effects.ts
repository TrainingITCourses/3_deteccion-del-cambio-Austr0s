import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AgenciesActionTypes, AgenciesLoaded} from './agencies.actions';
import {map, mergeMap} from 'rxjs/operators';
import {ApiService} from '../../api.service';


@Injectable()
export class AgenciesEffects {

  @Effect()
  public load$ = this.actions$
    .pipe(
      ofType(AgenciesActionTypes.LoadAgencies),
      mergeMap(() => this.api.getAgencies().pipe(map(agencies => new AgenciesLoaded(agencies))))
    );
  constructor(private actions$: Actions, private api: ApiService) {}
}
