import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProd } from "../types";

const initialState = {
  products: [
    {
      name: "Maximera",
      category: "kitchen",
      price: 21000,
      id: 1,
    },
    {
      name: "Maximera",
      category: "kitchen",
      price: 22000,
      id: 2,
    },
    {
      name: "Maximera",
      category: "kitchen",
      price: 23000,
      id: 3,
    },
    {
      name: "Maximera",
      category: "kitchen",
      price: 24000,
      id: 4,
    },
    {
      name: "Maximera",
      category: "kitchen",
      price: 25000,
      id: 5,
    },
    {
      name: "Maximera",
      category: "kitchen",
      price: 26000,
      id: 6,
    },
    {
      name: "Maximera",
      category: "kitchen",
      price: 27000,
      id: 7,
    },
    {
      name: "Maximera",
      category: "kitchen",
      price: 28000,
      id: 8,
    },
    {
      name: "Maximera",
      category: "kitchen",
      price: 29000,
      id: 9,
    },
  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, { payload }: PayloadAction<IProd[]>) => {
      state.products = payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
