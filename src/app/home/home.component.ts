import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  ads: Object;
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getAllAds().subscribe((data) => {
      this.ads = data;
      console.log(this.ads);
    });
  }
}
