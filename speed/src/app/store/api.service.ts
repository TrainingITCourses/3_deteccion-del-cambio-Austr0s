import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

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
