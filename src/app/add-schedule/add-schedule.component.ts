import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {
  scheduleForm;
  scheduleType;
  day;
  frequency;
  constructor(private http: HttpClient,  private formBuilder: FormBuilder,) {
    this.scheduleForm = this.formBuilder.group({
      scheduleType:'',
      day: '',
      frequency: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.scheduleType=this.scheduleForm.get('scheduleType').value;
    this.day=this.scheduleForm.get('day').value;
    this.frequency=this.scheduleForm.get('frequency').value;
  }

}