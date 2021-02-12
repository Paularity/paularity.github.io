import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: "root",
})
export class CurrentPageService {
  private currentPage = new BehaviorSubject<string>("");
  constructor() {}

  set(id) {
    this.currentPage.next(id);
    // localStorage.setItem(this.SHUTDOWN_ID, id);
    // location.reload();
  }

  value() {
    return this.currentPage.getValue();
  }

  get() {
    return this.currentPage.asObservable();
  }
}
