import { Injectable } from "@angular/core";
import { child, get, getDatabase, onValue, ref } from "firebase/database";
import { initializeApp } from "firebase/app";
import { environment } from "src/environments/environment";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BibleStudyService {
  private topics: BehaviorSubject<any> = new BehaviorSubject([]);

  private app;
  private db;
  private dbRef;
  constructor() {}

  private _load() {
    this.app = initializeApp(environment.firebase);
    this.dbRef = ref(getDatabase(this.app));
    this.db = getDatabase();
  }

  loadTopics() {
    this._load();
    onValue(ref(this.db, '/biblestudy/'), (snapshot) => {
      const data = snapshot.val();
      this.topics.next(data);
    });
  }

  getTopics$(){
    return this.topics.asObservable();
  }
}
