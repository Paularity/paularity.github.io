import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MobiledevModalComponent } from "./mobiledev-modal/mobiledev-modal.component";
import { WebdevModalComponent } from "./webdev-modal/webdev-modal.component";

@Component({
  selector: "app-career",
  templateUrl: "./career.component.html",
  styleUrls: ["./career.component.scss"],
})
export class CareerComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openWebDevDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {};
    const dialogRef = this.dialog.open(WebdevModalComponent, dialogConfig);
  }

  openMobileDevDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {};
    const dialogRef = this.dialog.open(MobiledevModalComponent, dialogConfig);
  }
}
