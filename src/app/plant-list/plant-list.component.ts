import { Component, OnInit  } from '@angular/core';
import { CartService } from '../cart.service';
import {database, user} from "../constants";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class plantListComponent implements OnInit{
  plants;
   constructor(private http: HttpClient, private cartService: CartService) { }

  
  
  ngOnInit() {
    console.log("Loading plants");
    this.http.post(database + "/Users/Plants", {user:{user_id: user,}}).subscribe( data => {console.log(data["data"]); this.plants = data["data"];});
    
  }

  deletePlant(plant_id) {
     this.http.post(database + "/Plants/Delete", {plant:{plant_id: plant_id, user_id: user,}}).subscribe( data => {console.log(data["data"]); this.plants = data["data"];});
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/