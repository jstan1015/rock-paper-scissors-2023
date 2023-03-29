import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaderboardContainerComponent } from './leaderboard/components/leaderboard-container/leaderboard-container.component';
import { LeaderboardComponent } from './leaderboard/components/leaderboard/leaderboard.component';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { ActionContainerComponent } from './main-program/components/action-container/action-container.component';
import { MainProgramContainerComponent } from './main-program/components/main-program-container/main-program-container.component';
import { MainProgramUiComponent } from './main-program/components/main-program-ui/main-program-ui.component';
import { ScoreContainerComponent } from './main-program/components/score-container/score-container.component';
import { MainProgramModule } from './main-program/main-program.module';
import { NavbarComponent } from './navbar/components/navbar/navbar.component';
import { UsernameInputFormComponent } from './main-program/components/username-input-form/username-input-form.component';
import { LoadingScreenComponent } from './main-program/components/loading-screen/loading-screen.component';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockDbService } from './services/mock-db.service';
import { StoreModule } from '@ngrx/store';
import { LeaderboardDetailReducer } from './store/reducers/leaderboard-detail.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MainProgramModule,
    LeaderboardModule,
    StoreModule.forRoot({
      leaderboardDetail: LeaderboardDetailReducer,
    }),

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      MockDbService, { dataEncapsulation: false}
    )
  ],
  exports: [
    NavbarComponent,
  ],
  entryComponents: [
    UsernameInputFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
