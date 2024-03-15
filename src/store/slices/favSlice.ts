import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFavState, IProd } from "../types";

const initialState: IFavState = {
  favourite: [],
};

export const favSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    setItemToFav: (state, { payload }: PayloadAction<IProd>) => {
      state.favourite.push(payload);
    },
    deleteFromFav: (state, { payload }: PayloadAction<number>) => {
      state.favourite = state.favourite.filter((el) => el.id !== payload);
    },
  },
});

export const { setItemToFav, deleteFromFav } = favSlice.actions;
