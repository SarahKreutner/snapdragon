import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { database, user, setUser } from "../constants";

@Component({
  selector: "app-add-schedule",
  templateUrl: "./add-schedule.component.html",
  styleUrls: ["./add-schedule.component.css"]
})
export class AddScheduleComponent implements OnInit {
  @Input() plant_id;
  scheduleForm;
  scheduleType;
  day;
  frequency;
  date;

  dateString;
  buttonClicked = false;
  display = true;
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.scheduleForm = this.formBuilder.group({
      scheduleType: "",
      day: "",
      frequency: ""
    });
  }
  @Input() plant: Array<String>;

  ngOnInit() {
  
  };

  onSubmit(): void {
    const sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
    const doSomething = async () => {
  await sleep(2000)
  //do stuff
}
    this.scheduleType = "Repeated";
    this.day = this.scheduleForm.get("day").value;
    this.frequency = this.scheduleForm.get("frequency").value;

    this.date = new Date();

    this.dateString =
      this.date.getFullYear() +
      "-" +
      (this.date.getMonth() + 1) +
      "-" +
      this.date.getDate() +
      " " +
      this.date.getHours() +
      ":" +
      this.date.getMinutes() +
      ":" +
      this.date.getSeconds();

    console.log(
      "Date: ",
      this.date,
      this.dateString,
      this.scheduleType,
      this.day,
      this.frequency,
      user,
      this.dateString,
      this.plant_id
    );
    this.http
      .post(database + "/PlantSchedule/createPlantSchedule", {
        //TODO - fix plant id
        plant_schedule: {
          user_id: user,
          plant_id: this.plant_id,
          plant_schedule_type: this.scheduleType,
          next_notification: this.dateString,
          time_for_repeat: this.frequency
        }
      })
      .subscribe(data => {
        console.log(data);
        console.log(data["message"]);
        if (data["message"] == "SUCCESS") {
          this.display = false;
          console.log(this.display);
        }
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
