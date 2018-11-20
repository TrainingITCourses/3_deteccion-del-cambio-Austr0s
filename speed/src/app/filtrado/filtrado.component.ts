import { Component, OnInit} from '@angular/core';
import { ApiService } from '../store/api.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {GlobalSlideTypes, GlobalStore} from '../store/glotal-store.state';
import { filter } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-filtrado',
  templateUrl: './filtrado.component.html'
})
export class FiltradoComponent implements OnInit {
  optionsForm: FormGroup;
  options = ['Estado', 'Agencia', 'Tipo'];
  counter = {length: 0, message: 'Resultados encontrados'};

  public filterSelected: any[];

  public launches: any[];
  public agencies: any[];
  public statuses: any[];
  public missionTypes: any[];

  constructor(private global: GlobalStore, private service: ApiService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.optionsForm = this.fb.group({
      optionsControl: [this.options[1]]
    });

    this.global.select$(GlobalSlideTypes.launches)
      .subscribe(launch => this.launches = launch);
    this.global.select$(GlobalSlideTypes.agencies)
      .subscribe(agencie => this.agencies = agencie);
    this.global.select$(GlobalSlideTypes.statuses)
      .subscribe(status => this.statuses = status);
    this.global.select$(GlobalSlideTypes.missionTypes)
      .subscribe(mission => this.missionTypes = mission);
  }

  onSearch(searchText: string) {
    const search = searchText.toLowerCase();
    if (!search) {
      this.counter = {...this.counter, length: 0};
    } else {
      switch (this.optionsForm.get('optionsControl').value) {
        case 'Estado':
          this.service.getStatusTypes()
            .subscribe(
              data => {
                this.filterSelected =  data.filter(l => l.name.toLowerCase().includes(search));
                this.counter = {...this.counter, length: this.filterSelected.length};
            });
          break;
        case 'Agencia':
            this.service.getAgencies()
            .subscribe(
              data => {
                this.filterSelected =  data.filter(l => l.name.toLowerCase().includes(search));
                this.counter = {...this.counter, length: this.filterSelected.length};
            });
          break;
        case 'Tipo':
          this.service.getMissionTypes()
          .subscribe(
            data => {
              this.filterSelected =  data.filter(l => l.name.toLowerCase().includes(search));
              this.counter = {...this.counter, length: this.filterSelected.length};
          });
          break;
      }
    }

  }

  selectDropDownItem(value: string) {
    this.optionsForm.controls['optionsControl'].setValue(value);
    this.filterSelected = [];
  }
}
