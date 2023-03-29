import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LDETAILS } from '../leaderboard/constant/leaderboardDetails';
import { LeaderboardDetails } from '../leaderboard/model/leaderboard.model';
import { MockDbService } from './mock-db.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor() { }

  leaderboardDetails: LeaderboardDetails[] = [];

  addToLeaderboard(data: LeaderboardDetails){
    this.leaderboardDetails = [];
    this.leaderboardDetails.push(data);
  }

  clearLeaderboard(){
    this.leaderboardDetails = [];
  }

  updateToLeaderboard(data: LeaderboardDetails){
    this.leaderboardDetails = [];
    if (this.leaderboardDetails.length <= 0) {
      this.leaderboardDetails.push(data);
    } else {
      var existedData = this.leaderboardDetails.find(x => x.playerName === data.playerName);
      //need handle if same player name
      if (existedData) {
        existedData
      }
    }
  }

  getLeaderboardDetails(): Observable<LeaderboardDetails[]>{
    const leaderboardDetails = of(LDETAILS)

    if(this.leaderboardDetails.length > 0){
      //trying 
    }
    return leaderboardDetails;
  }

  getLeaderboardByName(playerName: string): Observable<LeaderboardDetails>{
    const specificLData = LDETAILS.find( h => h.playerName === playerName)!;
    return of(specificLData);
  }

}
