import { ActionType, GlobalActions } from './actions';
import { GlobalState } from './state';
export const globalReducer = (
    state: GlobalState,
    action: GlobalActions
  ): GlobalState => {
    switch (action.type) {
        case ActionType.SetUser:
          return {
            ...state,
            user: {
              ...action.payload,
            },
          };
    
        case ActionType.RemoveUser:
          return {
            ...state,
            user: null,
          };
    default:
        return state;
    }
  }