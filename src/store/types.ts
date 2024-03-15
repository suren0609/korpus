export interface ILanguageState {
  language: string;
}

export interface IProd {
  name: string;
  category: string;
  price: number;
  id: number;
}

export interface IBasketState {
  basket: IProd[];
  isBasketActive: boolean;
}

export interface IFavState {
  favourite: IProd[];
}
