import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';
import { HttpClient} from '@angular/common/http';
import {Furniture, Order, OrderInfo, User} from '../../models';
import {FormControl, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [HttpService],
})
export class OrderComponent implements OnInit {
  selectId: number;
  MyOrderInf: OrderInfo[] = [];
  MyOrderEd: Order[] = [] ;
  MyFur: Furniture[] = [];


  public formGroup: FormGroup = new FormGroup({
    select:   new FormControl(''),
    /*name:     new FormControl(''),
    price:    new FormControl(''),
    address:  new FormControl(''),
    delivery: new FormControl(''),*/
  });

  constructor(private http: HttpClient, private httpService: HttpService){}
  ngOnInit(): void{
    this.httpService.getOrder(1).subscribe(res => { this.MyOrderInf = res; });
  }/*1-id клиента*/

  public EditInfo()
  {
    this.selectId = this.formGroup.get(['select']).value;
    this.httpService.getOrdNotInf(this.selectId).subscribe(res => { this.MyOrderEd = res; });
    this.httpService.getMyFur(this.selectId).subscribe(res => { this.MyFur = res; } );
  }

  log() {
    console.log(this.formGroup.get(['select']).value);
   /* console.log(this.formGroup.get(['name']).value);
    console.log(this.formGroup.get(['price']).value);
    console.log(this.formGroup.get(['address']).value);
    console.log(this.formGroup.get(['delivery']).value);*/
    console.log(this.formGroup.value);
  }
}
