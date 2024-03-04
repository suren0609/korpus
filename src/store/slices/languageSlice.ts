import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ILanguageState } from "../types";

const initialState: ILanguageState = {
  language: "English",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, { payload }: PayloadAction<string>) => {
      state.language = payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
