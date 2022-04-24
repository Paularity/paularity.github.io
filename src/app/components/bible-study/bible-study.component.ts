import { Component, OnInit } from "@angular/core";
import { BIBLE_STUDY } from "src/assets/bible-study.api";

@Component({
  selector: "app-bible-study",
  templateUrl: "./bible-study.component.html",
  styleUrls: ["./bible-study.component.scss"],
})
export class BibleStudyComponent implements OnInit {
  bibleStudy: any[];
  selectedDate: string;
  selectedTopic;
  constructor() {
    this.bibleStudy = BIBLE_STUDY;
  }

  ngOnInit() {
    this.onFilter();
  }

  onFilter(bibleTopic?) {
    this.selectedTopic = this.bibleStudy.find((b) => b.date === "24/04/2022");
  }
}
