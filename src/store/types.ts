export interface ILanguageState {
  language: string;
}

export interface IProd {
  name: string;
  category: string;
  price: string;
  id: number;
}

export interface IBasketState {
  basket: IProd[];
  isBasketActive: boolean;
}
