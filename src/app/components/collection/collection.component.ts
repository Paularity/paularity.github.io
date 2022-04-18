import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
// import { MatDialog, MatDialogConfig } from "@angular/material";
import { Observable } from "rxjs";
import { COLLECTION_LIST } from "./collection_list";
import { LightboxModalComponent } from "./lightbox-modal/lightbox-modal.component";
@Component({
  selector: "app-collection",
  templateUrl: "./collection.component.html",
  styleUrls: ["./collection.component.scss"],
})
export class CollectionComponent implements OnInit {
  imagePorts: any[];

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

  ngOnInit() {}
}
