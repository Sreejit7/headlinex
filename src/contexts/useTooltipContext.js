import React from "react";

export const TooltipActionTypes = {
  CREATE_TOOLTIP: "CREATE_TOOLTIP",
  DELETE_TOOLTIP: "DELETE_TOOLTIP",
};

const initialState = {
  text: "",
  position: {
    top: -1000,
    left: -1000,
  },
};

export const tooltipReducer = (state = initialState, action) => {
  switch (action.type) {
    case TooltipActionTypes.CREATE_TOOLTIP:
      return {
        ...state,
        text: action.text,
        position: {
          top: action.position.top,
          left: action.position.left,
        },
      };
    case TooltipActionTypes.DELETE_TOOLTIP:
      return initialState;
    default:
      throw new Error("No action exists for this type!");
  }
};

export const AppTooltipContext = React.createContext(undefined);

export const AppTooltipProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(tooltipReducer, initialState);

  const value = { state, dispatch };

  return (
    <AppTooltipContext.Provider value={value}>
      {children}
    </AppTooltipContext.Provider>
  );
};

export const useTooltipContext = () => {
  const context = React.useContext(AppTooltipContext);

  if (context === undefined) {
    throw new Error("No value provided for context!");
  }

  return context;
};
