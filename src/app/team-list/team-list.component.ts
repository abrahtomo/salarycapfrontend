import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {Team} from '../shared/team.model';
import {TeamService} from './team.service';
import {DataService} from '../shared/data.service';


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teams: Team[];
  subscription: Subscription;

  constructor(private teamService: TeamService, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTeams();
    this.subscription = this.teamService.teamChanged
      .subscribe(
        (teams: Team[]) => {
          this.teams = teams;
        }
      );
    this.teams = this.teamService.teams;
  }
}
