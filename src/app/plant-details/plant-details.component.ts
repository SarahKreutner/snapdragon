import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { plants } from "../plants";
import { CartService } from "../cart.service";
import { HttpClient } from "@angular/common/http";
import { switchMap } from "rxjs/operators";
import { database, user } from "../constants";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-plant-details",
  templateUrl: "./plant-details.component.html",
  styleUrls: ["./plant-details.component.css"]
})
export class plantDetailsComponent implements OnInit {
  plant;
  id;
  genericPlantId;
  plantName;
  plantDescription;
  notifications;
  showInput;
  addPlantForm;
  location;
  message = "";
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.addPlantForm = this.formBuilder.group({
      plantName: "",
      plantDescription: "",
      notifications: false,
      location: ""
    });
  }

  addToCart(plant) {
    this.cartService.addToCart(plant);
  }
  add(plant) {
    this.showInput = true;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("plantId");
    });
    this.http
      .post(database + "/Plants/Database", { plant: { formal_name: this.id } })
      .subscribe(data => {
        console.log(data["data"]);
        this.plant = data["data"][0];
        this.genericPlantId = data["data"][0]["generic_plant_id"];
      });
  }
  onSubmit(): void {
    this.plantName = this.addPlantForm.get("plantName").value;
    this.plantDescription = this.addPlantForm.get("plantDescription").value;
    this.notifications = this.addPlantForm.get("notifications").value;
    this.location = this.addPlantForm.get("location").value;
    console.log("Creating Plant");
    this.http
      .post(database + "/Plants", {
        plant: {
          generic_plant_id: this.genericPlantId,
          given_name: this.plantName,
          description: this.plantDescription,
          notifications: this.notifications,
          user_id: user,
          location: this.location
        }
      })
      .subscribe(data => {
        console.log(this.genericPlantId);
        console.log(this.plantName);
        console.log(this.plantDescription);
        console.log(this.notifications);
        console.log(this.location);
        console.log(data);
        this.message= this.plantName +": "+ data["message"];
      });
      this.showInput=false;
  }
}
