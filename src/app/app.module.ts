import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HomeComponent } from "./components/home/home.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, RoutingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./shared/material/material.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DigitalBackgroundComponent } from "./components/digital-background/digital-background.component";
import { MainComponent } from "./components/main/main.component";
import { CollectionComponent } from "./components/collection/collection.component";
import { CareerComponent } from "./components/career/career.component";
import { ServicesComponent } from "./components/services/services.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LightboxModalComponent } from "./components/collection/lightbox-modal/lightbox-modal.component";
// import { AngularFireModule } from "@angular/fire/compat";
// import { AngularFireAnalyticsModule } from "@angular/fire/compat/analytics";
// import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { environment } from "../environments/environment";
import { WebdevModalComponent } from "./components/career/webdev-modal/webdev-modal.component";
import { MobiledevModalComponent } from "./components/career/mobiledev-modal/mobiledev-modal.component";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    DigitalBackgroundComponent,
    MainComponent,
    RoutingComponents,
    CollectionComponent,
    CareerComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    LightboxModalComponent,
    WebdevModalComponent,
    MobiledevModalComponent,
  ],
  entryComponents: [LightboxModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAnalyticsModule,
    // AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
