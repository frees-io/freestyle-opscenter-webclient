import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'frees-nav-grid',
  templateUrl: './nav-grid.component.html',
  styleUrls: ['./nav-grid.component.scss']
})
export class NavGridComponent implements OnInit {

  // TODO: Get this data from the server
  links = [1, 2, 3, 4];

  constructor() { }

  ngOnInit() { }

}
