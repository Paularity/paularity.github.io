import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  downloadResume() {
    let link = document.createElement("a");
    link.setAttribute("type", "hidden");
    link.href = "../../../assets/files/christian-decembrana.pdf";
    link.download = 'christian-decembrana.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
