import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import {database, user, setUser} from "../constants";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'app';
  results = '';
  loginForm;
  user;
  userId;
  password;
  message;
  nextPage;
  authenticated;
  constructor(private http: HttpClient,  private formBuilder: FormBuilder,) {
    this.loginForm = this.formBuilder.group({
      user: '',
      password: ''
    });
  }

  ngOnInit() {
    
  }
 onSubmit() : void{
   
   this.user=this.loginForm.get('user').value;
   this.password=this.loginForm.get('password').value;
   if (this.user==''||this.password=='') {
     console.warn("Enter a username and password")
   }
   else {
     console.log("Logging in");
      this.http.post(database + '/Login', {user: {username: this.user, password: this.password}}).subscribe(data => {
      console.log(data); 
      console.warn(data["message"]);
      this.message = data["message"]; 
      this.nextPage="[/home]"; 
      this.authenticated = data["data"]["authenticated"]; 
      this.userId=data["data"]["results"][0]["user_id"]; 
      console.log(this.authenticated); console.log(this.userId);
      if ( this.authenticated ) {
      setUser(this.userId);
     }
      });
     
   }
   
  }

}