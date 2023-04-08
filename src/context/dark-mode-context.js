import { createContext, useReducer } from "react";

const intialState = {
  darkMode: false,
  toggle: () => {},
};

const datkModeReducer = (state, action) => {
  switch (action.type) {
    case "light":
      return {
        ...state,
        darkMode: false,
      };
    case "dark":
      return {
        ...state,
        darkMode: true,
      };
    case "toggle":
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      break;
  }
};

export const datkModeContext = createContext(intialState);

export const DatkModeContextProvider = ({ children }) => {
   const [state , dispatch] = useReducer(datkModeReducer , intialState)

   return (
      <datkModeContext.Provider value={{
        darkMode : state.darkMode , 
        toggle : dispatch
      }} >
        {children}
      </datkModeContext.Provider>
   )
};
