import { Component } from '@angular/core';
import { Router, Event, ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  private breadcrumbs: Array<string>;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((routeEvent) => { this.onRouteEvent(routeEvent); });
  }

  private onRouteEvent(routeEvent: Event) {
    if (!(routeEvent instanceof NavigationEnd)) { return; }

    let traversingRoute = this.router.routerState.root.snapshot;

    this.breadcrumbs = [];

    while (traversingRoute.firstChild != null) {
      traversingRoute = traversingRoute.firstChild;

      if (traversingRoute.routeConfig === null) { continue; }
      if (!traversingRoute.routeConfig.path) { continue; }
      if (!traversingRoute.data['breadcrumb']) { continue; }

      this.breadcrumbs.push(traversingRoute.data['breadcrumb']);
    }

    for (const prop of Object.values(this.route.snapshot.firstChild.params)) {
      this.breadcrumbs[this.breadcrumbs.length - 1] += prop;
    }

  }

}
