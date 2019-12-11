import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {database, user} from "../constants";

@Component({
  selector: 'app-plant-alerts',
  templateUrl: './plant-alerts.component.html',
  styleUrls: ['./plant-alerts.component.css']
})
export class plantAlertsComponent implements OnInit{
  constructor(private http: HttpClient) { }
  @Input() plant;
  @Output() notify = new EventEmitter();
  plants;

  ngOnInit(){
    console.log("Creating Notification Subscriber");
    //console.log(user);
    setInterval(() => {
      this.getNotifications(); 
    }, 6000000);
  }
  onNotify(plant_name) {
    window.alert('Your plant '+plant_name+' needs to be watered!');
  }
  
    getNotifications() {
    //console.log("Checking Notifications");
    this.http.post(database + "/PlantSchedule/getNotifications", {user:{user_id: user,}}).subscribe( data => {
      console.log(data["data"]); 
      this.plants = data["data"];
      for(let plant_notification of this.plants) {
        let water_date = new Date(
          plant_notification[1]
        );
        let now = new Date();
        if(water_date < now) {
          console.log(plant_notification[5]);
          this.onNotify(plant_notification[5]);
        }
      }
    });
  }


}
