import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { MdTabGroup } from '@angular/material';

import { Metric } from 'app/shared/metric.model';
import { MetricService } from 'app/services/metric.service';

@Component({
  selector: 'frees-ms-viewer',
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

  // Start charts
  chartData = [
    {
      'name': 'name',
      'series': [
        {
          'name': '0',
          'value': 0
        }
      ]
    }
  ];

  // options
  animations = false;
  autoScale = false;
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Percentage %';
  yAxisMinScale = 100;

  colorScheme = {
    domain: ['#673AB7', '#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private route: ActivatedRoute,
              private metricService: MetricService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.microserviceId = params.get('id');
      this.metrics = this.metricsPool.sort(() => Math.random() - 0.5).slice(0, 5);
      this.tabGroup.selectedIndex = 0;
      this.chartData[0].name = this.metrics[0];
    });
  }

  addData(value?: number) {
    const nextEntry = +(this.chartData[0].series[this.chartData[0].series.length - 1]).name + 1;
    const randomValue = (value) ? value : Math.random() * 100;
    const newSeries = {
      name: nextEntry.toString(),
      value: randomValue
    };
    this.chartData[0].series.push(newSeries);
    this.chartData[0].series = this.chartData[0].series.slice(-9, 10);
    this.chartData = [...this.chartData];
  }

  startListening(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    // this.subscription = this.metricService.getSubject('handshake')
    this.subscription = this.metricService.getSubject()
      .subscribe(
        async (msg) => {
          this.metric = new Metric(...(await msg).split(' '));
          this.addData(this.metric.value);
        }
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
