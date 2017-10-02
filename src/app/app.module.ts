import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Presentational modules
import {  MdMenuModule,
          MdToolbarModule,
          MdButtonModule,
          MdSidenavModule,
          MdGridListModule,
          MdIconModule,
          MdListModule,
          MdProgressBarModule
        } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Services
import { MetricService } from './services/metric.service';

// Components
import { MsViewerComponent } from './ms-viewer/ms-viewer.component';
import { NavGridComponent } from './nav-grid/nav-grid.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    MsViewerComponent,
    NavGridComponent,
    PageNotFoundComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    MdMenuModule,
    MdToolbarModule,
    MdButtonModule,
    MdSidenavModule,
    MdGridListModule,
    MdIconModule,
    MdListModule,
    MdProgressBarModule
  ],
  providers: [MetricService],
  bootstrap: [AppComponent]
})
export class AppModule { }
