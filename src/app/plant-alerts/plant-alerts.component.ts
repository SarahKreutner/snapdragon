import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-plant-alerts',
  templateUrl: './plant-alerts.component.html',
  styleUrls: ['./plant-alerts.component.css']
})
export class plantAlertsComponent {
  @Input() plant;
  @Output() notify = new EventEmitter();

}