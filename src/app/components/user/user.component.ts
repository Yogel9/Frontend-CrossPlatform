import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpService} from '../../services/http.service';
import {Furniture} from '../../models';

export class User{
  constructor(public name: string, public age: number){}
}

@Component({
  selector: 'app-user',
  template: `<ul>
    <li *ngFor="let user of users">
      <p>Имя пользователя: {{user?.name}}</p>
      <p>Возраст пользователя: {{user?.age}}</p>
    </li>
    <li *ngFor="let Furn of furs">
      <p>Имя пользователя: {{Furn?.name}}</p>
      <p>Возраст пользователя: {{Furn?.company}}</p>
    </li>
  </ul>`,
  providers: [HttpService],
  /*templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']*/
})
export class UserComponent implements OnInit {

  users: User[] = [];
  furs: Furniture[] = [];
  user: User;
  constructor(private http: HttpClient, private httpService: HttpService){}
  ngOnInit(): void{
    this.httpService.getUser().subscribe(res => { this.users = res; });
    this.httpService.getFurnitures().subscribe(res => { this.furs = res; });
    /*this.httpService.getData().subscribe((data: any) => this.users = data[  " userList " ]);*/
    /*this.httpService.getData().subscribe((data: any) => this.user = new User(data.name, data.age));
   /* this.http.get('assets/package.json').subscribe((data: any) => this.user = new User(data.name, data.age));*/
}
}
