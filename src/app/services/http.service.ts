import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Furniture, Order, User} from '../models';

@Injectable()
export class HttpService{

  constructor(private http: HttpClient){ }

  getData(){
    return this.http.get('https://localhost:5001/api/Users/1');  /* ('assets/tsconfig.json');*/ /* package */
  }
 public getUser(): Observable<User[]>
  {
    return this.http.get<User[]>('https://localhost:5001/api/Users');
  }

  public getFurnitures(): Observable<Furniture[]>
  {
    return this.http.get<Furniture[]>('https://localhost:5001/api/Furnitures');
  }
}




