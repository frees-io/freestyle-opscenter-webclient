import { Component } from '@angular/core';

@Component({
  selector: 'frees-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  links = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() { }

}
