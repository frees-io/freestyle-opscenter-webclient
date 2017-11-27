import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

import { NavGridComponent } from './nav-grid/nav-grid.component';
import { MsViewerComponent } from './ms-viewer/ms-viewer.component';
import { SettingsComponent } from './settings/settings.component';
import { AddNewMsComponent } from './add-new-ms/add-new-ms.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: NavGridComponent, data: { breadcrumb: 'Home' } },
  { path: 'ms/:id', component: MsViewerComponent, data: { breadcrumb: 'MS' } },
  { path: 'settings', component: SettingsComponent, data: { breadcrumb: 'Settings' } },
  { path: 'new', component: AddNewMsComponent, data: { breadcrumb: 'Add microservice' }  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
