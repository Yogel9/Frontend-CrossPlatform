import {User} from './User';
import {Observable} from 'rxjs';
import {Furniture} from './Furniture';

export class Order{
  OrderId: number;
  client: User;
  address: string;
  deliveryType: string;
  price: number;
  Furniture: Furniture[];
  PriceDelivery: number;
}
