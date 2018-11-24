import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from './store/reducers';
import {LoadAgencies} from './store/reducers/agencies/agencies.actions';
import {LoadStatuses} from './store/reducers/statuses/statuses.actions';
import {LoadMissionTypes} from './store/reducers/missionTypes/mission-types.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor( private store: Store<State>) {}
  public ngOnInit(): void  {
    this.store.dispatch(new LoadAgencies());
    this.store.dispatch(new LoadStatuses());
    this.store.dispatch(new LoadMissionTypes());
  }
}
