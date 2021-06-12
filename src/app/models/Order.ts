import {User} from './User';
import {Observable} from 'rxjs';
import {Furniture} from './Furniture';

export interface Order{
  id: number;
  client: User;
  address: string;
  DeliveryType: string;
  price: number;
  Furnitures: Observable<Furniture[]>;
  PriceDelivery: number;
}
