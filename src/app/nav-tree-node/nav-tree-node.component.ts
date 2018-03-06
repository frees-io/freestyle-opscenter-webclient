import { Component, Input, TemplateRef, HostListener } from '@angular/core';

import { NavTreeNode } from 'app/shared/nav-tree-node.model';

@Component({
  selector: 'frees-nav-tree-node',
  templateUrl: './nav-tree-node.component.html',
  styleUrls: ['./nav-tree-node.component.scss']
})
export class NavTreeNodeComponent {

  @Input() data: NavTreeNode;
  @Input() showLabel = true;
  @Input() labelTemplate: TemplateRef<any>;
  @Input() isExpanded = true;

  // This is needed to prevent the click on a specific leaf to
  // bubble up to its ancestor nodes, making them to trigger a toggle
  @HostListener('click', ['$event']) onClickListener(event: Event) { event.stopPropagation(); }

  constructor() { }

  /**
   * The method that open/closes a tree branch node
   */
  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}
