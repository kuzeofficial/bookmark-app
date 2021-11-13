import React, { createContext, Dispatch, useContext, useReducer } from 'react';

import { GlobalState, initGlobalState } from './state';
import { GlobalActions, ActionType } from './actions';
import IGlobalProvider from './types';
import { globalReducer } from './reducer';

const GlobalContext = createContext<{
  state: GlobalState;
  dispatch: Dispatch<GlobalActions>;
}>({
  state: initGlobalState,
  dispatch: () => undefined,
});

const GlobalProvider = ({ children }: IGlobalProvider) => {
  const [state, dispatch] = useReducer(globalReducer, initGlobalState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider, ActionType };

export const useGlobalContext = () => useContext(GlobalContext);