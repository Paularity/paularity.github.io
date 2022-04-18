import { MainRoute } from "./../../common/models/main-route.model";
import { CurrentPageService } from "./../../core/services/current-page.service";
import {
  trigger,
  transition,
  animate,
  group,
  query,
  style,
} from "@angular/animations";
import { Component, HostListener, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";
import { routeTransitionAnimations } from "./route-transition-animations";
import { CommonRoutes } from "src/app/common/routes/common-routes";
import { OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
  animations: [
    trigger("animRoutes", [
      transition(":increment", routeTransitionAnimations.right),
      transition(":decrement", routeTransitionAnimations.left),
    ]),
  ],
})
export class MainComponent implements OnInit, OnDestroy {
  animatedBoxes = Array(10).fill(0);
  animationState: number;
  private THIS_PAGE = "CurrentSelectedPage";
  private routeList = [];
  subs: Subscription[] = [];
  selectedPage = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private currentPageService: CurrentPageService
  ) {
    this.routeList = CommonRoutes.mainLinks;
  }
  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
  }

  ngOnInit() {
    this.setStorage();
  }

  @HostListener("window:load", [])
  unloadNotification() {
    this.subs.push(
      this.currentPageService.get().subscribe((res) => {
        sessionStorage.setItem(this.THIS_PAGE, res);
        this.selectedPage = res;
      })
    );
  }

  setStorage() {
    // caching
    if (sessionStorage.getItem(this.THIS_PAGE)) {
      let page = sessionStorage.getItem(this.THIS_PAGE);
      this.currentPageService.set(page);
    } else {
      this.currentPageService.set("/home");
      this.router.navigate(["/home"]);
    }
  }

  onActivate($event) {
    this.animationState = this.route.firstChild.snapshot.data["routeIndex"];
  }

  goToNextPage() {
    let currentRoute: MainRoute = this.routeList.find(
      (r) => r.link === this.currentPageService.value()
    );
    let nextRoute: MainRoute = this.routeList.find(
      (r) => r.sortOrder === currentRoute.sortOrder + 1
    );
    this.currentPageService.set(nextRoute.link);
    this.router.navigate([nextRoute.link]);
  }

  goToPreviousPage() {
    let currentRoute: MainRoute = this.routeList.find(
      (r) => r.link === this.currentPageService.value()
    );
    let prevRoute: MainRoute = this.routeList.find(
      (r) => r.sortOrder === currentRoute.sortOrder - 1
    );

    this.currentPageService.set(prevRoute.link);
    this.router.navigate([prevRoute.link]);
  }
}
