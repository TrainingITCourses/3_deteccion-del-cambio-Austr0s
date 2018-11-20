import {Component, OnInit} from '@angular/core';
import {GlobalSlideTypes, GlobalStore} from './store/glotal-store.state';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {ApiService} from './store/api.service';
import {map, tap} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public isHandset$: Observable<boolean>;
  public nextLaunch$: Observable<any>;
  public loaded = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private api: ApiService,
    private global: GlobalStore
  ) {}
  public ngOnInit(): void  {
    this.loadData();
    this.observeBreackpoints();
    this.observeLaunches();
  }

  private loadData() {
    this.api.getLaunches();
    this.api.getAgencies();
    this.api.getStatusTypes();
    this.api.getMissionTypes();
  }
  private observeBreackpoints() {
    this.isHandset$ = this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(map(result => result.matches));
  }
  private observeLaunches() {
    this.nextLaunch$ = this.global.select$(GlobalSlideTypes.launches).pipe(
      tap(() => (this.loaded = true)),
      map(
        launches =>
          launches
            .filter(l => new Date(l.windowstart) > new Date())
            .sort((a, b) => (a.isostart > b.isostart ? 1 : -1))
            .slice(0, 1)[0]
      )
    );
  }
}
