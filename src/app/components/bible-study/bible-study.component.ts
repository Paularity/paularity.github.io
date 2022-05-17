import { Component, OnInit } from "@angular/core";
import { BIBLE_STUDY } from "src/assets/bible-study.api";
import * as moment from "moment";
import { BehaviorSubject } from "rxjs";
@Component({
  selector: "app-bible-study",
  templateUrl: "./bible-study.component.html",
  styleUrls: ["./bible-study.component.scss"],
})
export class BibleStudyComponent implements OnInit {
  bibleStudy: any[];
  selectedDate: string;

  selectedTopic: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {
    this.bibleStudy = BIBLE_STUDY.map((bs) => {
      bs.date = moment(bs.date).format("MMM DD YYYY");
      return bs;
    });
  }

  ngOnInit() {
    // this.onFilter();
  }

  onFilter(bibleTopic?) {
    let topic = this.bibleStudy.find((b) => b.date === bibleTopic.date);
    this.selectedTopic.next(topic);
  }
}
