import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'frees-ms-viewer',
  templateUrl: './ms-viewer.component.html',
  styleUrls: ['./ms-viewer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MsViewerComponent implements OnInit {

  @Input() id?: string;

  title = 'metric streaming';
  microserviceId: string;

  // This is representing the available metrics for this microservice
  metrics = [];
  metricsPool = ['Storage Load', 'Pending Tasks', 'Active Tasks',
            'Blocked Tasks', 'Pending Internal Tasks', 'Active Internal Tasks',
            'Active Threads', 'Memory Load', 'Watt Consumption', 'Network Throughput',
            'Current Topics', 'Partitions', 'Request Count', 'Current Connections'];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.microserviceId = this.id ? this.id : params.get('id');
      this.metrics = this.metricsPool.sort(() => Math.random() - 0.5).slice(0, 5);
    });
  }

}
