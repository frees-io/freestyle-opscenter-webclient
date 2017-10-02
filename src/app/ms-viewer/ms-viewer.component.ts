import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Metric } from 'app/shared/metric.model';
import { MetricService } from 'app/services/metric.service';

@Component({
  selector: 'app-ms-viewer',
  templateUrl: './ms-viewer.component.html',
  styleUrls: ['./ms-viewer.component.scss']
})
export class MsViewerComponent implements OnInit {
  title = 'metric streaming';
  microserviceId: string;
  metric: Metric;
  subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private metricService: MetricService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.microserviceId = params.get('id'));
  }

  startListening(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    // this.subscription = this.msService.getSubject('handshake')
    this.subscription = this.metricService.getSubject()
      .subscribe(
        async (msg) => this.metric = new Metric(...(await msg).split(' '))
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
