import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
// Operators
import { filter, map, mergeAll } from 'rxjs/operators';

import { Metric } from 'app/shared/proto/metrics_pb';
import { MetricService } from 'app/services/metric.service';

@Component({
  selector: 'frees-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() microserviceId: string;
  @Input() nodeId: string;
  @Input() metricId: string;

  metricData: Metric.AsObject;
  subscription: Subscription;

  // Array keeping chart data points, it has to follow ngx-charts conventions
  chartData = [{
    'name': 'name',
    'series': [
      {
        'name': '0',
        'value': 0
      }
    ]
  }];

  // Chart options
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

  constructor(private metricService: MetricService) { }

  ngOnInit() {
    this.chartData[0].name = this.microserviceId;
    this.startListening(this.microserviceId, this.nodeId, this.metricId);
  }

  addData(value: number) {
    const nextEntry = +(this.chartData[0].series[this.chartData[0].series.length - 1]).name + 1;
    const newSeries = {
      name: nextEntry.toString(),
      value: value
    };
    this.chartData[0].series.push(newSeries);
    this.chartData[0].series = this.chartData[0].series.slice(-9, 10);
    this.chartData = [...this.chartData];
  }

  startListening(microserviceName: string, nodeName: string, metricName: string): void {
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
      map(_ => _.toObject()),
      filter(metric =>  metric.microservice === microserviceName &&
                        metric.node === nodeName &&
                        metric.metric === metricName)
      )
      .subscribe(
        (metric) => {
          this.metricData = metric;
          this.addData(this.metricData.value);
        }
      );
  }

  isCurrentlyListening(): boolean {
    return (this.subscription && !this.subscription.closed);
  }

  toggleListening(): void {
    this.isCurrentlyListening() ? this.stopListening() : this.startListening(this.microserviceId, this.nodeId, this.metricId);
  }

  stopListening(): void {
    this.subscription.unsubscribe();
  }

}
