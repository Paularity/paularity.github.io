import { IdName } from "../../base-firestore/IdName.model";

export interface BibleTopic extends IdName {
  videoUrl: string;
  date: string;
  verses: any[];
}
