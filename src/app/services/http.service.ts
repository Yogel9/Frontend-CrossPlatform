import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService{

  constructor(private http: HttpClient){ }

  getData(){
    return this.http.get('https://localhost:5001/api/Users/1');  /* ('assets/tsconfig.json');*/ /* package */
  }
}
