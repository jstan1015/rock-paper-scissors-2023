import { LeaderboardDetails } from 'src/app/leaderboard/model/leaderboard.model';

export interface State {
  readonly leaderboardDetails: Array<LeaderboardDetails>;
}