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
  searchQuery;
  results: '';
  searchForm: FormControl = new FormControl();
  constructor(private _apiService: ApiService, private http: HttpClient,  private formBuilder: FormBuilder,) { }

  ngOnInit() {
   

  }
  onSubmit() : void{
    this.searchQuery = this.searchForm.get('searchField').value;
    this.http.post("http://localhost:8000/Plants", {plant:{formal_name:this.searchQuery,}}).subscribe( data => {console.log(data["plants"]); this.results = data["plants"];});
    
  }
}