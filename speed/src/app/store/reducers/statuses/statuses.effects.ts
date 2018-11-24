import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, mergeMap} from 'rxjs/operators';
import {StatusesActionTypes, StatusesLoaded} from './statuses.actions';
import {ApiService} from '../../api.service';


@Injectable()
export class StatusesEffects {

  @Effect()
  public load$ = this.actions$
    .pipe(
      ofType(StatusesActionTypes.LoadStatuses),
      mergeMap(() => this.api.getStatusTypes().pipe(map(statusType => new StatusesLoaded(statusType))))
    );
  constructor(private actions$: Actions, private api: ApiService) {}
}
