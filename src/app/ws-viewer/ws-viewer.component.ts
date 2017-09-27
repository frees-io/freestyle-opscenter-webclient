import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { WsService } from './ws.service';

@Component({
  selector: 'app-ws-viewer',
  templateUrl: './ws-viewer.component.html',
  styleUrls: ['./ws-viewer.component.scss']
})
export class WsViewerComponent implements OnInit {
  title = 'WebSockets example';
  value: string;
  subscription: Subscription;

  constructor(private wsService: WsService) { }

  ngOnInit() { }

  startListening(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.wsService.getSubject('handshake')
      .subscribe(
        async (msg) => this.value = await msg
      );
  }

  isCurrentlyListening(): boolean {
    return (this.subscription && !this.subscription.closed);
  }

  toggleListening(): void {
    this.isCurrentlyListening() ? this.stopListening() : this.startListening();
  }

  stopListening(): void {
    this.subscription.unsubscribe();
  }

}
