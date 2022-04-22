import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
// import { MatDialog, MatDialogConfig } from "@angular/material";
import { BehaviorSubject, Observable } from "rxjs";
import { COLLECTION_LIST } from "./collection_list";
import { LightboxModalComponent } from "./lightbox-modal/lightbox-modal.component";
@Component({
  selector: "app-collection",
  templateUrl: "./collection.component.html",
  styleUrls: ["./collection.component.scss"],
})
export class CollectionComponent implements OnInit {
  imagePorts: any[];
  pinCode: BehaviorSubject<String> = new BehaviorSubject<String>("");
  showInputPinCode: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(
    false
  );

  private SECRET_CODE = "5139";

  constructor(public dialog: MatDialog) {
    this.imagePorts = COLLECTION_LIST.collections;
  }

  openDialog(src) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { src };
    const dialogRef = this.dialog.open(LightboxModalComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  getSecretCode() {
    return this.SECRET_CODE;
  }

  ngOnInit() {}

  sendAccessCode(code) {
    this.pinCode.next(code.value);
  }

  toggleAccessCodeInput() {
    this.showInputPinCode.next(!this.showInputPinCode.value);
  }
}
