import { Component, OnInit } from '@angular/core';
import {database, user} from "../constants";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-print-schedule',
  templateUrl: './print-schedule.component.html',
  styleUrls: ['./print-schedule.component.css']
})
export class PrintScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}