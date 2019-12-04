import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { database, user, setUser } from "../constants";

@Component({
  selector: "app-add-schedule",
  templateUrl: "./add-schedule.component.html",
  styleUrls: ["./add-schedule.component.css"]
})
export class AddScheduleComponent implements OnInit {
  scheduleForm;
  scheduleType;
  day;
  frequency;
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.scheduleForm = this.formBuilder.group({
      scheduleType: "",
      day: "",
      frequency: ""
    });
  }

  ngOnInit() {}

  onSubmit(): void {
    this.scheduleType = this.scheduleForm.get("scheduleType").value;
    this.day = this.scheduleForm.get("day").value;
    this.frequency = this.scheduleForm.get("frequency").value;
    console.log(this.scheduleType, this.day, this.frequency);

    if (this.scheduleType == "Repeated") {
      this.http
        .post(database + "/PlantSchedule/createPlantSchedule", {
          user: { username: user, plantId: 31, }
        })
        .subscribe(data => {
          // console.log(data);
          // console.warn(data["message"]);
          // this.message = data["message"];
          // this.nextPage = "[/home]";
          // this.authenticated = data["data"]["authenticated"];
          // if (this.authenticated) {
          //   this.userId = data["data"]["results"][0]["user_id"];
          //   setUser(this.userId);
          // }
        });
    }
  }
}
