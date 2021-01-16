import { Component, OnInit } from "@angular/core";
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from "angular-animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [fadeInOnEnterAnimation(), fadeOutOnLeaveAnimation()],
})
export class HomeComponent implements OnInit {

  animatedBoxes = Array(10).fill(0);

  constructor() {}

  ngOnInit() {}
}
