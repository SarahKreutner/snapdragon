import { Component, OnInit } from "@angular/core";
import {Router, ActivatedRoute, ParamMap } from "@angular/router";
import { plants } from "../plants";
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import {database, user} from "../constants";

@Component({
  selector: "app-plant-details",
  templateUrl: "./plant-details.component.html",
  styleUrls: ["./plant-details.component.css"]
})
export class plantDetailsComponent implements OnInit {
   plant;
   id;

  constructor(private http: HttpClient,
    private route: ActivatedRoute,private cartService: CartService
  ){}

  addToCart(plant) {
    window.alert('Your plant has been added!');
    this.cartService.addToCart(plant);
  }

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.id = params.get('plantId');
  });
    this.http.post(database + "/Plants/Database", {plant:{formal_name:this.id,}}).subscribe( data => {console.log(data["data"]); this.plant = data["data"];});
}
}
