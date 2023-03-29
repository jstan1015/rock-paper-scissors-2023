import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LeaderboardService } from 'src/app/services/leaderboard.service';
import { LeaderboardDetails } from '../../model/leaderboard.model';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  // private store: Store<A>
  allLeaderboardDetails: LeaderboardDetails[] = [];
  constructor(private leaderboardService: LeaderboardService){
  }

  ngOnInit(): void {
      this.leaderboardService.getLeaderboardDetails().subscribe(data =>{
        this.allLeaderboardDetails = data.sort((a, b) => b.winningRate - a.winningRate);
      });
  }
}
