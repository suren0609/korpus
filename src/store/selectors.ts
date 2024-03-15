import { RootState } from ".";

export const basketSliceSelecror = (state: RootState) => state.basket;
export const languageSliceSelector = (state: RootState) => state.language;
export const productSliceSelector = (state: RootState) => state.product;
export const favSliceSelector = (state: RootState) => state.favourite;
