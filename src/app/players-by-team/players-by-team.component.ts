import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../shared/data.service';
import {PlayerByTeamModel} from '../shared/player-by-team.model';
import {Team} from '../shared/team.model';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';
import {PlayersByTeamService} from './players-by-team.service';

@Component({
  selector: 'app-players-by-team',
  templateUrl: './players-by-team.component.html',
  styleUrls: ['./players-by-team.component.css']
})
export class PlayersByTeamComponent implements OnInit {
  players: PlayerByTeamModel[];
  index: number;
  subscription: Subscription;

  constructor(private dataService: DataService, private route: ActivatedRoute, private playerService: PlayersByTeamService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.index = +params['id'];
          this.dataService.getPlayersByTeam(this.index);
        }
      );
    this.players = this.playerService.palyers;
  }

}
