import { Component, OnInit } from '@angular/core';
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
  searchForm;
  constructor(private http: HttpClient,  private formBuilder: FormBuilder,) { 
    this.searchForm = this.formBuilder.group({
      searchQuery: '',
      searchField: ''
      })

  }

  ngOnInit() {
   

  }
  onSubmit() : void{
   
    console.log("Searching");
    console.log(this.searchForm.get('searchField').value);
    this.searchQuery = this.searchForm.get('searchField').value;
    this.http.post("http://localhost:8000/Plants/Database", {plant:{formal_name:this.searchQuery,}}).subscribe( data => {console.log(data["plants"]); this.results = data["plants"];});
    
  }
}