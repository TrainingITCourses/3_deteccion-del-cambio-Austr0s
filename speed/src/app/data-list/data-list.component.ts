import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-agencies-list',
  template: `
    <div>
      <table>
        <thead>
        <tr>
          <th>Número</th>
          <th>Nombre</th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let a of datas; let i=index">
          <td>{{i +1}}</td>
          <td>{{a.name}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  `
})
export class DataListComponent implements OnInit {
  @Input() public datas: any[];
  constructor() { }

  ngOnInit() {
  }

}
