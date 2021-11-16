// Importing hooks needed for the context
import { createContext, Dispatch, useContext, useReducer } from 'react';
// Importing the interface GlobalState, and the function of initGlobalState
import { GlobalState, initGlobalState } from './state';
// Importing the type of GlobalActions and enum ActionType
import { GlobalActions, ActionType } from './actions';
// Importing the interface for the IGlobalProvider
import IGlobalProvider from './types';
// Importing the function globalReducer
import { globalReducer } from './reducer';


// Creating the context with the values in the state and the dispatch, and then return this values
const GlobalContext = createContext<{
  state: GlobalState;
  dispatch: Dispatch<GlobalActions>;
}>({
  state: initGlobalState,
  dispatch: () => undefined,
});

// Function recibe for parameter a children with the types defined in IGlobalProvider(React.ReactNode)
const GlobalProvider = ({ children }: IGlobalProvider) => {
  // Create a state and the dispatch using the hooks useReducer and define in the dispatch the function globalReducer
  const [state, dispatch] = useReducer(globalReducer, initGlobalState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider, ActionType };

export const useGlobalContext = () => useContext(GlobalContext);