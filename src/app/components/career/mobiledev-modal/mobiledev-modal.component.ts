import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ApplicationBuilt } from "../application-built.model";
import { APPLICATIONS_BUILT_LIST } from "../applications-built";

@Component({
  selector: "app-mobiledev-modal",
  templateUrl: "./mobiledev-modal.component.html",
  styleUrls: ["./mobiledev-modal.component.scss"],
})
export class MobiledevModalComponent implements OnInit {
  applicationBuiltList: ApplicationBuilt[] = [];

  data;

  constructor(
    public dialogRef: MatDialogRef<MobiledevModalComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.data = data;
  }

  ngOnInit() {
    this.applicationBuiltList = APPLICATIONS_BUILT_LIST;
  }

  getMobileApps(): ApplicationBuilt[] {
    return this.applicationBuiltList.filter((a) => a.type === "mobile");
  }
}
