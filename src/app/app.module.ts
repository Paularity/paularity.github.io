import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HomeComponent } from "./components/home/home.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, RoutingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./shared/material/material.module";
import { NavbarComponent } from './components/navbar/navbar.component';
import { DigitalBackgroundComponent } from './components/digital-background/digital-background.component';
import { MainComponent } from './components/main/main.component';
import { CollectionComponent } from './components/collection/collection.component';
import { CareerComponent } from './components/career/career.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SidebarComponent, NavbarComponent, DigitalBackgroundComponent, MainComponent, RoutingComponents, CollectionComponent, CareerComponent, ServicesComponent, ContactComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
