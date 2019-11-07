import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public items: Array<string>;
  title = 'app';
  results = '';
  loginForm;
  user;
  password;
  constructor(private http: HttpClient,  private formBuilder: FormBuilder,) {
    this.loginForm = this.formBuilder.group({
      user: '',
      password: ''
    });
  }

  public open(event, item) {
    alert('Open ' + item);
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
      this.http.post('http://localhost:8000/Login', {user: {username: this.user, password: this.password}}).subscribe(data => {
      console.log(data);
    });
  
   }
   
  }

}