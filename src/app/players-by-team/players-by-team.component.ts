import {Component, OnInit} from '@angular/core';
import {DataService} from '../shared/data.service';
import {PlayerByTeamModel} from '../shared/player-by-team.model';
import {ActivatedRoute, Params} from '@angular/router';
import {PlayersByTeamService} from './players-by-team.service';
import {Subscription} from 'rxjs';
import {Team} from '../shared/team.model';
import {TeamService} from '../team-list/team.service';

@Component({
  selector: 'app-players-by-team',
  templateUrl: './players-by-team.component.html',
  styleUrls: ['./players-by-team.component.css']
})
export class PlayersByTeamComponent implements OnInit {
  players: PlayerByTeamModel[];
  index: number;
  team: Team;
  subscription: Subscription;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private playerService: PlayersByTeamService,
              private teamService: TeamService) { }

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
    this.team = this.teamService.getTeam(this.index);
  }
}
