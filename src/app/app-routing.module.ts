import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {TeamListComponent} from './team-list/team-list.component';
import {PlayersByTeamComponent} from './players-by-team/players-by-team.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/teams', pathMatch: 'full'},
  {path: 'teams', component: TeamListComponent},
  {path: 'teams/:id', component: PlayersByTeamComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
