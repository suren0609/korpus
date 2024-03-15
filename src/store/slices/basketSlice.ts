import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBasketState, IProd } from "../types";

const initialState: IBasketState = {
  basket: [],
  isBasketActive: false,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasketItem: (state, { payload }: PayloadAction<IProd>) => {
      state.basket.push(payload);
    },
    setBasketActive: (state, { payload }: PayloadAction<boolean>) => {
      state.isBasketActive = payload;
    },
    deleteFromBasket: (state, { payload }: PayloadAction<number>) => {
      state.basket = state.basket.filter((el) => el.id !== payload);
    },
  },
});

export const { setBasketActive, setBasketItem, deleteFromBasket } =
  basketSlice.actions;
