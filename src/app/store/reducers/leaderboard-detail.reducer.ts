
import { Action, createReducer, on } from '@ngrx/store';
import { LeaderboardDetails } from 'src/app/leaderboard/model/leaderboard.model';
import { AddItemAction} from '../actions/leaderboard-detail.action';

//preset dummy data
const initialState: Array<LeaderboardDetails> = [
    { playerName: 'Lachlan Laney', playerWinCount: 10, computerWinCount: 5, winningRate: Math.floor(10/15 * 100)},
    { playerName: 'Selina Natalia', playerWinCount: 20, computerWinCount: 5, winningRate: Math.floor(20/25 * 100)},
    { playerName: 'Julia Orinda', playerWinCount: 7, computerWinCount: 5, winningRate: Math.floor(7/12 * 100)},
    { playerName: 'LeBron Nikos', playerWinCount: 1, computerWinCount: 2, winningRate: Math.floor(1/3 * 100)},
];

//old version
// export function leaderboardDetailReducer(
//   state: Array<LeaderboardDetails> = initialState,
//   action: LeaderboardDetailAction
// ) {
//   switch (action.type) {
//     case LeaderboardDetailActionType.ADD_ITEM:
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// }

const reducer = createReducer(
    initialState,
    on(AddItemAction, (state, action) => {
       return [...state, action.payload]
    })
 );
 
 export function LeaderboardDetailReducer(state: Array<LeaderboardDetails> | undefined, action: Action) {
   return reducer(state, action);
 }