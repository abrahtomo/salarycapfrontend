import {Component, OnInit} from '@angular/core';
import {DataService} from '../shared/data.service';
import {PlayerByTeamModel} from '../shared/player-by-team.model';
import {ActivatedRoute, Params} from '@angular/router';
import {PlayersByTeamService} from './players-by-team.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-players-by-team',
  templateUrl: './players-by-team.component.html',
  styleUrls: ['./players-by-team.component.css']
})
export class PlayersByTeamComponent implements OnInit{
  players: PlayerByTeamModel[];
  index: number;
  subscription: Subscription;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private playerService: PlayersByTeamService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.index = +params['id'];
          this.dataService.getPlayersByTeam(this.index);
        }
      );
    this.subscription = this.playerService.playersChanged
      .subscribe(
        (players: PlayerByTeamModel[]) => {
          this.players = players;
        }
      );
    this.players = this.playerService.players;
  }
}
