import {Subject} from 'rxjs';
import {PlayerByTeamModel} from '../shared/player-by-team.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersByTeamService {
  playersChanged = new Subject<PlayerByTeamModel[]>();

  public palyers: PlayerByTeamModel[] = [];

  setPalyers(players: PlayerByTeamModel[]) {
    this.palyers = players;
    this.playersChanged.next(this.palyers.slice());
  }
}
