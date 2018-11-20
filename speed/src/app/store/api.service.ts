import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GlobalStore } from './glotal-store.state';
import { environment } from '../../environments/environment';
import { LoadLaunches } from './global-store.actions';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private key = 'launches';
  private url = 'https://launchlibrary.net/1.4/launch/1950-01-01?limit=2000';
  constructor(private http: HttpClient, private global: GlobalStore) {}


  public getLaunches = () => {
    const localLaunches = localStorage.getItem(this.key);
    if (localLaunches) {
      this.global.dispatch(new LoadLaunches(JSON.parse(localLaunches)));
    } else {
      this.http
        .get(this.url)
        .pipe(map((res: any) => res.launches))
        .subscribe(launches => {
          localStorage.setItem(this.key, JSON.stringify(launches));
          this.global.dispatch(new LoadLaunches(launches));
        });
    }
  }

  public getAgencies = (): Observable<any[]> =>
    this.http
      .get(environment.url + '/assets/data/agencies.json')
      .pipe(map((res: any) => res.agencies))

  public getMissionTypes = (): Observable<any[]> =>
    this.http
      .get(environment.url + '/assets/data/missiontypes.json')
      .pipe(map((res: any) => res.types))

  public getStatusTypes = (): Observable<any> =>
    this.http
    .get(environment.url + '/assets/data/launchstatus.json')
    .pipe(map((res: any) => res.types))
}
