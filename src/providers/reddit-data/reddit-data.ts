import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Because it is simple use of http connection I am using it directrly from home page.
  I have added this part of program to show that we also can use Provider to http connection
*/
@Injectable()
export class RedditDataProvider {

  private url: string = 'https://api.themoviedb.org/3/movie/upcoming?api_key=26d2e04dc0ef383471b348b5ca6e6c44&language=en-US&page=1';

  constructor(public http: Http, public results) {
    this.http=http;
    this.results=results;
  }

  getRemoteData(){
  this.http.get(this.url).subscribe((response) => {
    this.results = response.json().results;
    return this.results;
  })
  }
}
