import React, { createContext } from "react";
import { dashboardActionTypes } from "./actions/dashboard";

export const initialState = {
  dashboard: {
    activeTab: "General View",
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case dashboardActionTypes.setActiveTab:
      return {
        ...state,
        dashboard: { ...state.dashboard, activeTab: action.payload },
      };
    default:
      return state;
  }
};

export const RootContext = createContext();
