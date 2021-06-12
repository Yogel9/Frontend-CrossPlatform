/* import { Component, OnInit } from '@angular/core';*/
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient} from '@angular/common/http';
import { HttpService} from '../../services/http.service';
import {Furniture} from '../../models';

export interface Element {
  id: number;
  name: string;
  company: string;
  price: number;
  sizeX: number;
  sizeY: number;
  sizeZ: number;
}
const ELEMENT_DATA: Element[] = [
  {id: 1, name: 'Hydrogen', sizeX: 1.0079, price: 300, company: 'H', sizeY: 2, sizeZ: 2.0, },
  {id: 2, name: 'Helium', sizeX: 4.0026, price: 300, company: 'He', sizeY: 2, sizeZ: 2.8, },
  {id: 3, name: 'Lithium', sizeX: 6.941, price: 300, company: 'Li', sizeY: 2, sizeZ: 2.7, },
  {id: 4, name: 'Beryllium', sizeX: 9.0122,  price: 300, company: 'Be', sizeY: 2, sizeZ: 2, },
  {id: 5, name: 'Boron', sizeX: 10.811,  price: 300, company: 'B', sizeY: 2, sizeZ: 2, },
  {id: 6, name: 'Carbon', sizeX: 12.0107, price: 300,  company: 'C', sizeY: 2, sizeZ: 2, },
  {id: 7, name: 'Nitrogen', sizeX: 14.0067,  price: 300, company: 'N', sizeY: 2, sizeZ: 2, },
  {id: 8, name: 'Oxygen', sizeX: 15.9994, price: 300,  company: 'O', sizeY: 2, sizeZ: 2, },
  {id: 9, name: 'Fluorine', sizeX: 18.9984,  price: 300, company: 'F', sizeY: 2, sizeZ: 2, },
  {id: 10, name: 'Neon', sizeX: 20.1797, price: 300, company: 'Ne', sizeY: 2, sizeZ: 2, },
];

@Component({
  selector: 'app-furnitures',
  templateUrl: './furnitures.component.html',
  styleUrls: ['./furnitures.component.css'],
  providers: [HttpService],
})
export class FurnituresComponent implements OnInit, AfterViewInit {
  furs: Furniture[] = [];
  constructor(private http: HttpClient, private httpService: HttpService){}
  displayedColumns: string[] = ['id', 'name', 'company', 'price', 'sizeX', 'sizeY', 'sizeZ'];
  dataSource = new MatTableDataSource(ELEMENT_DATA); /* для таблицы с фтльтрами */ /* dataSource2 =  ELEMENT_DATA; /* для карточек /нам даже не нужна дата*/
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit(): void{
    this.httpService.getFurnitures().subscribe(res => { this.furs = res; });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
