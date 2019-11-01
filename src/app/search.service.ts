import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class SearchService {
clientID: string = 'c2041c576e9343d5a70726f62054caf4'; access_token: string = '5ff0b608810b4fdab32ad481c0f3a40f';
baseUrl: string = 'https://api.spotify.com/v1/search?type=artist&limit=10&client_id=' + this.clientID + '&q=';
constructor(private _http: Http) { }
search(queryString: string) {
      let _URL = this.baseUrl + queryString;
      return this._http.get(_URL);
  }
}