import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardContainerComponent } from './leaderboard/components/leaderboard-container/leaderboard-container.component';
import { MainProgramContainerComponent } from './main-program/components/main-program-container/main-program-container.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainProgramContainerComponent,
  },
  {
    path: 'leaderboard',
    component: LeaderboardContainerComponent,
  },
  {
    path: '',
    component: MainProgramContainerComponent
  },
  {
    path: '',
    redirectTo: '/main-program',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
