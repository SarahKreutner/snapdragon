import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results: any[] = [];
  searchField: FormControl = new FormControl();
  constructor(private _apiService: ApiService, private http: HttpClient,  private formBuilder: FormBuilder,) { }

  ngOnInit() {
    // this.searchField.valueChanges
    // .debounceTime(200)
    // .distinctUntilChanged()
    // .switchMap((query) =>  this.http.get("http://localhost:8000/Plants").subscribe( data => {this.results = result.json().data.items;}));
    

  }
}