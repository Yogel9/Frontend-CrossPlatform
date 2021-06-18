import { Component, OnInit } from '@angular/core';
import {Furniture, Order, OrderInfo, User} from '../../models';
import {HttpService} from '../../services/http.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css'],
  providers: [HttpService],
})
export class AddorderComponent implements OnInit {
  ord: Order;
  TypeDelivery: string;
  NameFurn: string;
  CompanyName: string;
  PriceFur: number;
  address: string;
  OrderId: number;
  client: User;
  price: number;
  constructor(private http: HttpClient, private httpService: HttpService) { }
  ngOnInit(): void {
  }
 public construct(): any
 {
   this.ord.Furniture[0].name = this.NameFurn ;
   this.ord.Furniture[0].company = this.CompanyName;
   this.ord.Furniture[0].price = this.PriceFur;
   this.ord.OrderId = 1;
   this.ord.client.id = 1;
   this.ord.address = this.address;
   this.ord.deliveryType = this.TypeDelivery;
   this.httpService.postData( this.ord );
 }
}
