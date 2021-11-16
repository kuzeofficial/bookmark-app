// Importing the enum of ActionType and the type GlobalActions
import { ActionType, GlobalActions } from './actions';
// Importing the interface GlobalState for define user type
import { GlobalState } from './state';
export const globalReducer = (
    state: GlobalState,
    action: GlobalActions
  ): GlobalState => {
    // Switching the action type
    switch (action.type) {
        // In case that actions is set user then return the user with payload
        case ActionType.SetUser:
          return {
            ...state,
            user: {
              ...action.payload,
            },
          };
        // In case that actions is remove user then return user with null
        case ActionType.RemoveUser:
          return {
            ...state,
            user: null,
          };
    default:
        return state;
    }
  }