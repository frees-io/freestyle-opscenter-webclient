import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'frees-settings-item',
  templateUrl: './settings-item.component.html',
  styleUrls: ['./settings-item.component.scss'],
  animations: [
    trigger('itemState', [
      state('inactive', style({
        opacity: 0,
        transform: 'scale(0.1)'
      })),
      state('active', style({})),
      transition('inactive => active', animate('150ms ease-in')),
      transition('active => inactive', animate('150ms ease-out'))
    ])
  ]
})
export class SettingsItemComponent implements OnInit {

  @Input() microservice: string;
  public state = 'inactive';

  constructor() { }

  ngOnInit() { }

  onHover() {
    // This could look redundant, but it is a clearer way to express it
    this.toggleState();
  }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

}
