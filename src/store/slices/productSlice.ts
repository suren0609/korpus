import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProd } from "../types";

const initialState = {
  products: [
    {
      name: "Maximera",
      category: "kitchen",
      price: "21,000AMD",
      id: 1,
    },
    {
      name: "Maximera",
      category: "kitchen",
      price: "22,000AMD",
      id: 2,
    },
    {
      name: "Maximera",
      category: "kitchen",
      price: "23,000AMD",
      id: 3,
    },
    {
      name: "Maximera",
      category: "kitchen",
      price: "24,000AMD",
      id: 4,
    },
    {
      name: "Maximera",
      category: "kitchen",
      price: "25,000AMD",
      id: 5,
    },
    {
      name: "Maximera",
      category: "kitchen",
      price: "26,000AMD",
      id: 6,
    },
    {
      name: "Maximera",
      category: "kitchen",
      price: "27,000AMD",
      id: 7,
    },
    {
      name: "Maximera",
      category: "kitchen",
      price: "28,000AMD",
      id: 8,
    },
    {
      name: "Maximera",
      category: "kitchen",
      price: "29,000AMD",
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
