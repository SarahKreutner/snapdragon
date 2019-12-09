import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {database} from "../constants";
@Component({
  selector: 'app-reminder-view',
  templateUrl: './reminder-view.component.html',
  styleUrls: ['./reminder-view.component.css']
  
})
export class ReminderViewComponent implements OnInit {
  @Input() plant_id;
  closest_water_date;
  next_water_date;
  days;
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.post(database + "/PlantSchedule/GetNotificationStatus", {plant:{plant_id: this.plant_id}}).subscribe( data => {console.log(data["data"]); this.closest_water_date = new Date(data["data"][0]["Next_Notification"]); console.log(this.plant_id, this.closest_water_date);
    this.days = new Date(new Date().getTime() - this.closest_water_date.getTime()).getDay();
    
    
    });
    

    
    
  }

}