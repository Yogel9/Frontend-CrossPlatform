import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  public goToMenu(): void {
    this.router.navigate(['menu']);
  }
  public goToAuth(): void {
    this.router.navigate(['auth']);
  }
  public goToHome(): void {
    this.router.navigate(['']);
  }
}
