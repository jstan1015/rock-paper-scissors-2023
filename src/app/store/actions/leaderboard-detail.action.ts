import { Action, createAction, props } from '@ngrx/store';
import { LeaderboardDetails } from 'src/app/leaderboard/model/leaderboard.model';

//old version
// export enum LeaderboardDetailActionType {
//   ADD_ITEM = '[LEADERBOARD_DETAIL] Add Leaderboard Detail',
// }
// export class AddItemAction implements Action {
//   readonly type = LeaderboardDetailActionType.ADD_ITEM;
//   //add an optional payload
//   constructor(public payload: LeaderboardDetails) {}
// }
// export type LeaderboardDetailAction = AddItemAction;

export const AddItemAction = createAction(
    '[LEADERBOARD_DETAIL] Add Leaderboard Detail',
    props<{payload: LeaderboardDetails}>()
  );