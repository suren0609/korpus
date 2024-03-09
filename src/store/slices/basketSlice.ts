import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBasketState } from "../types";

const initialState: IBasketState = {
  isBasketActive: false,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasketActive: (state, { payload }: PayloadAction<boolean>) => {
      state.isBasketActive = payload;
    },
  },
});

export const { setBasketActive } = basketSlice.actions;
