import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

import {TeamService} from '../team-list/team.service';
import {Team} from './team.model';
import {Observable} from 'rxjs';

@Injectable()
export class DataService {

  constructor(private http: Http,
              private teamService: TeamService) {
  }

  getTeams(): Observable<Team[]> {
   return this.http.get('http://localhost:8080/teams')
     .map((response: Response) => response.json());
  }

}
