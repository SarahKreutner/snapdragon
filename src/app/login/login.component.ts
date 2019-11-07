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
  users;
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
   
   this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);
    });
  
  }

}