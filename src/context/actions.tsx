import {
    UserType,
  } from './state';
export enum ActionType {
    SetUser,
    RemoveUser,
}
export interface LoginUser {
    type: ActionType.SetUser;
    payload: UserType;
}
export interface RemoveUser {
    type: ActionType.RemoveUser;
}
export type GlobalActions =
  | LoginUser
  | RemoveUser;