import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Presentational modules
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';

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
import { AddNewMsComponent } from './add-new-ms/add-new-ms.component';

@NgModule({
  declarations: [
    AppComponent,
    MsViewerComponent,
    NavGridComponent,
    PageNotFoundComponent,
    SettingsComponent,
    BreadcrumbComponent,
    NavTreeNodeComponent,
    AddNewMsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatTabsModule,
    MatInputModule,
    MatRippleModule,
    NgxChartsModule
  ],
  providers: [MetricService, NavTreeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
