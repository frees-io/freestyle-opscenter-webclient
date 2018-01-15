import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
// Operators
import { filter, map, mergeAll } from 'rxjs/operators';

// TODO: Unbind tag selector from MS viewer
import { MatTabGroup } from '@angular/material/tabs';

import { Metric } from 'app/shared/metric.model';
import { MetricService } from 'app/services/metric.service';

@Component({
  selector: 'frees-ms-viewer',
  templateUrl: './ms-viewer.component.html',
  styleUrls: ['./ms-viewer.component.scss']
})
export class MsViewerComponent implements OnInit {

  @Input() id?: string;
  @ViewChild(MatTabGroup) tabGroup: MatTabGroup;

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
    domain: ['#04B3B3', '#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private route: ActivatedRoute,
              private metricService: MetricService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.microserviceId = this.id ? this.id : params.get('id');
      this.metrics = this.metricsPool.sort(() => Math.random() - 0.5).slice(0, 5);
      this.chartData[0].name = this.metrics[0];
      this.tabGroup.selectedIndex = 0;
      this.startListening(this.microserviceId);
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

  startListening(microserviceName: string): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    /**
     * By using mergeAll what we are achieving is the conversion from the
     * higher-order Observable into a first-order Observable which concurrently
     * delivers all values that are emitted on the inner Observables, which in
     * our case are Promises coming from the FileReader object.
     * Also, is needed to note that we are typing the getSubject function with a
     * string type parameter to be able to acces the split property, because
     * after the mergeAll we are getting a string and not a Promise<string>.
     */
    this.subscription = this.metricService.getSubject().pipe(
      mergeAll(1),
      filter(metric => metric.microservice === `microservice${microserviceName}`)
    )
    .subscribe(
      (metric) => {
        this.metric = metric;
        this.addData(this.metric.value);
      }
    );
  }

  isCurrentlyListening(): boolean {
    return (this.subscription && !this.subscription.closed);
  }

  toggleListening(): void {
    this.isCurrentlyListening() ? this.stopListening() : this.startListening(this.microserviceId);
  }

  stopListening(): void {
    this.subscription.unsubscribe();
  }

}
