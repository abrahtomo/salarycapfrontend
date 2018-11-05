import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

import {TeamService} from '../team-list/team.service';
import {Team} from './team.model';

@Injectable()
export class DataService {

  constructor(private http: Http,
              private teamService: TeamService) {
  }

  getTeams() {
   this.http.get('http://localhost:8080/teams')
     .map(
       (response: Response) => {
        const teams: Team[] = response.json();
        console.log(teams);
        return teams;
      }
     )
     .subscribe(
       (teams: Team[]) => {
         this.teamService.setTeams(teams);
       });
  }

}
