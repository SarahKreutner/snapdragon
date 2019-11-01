import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { plants } from "../plants";
import { CartService } from '../cart.service';

@Component({
  selector: "app-plant-details",
  templateUrl: "./plant-details.component.html",
  styleUrls: ["./plant-details.component.css"]
})
export class plantDetailsComponent implements OnInit {
   plant;

  constructor(
    private route: ActivatedRoute,private cartService: CartService
  ){}

  addToCart(plant) {
    window.alert('Your plant has been added!');
    this.cartService.addToCart(plant);
  }

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.plant = plants[+params.get('plantId')];
  });
}
}
