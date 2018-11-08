import {Injectable} from '@angular/core';
import {Team} from '../shared/team.model';
import {Subject} from 'rxjs';

@Injectable()
export class TeamService {
  teamChanged = new Subject<Team[]>();

  public teams: Team[] = [];

  setTeams(teams: Team[]) {
    this.teams = teams;
    this.teamChanged.next(this.teams.slice());
  }

  getTeam(index: number) {
    return this.teams[index - 1];
  }
}
