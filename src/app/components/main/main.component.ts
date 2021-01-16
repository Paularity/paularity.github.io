import { trigger, transition, animate, group, query, style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";
import { routeTransitionAnimations } from "./route-transition-animations";
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
  animations: [
    trigger('animRoutes', [
      transition(':increment', routeTransitionAnimations.right),
      transition(':decrement', routeTransitionAnimations.left),
    ]),
  ],
})
export class MainComponent implements OnInit {
  animatedBoxes = Array(10).fill(0);
  animationState: number;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.router.navigate(["/home"]);
  }

  onActivate($event) {
    this.animationState = this.route.firstChild.snapshot.data['routeIndex'];
  }
}
