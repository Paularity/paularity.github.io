import { ContactComponent } from "./components/contact/contact.component";
import { ServicesComponent } from "./components/services/services.component";
import { CareerComponent } from "./components/career/career.component";
import { HomeComponent } from "./components/home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CollectionComponent } from "./components/collection/collection.component";
import { BibleStudyComponent } from "./components/bible-study/bible-study.component";

const routes: Routes = [
  { path: "home", component: HomeComponent, data: { routeIndex: 0 } },
  {
    path: "collection",
    component: CollectionComponent,
    data: { routeIndex: 1 },
  },
  { path: "skills", component: CareerComponent, data: { routeIndex: 2 } },
  {
    path: "services",
    component: ServicesComponent,
    data: { routeIndex: 3 },
  },
  {
    path: "contact",
    component: ContactComponent,
    data: { routeIndex: 4 },
  },
  {
    path: "biblestudy",
    component: BibleStudyComponent,
    // data: { routeIndex: 5 },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
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
