import { Component, OnInit } from "@angular/core";
import { BIBLE_STUDY } from "src/assets/bible-study.api";
import * as moment from "moment";
import { BehaviorSubject, map, Observable, startWith, tap } from "rxjs";
import { FormControl } from "@angular/forms";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { LightboxModalComponent } from "../collection/lightbox-modal/lightbox-modal.component";
@Component({
  selector: "app-bible-study",
  templateUrl: "./bible-study.component.html",
  styleUrls: ["./bible-study.component.scss"],
})
export class BibleStudyComponent implements OnInit {
  bibleStudy: any[];
  selectedDate: string;

  selectedTopic: BehaviorSubject<any> = new BehaviorSubject(null);

  bibleControl: FormControl = new FormControl();
  bibleOptions: Observable<any>;

  constructor(public dialog: MatDialog) {
    this.bibleStudy = BIBLE_STUDY.map((bs) => {
      bs.date = moment(bs.date).format("MMM DD YYYY");
      return bs;
    });
  }

  ngOnInit() {
    this.bibleOptions = this.bibleControl.valueChanges.pipe(
      startWith<string | any>(""),
      map((bs) => (typeof bs === "string" ? bs : bs.topic)),
      map((topic) => (topic ? this.filter(topic) : this.bibleStudy.slice())),
      tap((topic) => this.onFilter(topic))
    );
  }

  openDialog(src) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { src };
    const dialogRef = this.dialog.open(LightboxModalComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  filter(topic: string) {
    return this.bibleStudy.filter(
      (option) => option.topic.toLowerCase().indexOf(topic.toLowerCase()) === 0
    );
  }

  onFilter(bibleTopic?) {
    if (bibleTopic.length === 1) {
      let topic = this.bibleStudy.find((b) => b.date === bibleTopic[0].date);
      this.selectedTopic.next(topic);
    }
  }

  displayFn(bible?: any): string | undefined {
    return bible ? bible.topic : undefined;
  }
}
