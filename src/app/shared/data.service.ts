import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

import {Team} from './team.model';
import {PlayerByTeamModel} from './player-by-team.model';
import {PlayersByTeamService} from '../players-by-team/players-by-team.service';
import {HttpClient} from '@angular/common/http';
import {TeamService} from '../team-list/team.service';

@Injectable()
export class DataService {

  constructor(private http: Http,
              private playersService: PlayersByTeamService,
              private httpClient: HttpClient,
              private teamService: TeamService) {
  }

  getTeams() {
   return this.httpClient.get<Team[]>('http://localhost:8080/teams')
     .map((teams) => {
       return teams;
     })
     .subscribe(
       (teams: Team[]) => {
         this.teamService.setTeams(teams);
       }
     );
  }

  getPlayersByTeam(id: number) {
    this.httpClient.get<PlayerByTeamModel[]>('http://localhost:8080/teams/' + id)
      .map((players) => {
        return players;
      }
      )
      .subscribe(
        (players: PlayerByTeamModel[]) => {
         this.playersService.setPlayers(players);
        }
      );
  }

}
