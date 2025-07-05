import { v4 as uuidv4 } from 'uuid';

interface IBasket {
  id: string;
  basketItems: IBasketItem[];
}
interface IBasketItem {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
  category: string;
}

export class Basket implements IBasket {
  id=uuidv4();
  basketItems: IBasketItem[];
}
