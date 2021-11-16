// Importing the type UserType from the state
import {
    UserType,
  } from './state';
//  Exporting a enum with the Actions
export enum ActionType {
    SetUser,
    RemoveUser,
}
// Exporting a interface with the types of values to pass to LoginUser
export interface LoginUser {
    type: ActionType.SetUser;
    payload: UserType;
}
// Exporting a interface with the types of values to pass to Remove
export interface RemoveUser {
    type: ActionType.RemoveUser;
}
// Exporting a type with the interfaces defined
export type GlobalActions =
  | LoginUser
  | RemoveUser;