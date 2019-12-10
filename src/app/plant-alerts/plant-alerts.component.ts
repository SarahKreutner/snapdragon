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
    }, 60000);
  }
  
  getNotifications() {
    //console.log("Checking Notifications");
    this.http.post(database + "/PlantSchedule/getNotifications", {user:{user_id: user,}}).subscribe( data => {
      console.log(data["data"]); 
      this.plants = data["data"];
      // for(let plant_notification of this.plants) {
      //   if(plant_notification) {
      //     console.log("hello")
      //   }
      // }
    });
  }

}
