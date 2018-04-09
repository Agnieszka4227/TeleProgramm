import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'
import 'rxjs/add/operator/map';

/*
  Generated class for the MessageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RedditDataProvider {

  private url: string = 'https://api.themoviedb.org/3/movie/upcoming?api_key=26d2e04dc0ef383471b348b5ca6e6c44&language=en-US&page=1';

  constructor(public httpService: Http) {
    this.http=httpService;
  }

  getRemoteData(){
  this.http.get(this.url).subscribe((response) => {
    this.results = response.json().results;
    return this.results;
  })
  }
}
