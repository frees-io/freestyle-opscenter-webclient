import { Component, OnInit } from '@angular/core';

import { NavTreeDataService } from 'app/services/nav-tree-data.service';

import { NavTreeNode } from 'app/shared/nav-tree-node.model';


@Component({
  selector: 'frees-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public navTreeObject: NavTreeData;

  constructor(private navTreeDataService: NavTreeDataService) { }

  ngOnInit() {
    this.navTreeDataService.getJSON()
      .subscribe(data => this.navTreeObject = data);
  }

}
