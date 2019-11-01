import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './search/api.service';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { plantListComponent } from './plant-list/plant-list.component';
import { plantAlertsComponent } from './plant-alerts/plant-alerts.component';
import { plantDetailsComponent } from './plant-details/plant-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: plantListComponent },
       { path: 'plants/:plantId', component: plantDetailsComponent },
       { path: 'cart', component: CartComponent },
       { path: 'shipping', component: ShippingComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    plantListComponent,
    plantAlertsComponent,
    plantDetailsComponent,
    CartComponent,
    ShippingComponent,
    SearchComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [CartService, SearchService, ApiService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/