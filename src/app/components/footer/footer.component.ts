import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
 /* templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']*/
  template: `
    <p>
      Made with <3 by <a href="https://twitter.com/chrisoncode">Chris from Scotch</a>
    </p>
      `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
