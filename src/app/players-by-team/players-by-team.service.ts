import {Subject} from 'rxjs';
import {PlayerByTeamModel} from '../shared/player-by-team.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersByTeamService {
  playersChanged = new Subject<PlayerByTeamModel[]>();

  public players: PlayerByTeamModel[] = [];

  setPlayers(players: PlayerByTeamModel[]) {
    this.players = players;
    this.playersChanged.next(this.players.slice());
  }
}
