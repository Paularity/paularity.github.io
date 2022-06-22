import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UUID } from "angular2-uuid";
import { BibleTopicService } from "src/app/core/bible-topic/bible-topic.service";
import { BibleTopic } from "./models/bible-topic.model";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit {
  topicForm: FormGroup;
  verseForm: FormGroup;
  listOfVerses = [];
  topicList: BibleTopic[] = [];

  constructor(
    private fb: FormBuilder,
    private bibleTopicService: BibleTopicService
  ) {}

  ngOnInit() {
    this.topicForm = this.fb.group({
      id: UUID.UUID(),
      name: "",
      videoUrl: "",
      date: "",
      verses: [],
    });

    this.verseForm = this.fb.group({
      id: UUID.UUID(),
      name: "",
      topicId: "",
      verses: [],
    });

    this.bibleTopicService.get().then((res) => {
      this.topicList = <BibleTopic[]>res.docs.map((d) => {
        let t: BibleTopic = {
          id: d.id,
          name: d.data().name,
          date: d.data().date,
          videoUrl: d.data().videoUrl,
          verses: d.data().verses,
        };

        return t;
      });
      console.log(this.topicList);
    });
  }

  addVerse(verse: string) {
    this.listOfVerses.push(verse);
  }

  deleteTopic(id) {
    this.bibleTopicService.delete(id);
  }

  onTopicFormSubmit() {
    this.topicForm.get("verses").setValue([]);
    if (this.topicForm.valid) {
      this.bibleTopicService.add(this.topicForm.value);
    }
  }

  onVerseFormSubmit() {
    this.verseForm.get("verses").setValue(this.listOfVerses);
    if (this.verseForm.valid) {
      console.log(this.verseForm.value);
    }
  }
}
