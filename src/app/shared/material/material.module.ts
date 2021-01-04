import { NgModule } from "@angular/core";

import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatBadgeModule } from "@angular/material/badge";
import { MatInputModule } from "@angular/material/input";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatMenuModule } from "@angular/material/menu";
import { MatStepperModule } from "@angular/material/stepper";
import { MatSliderModule } from "@angular/material/slider";
import { MatToolbarModule } from "@angular/material/toolbar";

// Add Material Components here...
const MaterialComponents = [
  MatToolbarModule,
  MatMenuModule,
  MatPaginatorModule,
  MatAutocompleteModule,
  MatCardModule,
  MatButtonModule,
  MatRippleModule,
  MatSlideToggleModule,
  MatExpansionModule,
  MatTooltipModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatDialogModule,
  MatBadgeModule,
  MatInputModule,
  MatButtonToggleModule,
  MatDividerModule,
  MatListModule,
  ScrollingModule,
  MatIconModule,
  MatCheckboxModule,
  DragDropModule,
  MatStepperModule,
  MatSliderModule,
];

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
