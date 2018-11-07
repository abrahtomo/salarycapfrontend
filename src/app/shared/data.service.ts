import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

import {Team} from './team.model';
import {Observable} from 'rxjs';
import {PlayerByTeamModel} from './player-by-team.model';
import {PlayersByTeamService} from '../players-by-team/players-by-team.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: Http, private playersService: PlayersByTeamService, private httpClient: HttpClient) {
  }

  getTeams(): Observable<Team[]> {
   return this.http.get('http://localhost:8080/teams')
     .map((response: Response) => response.json());
  }

  getPlayersByTeam(id: number) {
    this.httpClient.get<PlayerByTeamModel[]>('http://localhost:8080/teams/' + id)
      .map((players) => {
        return players;
      }
      )
      .subscribe(
        (players: PlayerByTeamModel[]) => {
         this.playersService.setPalyers(players);
        }
      );
  }

}
