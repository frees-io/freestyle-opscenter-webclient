import { Component, OnInit } from '@angular/core';

import { NavTreeDataService } from 'app/services/nav-tree-data.service';

// import { NavTreeNode } from 'app/shared/nav-tree-node.model';
import navTreeData from 'app/shared/nav-tree-data.json';


@Component({
  selector: 'frees-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public navTreeObject: NavTreeData;

  // constructor(private navTreeDataService: NavTreeDataService) { }
  constructor() { }

  ngOnInit() {
    // this.navTreeDataService.getJSON()
    //   .subscribe(data => this.navTreeObject = data);
    // console.log(this.navTreeObject);
    // this.navTreeObject = new NavTreeNode(navTreeData);
    this.navTreeObject = navTreeData;
  }

}
