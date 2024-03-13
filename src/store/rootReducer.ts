import { combineReducers } from "@reduxjs/toolkit";
import { languageSlice } from "./slices/languageSlice";
import { basketSlice } from "./slices/basketSlice";
import { productSlice } from "./slices/productSlice";

export const rootReducer = combineReducers({
  [languageSlice.name]: languageSlice.reducer,
  [basketSlice.name]: basketSlice.reducer,
  [productSlice.name]: productSlice.reducer,
});
