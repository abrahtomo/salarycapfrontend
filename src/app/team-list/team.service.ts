import {Injectable} from '@angular/core';
import {Team} from '../shared/team.model';
import {Subject} from 'rxjs';

@Injectable()
export class TeamService {
  teamChanged = new Subject<Team[]>();

  private teams: Team[];

  getTeams() {
    return this.teams.slice();
  }

  setTeams(teams: Team[]) {
    this.teams = teams;
    this.teamChanged.next(this.teams.slice());
  }
}
