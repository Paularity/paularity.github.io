import { Injectable } from "@angular/core";
import { BaseFirestoreService } from "../base-firestore/base-firestore.service";
import { BibleTopic } from "./models/bible-topic.model";

@Injectable({
  providedIn: "root",
})
export class BibleTopicService extends BaseFirestoreService<BibleTopic> {
  constructor() {
    super("Topics");
  }
}
