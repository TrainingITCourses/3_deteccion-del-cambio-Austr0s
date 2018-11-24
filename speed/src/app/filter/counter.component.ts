import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-counter',
  template: `
    <div *ngIf="counter.length > 0; else sinDatos">
      <p>
        {{counter.message}}: {{counter.length}} Resultados.
      </p>
    </div>
    <ng-template #sinDatos>No se ha encontrado ningún resultado ...</ng-template>
  `
})
export class CounterComponent implements OnInit {
  @Input() public counter = { length: 0, message: '' };
  constructor() { }

  ngOnInit() {
  }

}
