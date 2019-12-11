import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { database } from "../constants";
@Component({
  selector: "app-reminder-view",
  templateUrl: "./reminder-view.component.html",
  styleUrls: ["./reminder-view.component.css"]
})
export class ReminderViewComponent implements OnInit {
  @Input() plant_id;
  closest_water_date;
  next_water_date;
  days;
  today;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    const sleep = milliseconds => {
      return new Promise(resolve => setTimeout(resolve, milliseconds));
    };
    //  sleep(500).then(() => {
    // });
    this.loadWaterDate();
  }
  loadWaterDate() {
    this.today = new Date();
    this.http
      .post(database + "/PlantSchedule/GetNotificationStatus", {
        plant: { plant_id: this.plant_id }
      })
      .subscribe(data => {
        console.log(data["data"]);
        this.closest_water_date = new Date(data["data"][0]["Next_Notification"]);
        console.log(this.plant_id, this.closest_water_date, this.today);
        this.days = Math.ceil(
          (this.closest_water_date.getTime() - this.today.getTime()) /
            (1000 * 60 * 60 * 24)
        );
      });
  }

  waterPlant() {
    this.http
      .post(database + "/PlantSchedule/waterPlant", {
        plant: { plant_id: this.plant_id }
      })
      .subscribe(data => {
        console.log(data["data"]);
        this.loadWaterDate();
      });
  }
}
