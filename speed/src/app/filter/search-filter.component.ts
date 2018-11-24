import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-filter',
  template: `
    <section>
      <div>
        <input #searchText type="text"
               placeholder="Introduce tu búsqueda..."
               name="search"
               (keyup)="search.next(searchText.value)">
      </div>
    </section>
  `
})
export class SearchFilterComponent implements OnInit {
 @Output() public search = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

}
