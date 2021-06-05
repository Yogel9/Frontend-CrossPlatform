/* import { Component, OnInit } from '@angular/core';*/
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  position: number;
  name: string;
  company: string;
  weight: number;
  height: number;
  length: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, company: 'H', height: 2, length: 2.0, },
  {position: 2, name: 'Helium', weight: 4.0026, company: 'He', height: 2, length: 2.8, },
  {position: 3, name: 'Lithium', weight: 6.941, company: 'Li', height: 2, length: 2.7, },
  {position: 4, name: 'Beryllium', weight: 9.0122, company: 'Be', height: 2, length: 2, },
  {position: 5, name: 'Boron', weight: 10.811, company: 'B', height: 2, length: 2, },
  {position: 6, name: 'Carbon', weight: 12.0107, company: 'C', height: 2, length: 2, },
  {position: 7, name: 'Nitrogen', weight: 14.0067, company: 'N', height: 2, length: 2, },
  {position: 8, name: 'Oxygen', weight: 15.9994, company: 'O', height: 2, length: 2, },
  {position: 9, name: 'Fluorine', weight: 18.9984, company: 'F', height: 2, length: 2, },
  {position: 10, name: 'Neon', weight: 20.1797, company: 'Ne', height: 2, length: 2, },
];

@Component({
  selector: 'app-furnitures',
  templateUrl: './furnitures.component.html',
  styleUrls: ['./furnitures.component.css']
})
export class FurnituresComponent implements  AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'company', 'weight', 'height', 'length'];
  dataSource = new MatTableDataSource(ELEMENT_DATA); /* для таблицы с фтльтрами */
  dataSource2 = ELEMENT_DATA; /* для карточек */
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
