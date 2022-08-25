import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "app";
  tab = 1;
  dragStartStopEvent: any;
  moveButtonEvent: any;
  stringOptions = [
    "Burns Dalton",
    "Mcintyre Lawson",
    "Amie Franklin",
    "Jocelyn Horton",
    "Fischer Erickson",
    "Medina Underwood",
    "Goldie Barber",
  ];
  newOptions: any = [];
  config = {
    displayKey: "name", //if objects array passed which key to be displayed defaults to description,
  };
  options = [
    {
      _id: "5a66d6c31d5e4e36c7711b7a",
      index: 0,
      balance: "$2,806.37",
      picture: "http://placehold.it/32x32",
      name: "Burns Dalton",
    },
    {
      _id: "5a66d6c3657e60c6073a2d22",
      index: 1,
      balance: "$2,984.98",
      picture: "http://placehold.it/32x32",
      name: "Mcintyre Lawson",
    },
    {
      _id: "5a66d6c376be165a5a7fae33",
      index: 2,
      balance: "$2,794.16",
      picture: "http://placehold.it/32x32",
      name: "Amie Franklin",
    },
    {
      _id: "5a66d6c3f7854b6b4d96333b",
      index: 3,
      balance: "$2,537.14",
      picture: "http://placehold.it/32x32",
      name: "Jocelyn Horton",
    },
    {
      _id: "5a66d6c31f967d4f3e9d84e9",
      index: 4,
      balance: "$2,141.42",
      picture: "http://placehold.it/32x32",
      name: "Fischer Erickson",
    },
    {
      _id: "5a66d6c34cfa8cddefb31602",
      index: 5,
      balance: "$1,398.60",
      picture: "http://placehold.it/32x32",
      name: "Medina Underwood",
    },
    {
      _id: "5a66d6c3d727c450794226de",
      index: 6,
      balance: "$3,915.65",
      picture: "http://placehold.it/32x32",
      name: "Goldie Barber",
    },
  ];
  firstSortedList: any;
  secondSortedList: any;
  listStyle = {
    height: "250px",
    width: "100%",
    dropZoneHeight: "100px",
  };
  removedList: any = [];
  constructor() {
    this.firstSortedList = this.options;
    this.secondSortedList = this.options;
    this.newOptions = [...this.options];
  }
  listSorted(list: any) {
    this.firstSortedList = list;
  }

  listSortedSecond(list: any) {
    this.secondSortedList = list;
  }

  dragStartStop($event: any, type:string) {
    // debugger
    this.dragStartStopEvent = $event;
    console.log($event, type);
  }

  moveButton($event:any){
    this.moveButtonEvent = $event;
  }
}
