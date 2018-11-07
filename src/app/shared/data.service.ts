import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

import {Team} from './team.model';
import {Observable} from 'rxjs';

@Injectable()
export class DataService {

  constructor(private http: Http) {
  }

  getTeams(): Observable<Team[]> {
   return this.http.get('http://localhost:8080/teams')
     .map((response: Response) => response.json());
  }

}
