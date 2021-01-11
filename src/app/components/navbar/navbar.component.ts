import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menus = [
    {name: 'home', sortOrder: 0},
    {name: 'collection', sortOrder: 1},
    {name: 'play', sortOrder: 2},
    {name: 'career', sortOrder: 3},
    {name: 'store', sortOrder: 4},
  ]

  constructor() { }

  ngOnInit() {
    this.playBgAudio();
  }

  clickedAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/audio/menu-click.mp3";
    audio.load();
    audio.play();
  }

  hoveredAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/audio/menu-hover.mp3";
    audio.load();
    audio.play();
  }

  playBgAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/audio/bg-music.mp3";
    audio.load();
    audio.play();
  }

}
