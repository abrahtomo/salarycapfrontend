import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TeamListComponent } from './team-list/team-list.component';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './shared/data.service';
import { TeamService } from './team-list/team.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TeamListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [DataService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
