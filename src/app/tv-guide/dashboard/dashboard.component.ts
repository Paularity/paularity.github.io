import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  currentDay;
  timeRange = [];
  startRange = 8;
  endRange = 22;

  channels = [
    {
      id: 1,
      name: "KissAnime",
    },
    {
      id: 2,
      name: "Crunchyroll",
    },
  ];

  shows = [
    {
      name: "Dragonball Z",
      start: "2022-06-09T08:00:00Z",
      end: "2022-06-09T09:15:00Z",
      color: "#f99149",
      channelId: 1,
    },
    {
      name: "Naruto",
      start: "2022-06-09T10:00:00Z",
      end: "2022-06-09T11:45:00Z",
      channelId: 1,
      color: "#d3d549",
    },
    {
      name: "One Piece",
      start: "2022-06-09T09:00:00Z",
      end: "2022-06-09T10:15:00Z",
      channelId: 2,
      color: "#b92430",
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.currentDay = moment();
    this.getTimeRangePerDay();
  }

  onChangeTimeRange(start, end) {
    if (start) this.startRange = parseInt(moment(start).format("h"));
    if (end) this.endRange = parseInt(moment(end).format("h"));
    this.getTimeRangePerDay();
  }

  isTodayShows(show) {
    return (
      moment.utc(show.start).format("MM DD YYYY").toString() ===
      moment(this.currentDay).format("MM DD YYYY").toString()
    );
  }

  getTimeRangePerDay() {
    for (let i = this.startRange; i <= this.endRange; i++) {
      this.timeRange.push(
        moment(this.currentDay).startOf("D").add(i, "h").toString()
      );
    }
  }

  getShowLength(show) {
    let width = moment(show.end).diff(show.start, "minute") / 60;
    return `${141 * width}px`;
  }

  getCurrentPosition() {
    let leftHr = parseInt(moment(this.currentDay).format("H").toString());
    let leftMin = parseInt(moment(this.currentDay).format("m").toString()) / 60;
    let left = leftHr + leftMin;
    let width = (left - this.startRange) * 144;
    return `${width}px`;
  }

  getShowPosition(show) {
    let leftHr = parseInt(moment.utc(show.start).format("H").toString());
    let leftMin = parseInt(moment.utc(show.start).format("m").toString()) / 60;
    let left = leftHr + leftMin;
    let width = (left - this.startRange) * 144;
    return `${width}px`;
  }

  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
