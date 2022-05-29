import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvGuideRoutingModule } from './tv-guide-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    TvGuideRoutingModule
  ]
})
export class TvGuideModule { }
