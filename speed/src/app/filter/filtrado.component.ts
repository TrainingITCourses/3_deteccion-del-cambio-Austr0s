import { Component, OnInit} from '@angular/core';
import { ApiService } from '../store/api.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {State} from '../store/reducers';
import {LoadStatuses, StatusesLoaded} from '../store/reducers/statuses/statuses.actions';
import {AgenciesLoaded, LoadAgencies} from '../store/reducers/agencies/agencies.actions';
import {LoadMissionTypes, MissionTypesLoaded} from '../store/reducers/missionTypes/mission-types.actions';

@Component({
  selector: 'app-filtrado',
  templateUrl: './filtrado.component.html'
})
export class FiltradoComponent implements OnInit {
  optionsForm: FormGroup;
  options = ['Estado', 'Agencia', 'Tipo'];
  counter = {length: 0, message: 'Resultados encontrados'};
  public filterSelected: any[];
  public agencies: any[];
  public statuses: any[];
  public missionTypes: any[];

  constructor( private service: ApiService, private fb: FormBuilder, private store: Store<State>) {}

  ngOnInit(): void {
    this.optionsForm = this.fb.group({
      optionsControl: [this.options[1]]
    });
    this.store.select('agencies').subscribe(data => this.agencies = data.agencies);
    this.store.select('statuses').subscribe(data => this.statuses = data.statuses);
    this.store.select('missionTypes').subscribe(data => this.missionTypes = data.missionTypes);
  }

  onSearch(searchText: string) {
    const search = searchText.toLowerCase();
    if (!search) {
      this.counter = {...this.counter, length: 0};
      this.reloadValues(this.optionsForm.get('optionsControl').value);
    } else {
      switch (this.optionsForm.get('optionsControl').value) {
        case this.options[0]:
          this.filterValues(this.statuses, search);
          this.store.dispatch(new StatusesLoaded(this.filterSelected));
          break;
        case this.options[1]:
          this.filterValues(this.agencies, search);
          this.store.dispatch(new AgenciesLoaded(this.filterSelected));
          break;
        case this.options[2]:
          this.filterValues(this.missionTypes, search);
          this.store.dispatch(new MissionTypesLoaded(this.filterSelected));
          break;
      }
    }
  }
  filterValues(data: any[], search: string) {
    this.filterSelected = data.filter(a => a.name.toLowerCase().includes(search));
    this.counter = {...this.counter, length: this.filterSelected.length};
  }

  reloadValues(value: string) {
    switch (value) {
      case this.options[0]:
        this.store.dispatch(new LoadStatuses());
        break;
      case this.options[1]:
        this.store.dispatch(new LoadAgencies());
        break;
      case this.options[2]:
        this.store.dispatch(new LoadMissionTypes());
        break;
    }
  }
  selectDropDownItem(value: string) {
    this.optionsForm.controls['optionsControl'].setValue(value);
    this.filterSelected = [];
  }
}
