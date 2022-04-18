import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MainRoute } from "src/app/common/models/main-route.model";
import { CommonRoutes } from "src/app/common/routes/common-routes";
import { CurrentPageService } from "src/app/core/services/current-page.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  menus: MainRoute[];

  constructor(
    private currentPageService: CurrentPageService,
    private router: Router
  ) {
    this.menus = CommonRoutes.mainLinks;
  }

  ngOnInit() {}

  clickedAudio() {
    let audio = new Audio();
    audio.src = "../../../assets/audio/menu-click.mp3";
    audio.load();
    audio.play();
    this.currentPageService.set(this.router.url);
  }

  hoveredAudio() {
    let audio = new Audio();
    audio.src = "../../../assets/audio/menu-hover.mp3";
    audio.load();
    audio.play();
  }
}
