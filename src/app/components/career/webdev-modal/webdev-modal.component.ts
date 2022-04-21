import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ApplicationBuilt } from "../application-built.model";
import { APPLICATIONS_BUILT_LIST } from "../applications-built";

@Component({
  selector: "app-webdev-modal",
  templateUrl: "./webdev-modal.component.html",
  styleUrls: ["./webdev-modal.component.scss"],
})
export class WebdevModalComponent implements OnInit {
  applicationBuiltList: ApplicationBuilt[] = [];

  data;

  constructor(
    public dialogRef: MatDialogRef<WebdevModalComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.data = data;
  }

  ngOnInit() {
    this.applicationBuiltList = APPLICATIONS_BUILT_LIST;
  }

  getWebApps(): ApplicationBuilt[] {
    return this.applicationBuiltList.filter((a) => a.type === "web");
  }
}
