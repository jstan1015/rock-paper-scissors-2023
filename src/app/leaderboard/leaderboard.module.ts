import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { LeaderboardContainerComponent } from './components/leaderboard-container/leaderboard-container.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';



@NgModule({
  declarations: [
    LeaderboardComponent,
    LeaderboardContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    LeaderboardComponent,
    LeaderboardContainerComponent,
  ],
  providers: [],
})
export class LeaderboardModule { }
