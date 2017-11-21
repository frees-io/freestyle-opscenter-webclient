import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Presentational modules
import {  MdMenuModule,
          MdToolbarModule,
          MdButtonModule,
          MdSidenavModule,
          MdGridListModule,
          MdIconModule,
          MdListModule,
          MdProgressBarModule,
          MdTabsModule,
          MdRippleModule
        } from '@angular/material';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Services
import { MetricService } from './services/metric.service';
import { NavTreeDataService } from './services/nav-tree-data.service';

// Components
import { MsViewerComponent } from './ms-viewer/ms-viewer.component';
import { NavGridComponent } from './nav-grid/nav-grid.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingsComponent } from './settings/settings.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NavTreeNodeComponent } from './nav-tree-node/nav-tree-node.component';

@NgModule({
  declarations: [
    AppComponent,
    MsViewerComponent,
    NavGridComponent,
    PageNotFoundComponent,
    SettingsComponent,
    BreadcrumbComponent,
    NavTreeNodeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MdMenuModule,
    MdToolbarModule,
    MdButtonModule,
    MdSidenavModule,
    MdGridListModule,
    MdIconModule,
    MdListModule,
    MdProgressBarModule,
    MdTabsModule,
    MdRippleModule,
    NgxChartsModule
  ],
  providers: [MetricService, NavTreeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
