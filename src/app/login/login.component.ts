import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public items: Array<string>;
  title = 'app';
  results = '';
  constructor(private http: HttpClient) {
    
  }

  public open(event, item) {
    alert('Open ' + item);
  }
  ngOnInit() {
    
  }
  myFunc() : void{
   this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);
    });
  
  }

}