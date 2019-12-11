import { Component, OnInit } from '@angular/core';
import {database, user} from "../constants";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-print-schedule',
  templateUrl: './print-schedule.component.html',
  styleUrls: ['./print-schedule.component.css']
})
export class PrintScheduleComponent implements OnInit {
  plants;
  constructor(private http: HttpClient,) { }

  ngOnInit() {
    this.http.post(database + "/PlantSchedule", {user:{user_id: user,}}).subscribe( data => {console.log(data["data"]); this.plants = data["data"];});
  }

}