import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { RedditDataProvider } from '../../providers/reddit-data/reddit-data'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private url: string = 'https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=26d2e04dc0ef383471b348b5ca6e6c44';

  constructor(public navCtrl: NavController, public httpService: Http) {
    this.http=httpService;
    this.navCtrl=navCtrl;
    this.results=[];
    this.results=this.getComponents();
  }

  getComponents(){
    this.http.get(this.url).subscribe((response) => {
      this.results = response.json().results;
    });
  }

  itemSelected(item){
    this.navCtrl.push(DetailPage,{
      item: item
    })
  }
}
