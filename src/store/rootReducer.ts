import { combineReducers } from "@reduxjs/toolkit";
import { languageSlice } from "./slices/languageSlice";

export const rootReducer = combineReducers({
  [languageSlice.name]: languageSlice.reducer,
});
