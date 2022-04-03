import React from "react";

export const SearchActionTypes = {
  MODIFY_SEARCH: "MODIFY_SEARCH",
  SELECT_TOPIC: "SELECT_TOPIC",
};

const initialState = {
  search: "",
  topic: "breaking-news",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SearchActionTypes.MODIFY_SEARCH:
      return {
        ...state,
        search: action.search,
      };
    case SearchActionTypes.SELECT_TOPIC:
      return {
        ...state,
        topic: action.topic,
      };
    default:
      throw new Error("No action of this type exists!");
  }
};

const AppSearchContext = React.createContext(undefined);

export const AppSearchProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(searchReducer, initialState);

  const value = { state, dispatch };

  return (
    <AppSearchContext.Provider value={value}>
      {children}
    </AppSearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = React.useContext(AppSearchContext);

  if (context === undefined) {
    throw new Error("No value provided for context!");
  }

  return context;
};
