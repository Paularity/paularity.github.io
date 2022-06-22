import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TvGuideRoutingModule } from "./tv-guide-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MaterialModule } from "../shared/material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TvGuideRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TvGuideModule {}
