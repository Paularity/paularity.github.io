import { ContactComponent } from "./components/contact/contact.component";
import { ServicesComponent } from "./components/services/services.component";
import { CareerComponent } from "./components/career/career.component";
import { HomeComponent } from "./components/home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CollectionComponent } from "./components/collection/collection.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "collection", component: CollectionComponent },
  { path: "career", component: CareerComponent },
  { path: "services", component: ServicesComponent },
  { path: "contact", component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = [
  HomeComponent,
  CollectionComponent,
  CareerComponent,
  ServicesComponent,
  ContactComponent,
];
