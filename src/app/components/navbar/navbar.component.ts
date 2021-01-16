import { Component, OnInit } from "@angular/core";
import { MainRoute } from "src/app/common/models/main-route.model";
import { CommonRoutes } from "src/app/common/routes/common-routes";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  menus: MainRoute[];

  constructor() {
    this.menus = CommonRoutes.mainLinks;
  }

  ngOnInit() {
    this.playBgAudio();
  }

  clickedAudio() {
    let audio = new Audio();
    audio.src = "../../../assets/audio/menu-click.mp3";
    audio.load();
    audio.play();
  }

  hoveredAudio() {
    let audio = new Audio();
    audio.src = "../../../assets/audio/menu-hover.mp3";
    audio.load();
    audio.play();
  }

  playBgAudio() {
    let audio = new Audio();
    audio.src = "../../../assets/audio/bg-music.mp3";
    audio.load();
    audio.play();
    audio.autoplay = true;
    audio.loop = true;
  }
}
