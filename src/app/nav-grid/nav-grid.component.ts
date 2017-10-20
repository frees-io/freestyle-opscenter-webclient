import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'frees-nav-grid',
  templateUrl: './nav-grid.component.html',
  styleUrls: ['./nav-grid.component.scss']
})
export class NavGridComponent implements OnInit {

  links = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() { }

  ngOnInit() { }

}
