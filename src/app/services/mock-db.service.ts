import { Injectable } from '@angular/core';
import { LeaderboardDetails } from '../leaderboard/model/leaderboard.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class MockDbService implements InMemoryDbService {

  constructor() { }

  createDb(){
    const leaderboardDetails: LeaderboardDetails[] = [
      // { playerName: 'Lachlan Laney', playerWinCount: 10, computerWinCount: 5, },
      // { playerName: 'Selina Natalia', playerWinCount: 10, computerWinCount: 5},
      // { playerName: 'Julia Orinda', playerWinCount: 10, computerWinCount: 5},
      // { playerName: 'LeBron Nikos', playerWinCount: 10, computerWinCount: 5},
    ];
    return { leaderboardDetails };
  }

}
