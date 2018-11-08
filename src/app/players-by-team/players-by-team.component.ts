import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../shared/data.service';
import {PlayerByTeamModel} from '../shared/player-by-team.model';
import {ActivatedRoute, Params} from '@angular/router';
import {PlayersByTeamService} from './players-by-team.service';

@Component({
  selector: 'app-players-by-team',
  templateUrl: './players-by-team.component.html',
  styleUrls: ['./players-by-team.component.css']
})
export class PlayersByTeamComponent implements OnInit, OnDestroy {
  players: PlayerByTeamModel[];
  index: number;

  constructor(private dataService: DataService, private route: ActivatedRoute, private playerService: PlayersByTeamService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.index = +params['id'];
          this.dataService.getPlayersByTeam(this.index);
        }
      );
    console.log(this.playerService.players);
    this.players = this.playerService.players;
  }

  ngOnDestroy(): void {/*
    this.index = 0;
    this.players = [];*/
  }

}
