import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TeamListComponent } from './team-list/team-list.component';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './shared/data.service';
import { TeamService } from './team-list/team.service';
import { HeaderComponent } from './header/header.component';
import { PlayersByTeamComponent } from './players-by-team/players-by-team.component';
import {HttpClientModule} from '@angular/common/http';
import {OrderModule} from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TeamListComponent,
    HeaderComponent,
    PlayersByTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    OrderModule
  ],
  providers: [DataService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
