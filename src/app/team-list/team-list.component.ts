import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

import {Team} from '../shared/team.model';
import {DataService} from '../shared/data.service';


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teams: Team[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTeams()
      .subscribe(
        teams => this.teams = teams
      );
  }
}
