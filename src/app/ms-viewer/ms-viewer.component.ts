import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { MdTabGroup } from '@angular/material';

import { Metric } from 'app/shared/metric.model';
import { MetricService } from 'app/services/metric.service';

@Component({
  selector: 'app-ms-viewer',
  templateUrl: './ms-viewer.component.html',
  styleUrls: ['./ms-viewer.component.scss']
})
export class MsViewerComponent implements OnInit {

  @ViewChild(MdTabGroup) tabGroup: MdTabGroup;

  title = 'metric streaming';
  microserviceId: string;
  metric: Metric;
  subscription: Subscription;

  // This is representing the available metrics for this microservice
  metrics = [];
  metricsPool = ['Storage Load', 'Pending Tasks', 'Active Tasks',
            'Blocked Tasks', 'Pending Internal Tasks', 'Active Internal Tasks',
            'Active Threads', 'Memory Load', 'Watt Consumption', 'Network Throughput',
            'Current Topics', 'Partitions', 'Request Count', 'Current Connections'];

  constructor(private route: ActivatedRoute,
              private metricService: MetricService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.microserviceId = params.get('id');
      this.metrics = this.metricsPool.sort(() => Math.random() - 0.5).slice(0, 6);
      this.tabGroup.selectedIndex = 0;
    });
  }

  startListening(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    // this.subscription = this.metricService.getSubject('handshake')
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
