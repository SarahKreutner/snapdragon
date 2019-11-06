import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

import { plants } from '../plants';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class plantListComponent implements OnInit{
  plants = plants;
  items;
   constructor(private cartService: CartService) { }

  share() {
    window.alert('The plant has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the plant goes on sale');
  }
  
  ngOnInit() {
    this.items = this.cartService.getItems();
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/