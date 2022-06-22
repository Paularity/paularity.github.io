import { Component, OnInit } from "@angular/core";
import { BIBLE_STUDY } from "src/assets/bible-study.api";
import * as moment from "moment";
import { BehaviorSubject, map, Observable, startWith, tap } from "rxjs";
import { FormControl } from "@angular/forms";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { LightboxModalComponent } from "../collection/lightbox-modal/lightbox-modal.component";
import { BibleStudyService } from "src/app/core/services/bible-study-service/bible-study.service";
@Component({
  selector: "app-bible-study",
  templateUrl: "./bible-study.component.html",
  styleUrls: ["./bible-study.component.scss"],
})
export class BibleStudyComponent implements OnInit {
  bibleStudy: any[];
  selectedDate: string;

  selectedTopic: BehaviorSubject<any> = new BehaviorSubject(null);
  selectedRadioTopic: any;

  bibleControl: FormControl = new FormControl();
  bibleOptions: Observable<any>;

  constructor(
    public dialog: MatDialog,
    private bibleStudyService: BibleStudyService
  ) {}

  ngOnInit() {
    this.bibleOptions = this.bibleControl.valueChanges.pipe(
      startWith<string | any>(""),
      map((bs) => (typeof bs === "string" ? bs : bs.topic)),
      map((topic) =>
        topic ? this.filter() : this.bibleStudy.slice()
      ),
      tap((topic) => this.onFilter())
    );

    this.bibleStudyService.loadTopics();
    this.bibleStudyService.getTopics$().subscribe((res) => {
      this.bibleStudy = res.map((bs) => {
        bs.date = moment(bs.date).format("MMM DD YYYY");
        return bs;
      });
    });
  }

  openDialog(src) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { src, isVideo: true };
    const dialogRef = this.dialog.open(LightboxModalComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  filter() {
    return this.bibleStudy.filter(
      (option) =>
        option.topic
          .toLowerCase()
          .indexOf(this.selectedRadioTopic.topic.toLowerCase()) === 0
    );
  }

  onFilter() {
    console.log(this.selectedRadioTopic)
    let topic = this.bibleStudy.find((b) => b.date === this.selectedRadioTopic.date);
    this.selectedTopic.next(topic);
  }

  displayFn(bible?: any): string | undefined {
    return bible ? bible.topic : undefined;
  }
}
