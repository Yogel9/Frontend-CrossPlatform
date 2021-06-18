import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Furniture, Order, OrderInfo, User} from '../models';

@Injectable()
export class HttpService{
  public environment = 'https://localhost:5001/api/';
  constructor(private http: HttpClient){ }
 public getUser(): Observable<User[]>
  {
    return this.http.get<User[]>('https://localhost:5001/api/Users');
  }

  public getFurnitures(): Observable<Furniture[]>
  {
    return this.http.get<Furniture[]>('https://localhost:5001/api/Furnitures');
  }
  public getOrder( id: number): Observable<OrderInfo[]>
  {
    /*https://localhost:5001/api/Orders/OrderClient?IdClient=1*/
    return this.http.get<OrderInfo[]>(`${this.environment}${'Orders/OrderClient?IdClient='}${id}`);
  }

  public getOrdNotInf( idorder: number): Observable<Order[]>
  {
    /*https://localhost:5001/api/Orders/OrderClient?IdClient=1*/
    return this.http.get<Order[]>(`${this.environment}${'Orders/OneOrdForEdit?ORD='}${idorder}`);
  }

  public getMyFur(idorder: number): Observable<Furniture[]>
  {
    return this.http.get<Furniture[]>(`${this.environment}${'Orders/MyFur?IdOrder='}${idorder}`);
  }
 public putMyOrder(): any
   {
     const body = { orderId: 1, Address: 'b45',  deliveryType: 'Express'};
     return this.http.put('https://localhost:5001/api/Orders/1', body);
   }
   public postData( ord: Order ): any
   {
    return this.http.post('https://localhost:5001/api/Orders', ord);
  }
}




