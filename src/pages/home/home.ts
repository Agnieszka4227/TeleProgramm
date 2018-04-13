import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private url: string = 'https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=26d2e04dc0ef383471b348b5ca6e6c44';
  results: any[];
  constructor(public navCtrl: NavController, private httpService: Http) {
    this.httpService=httpService;
    this.navCtrl=navCtrl;
    this.results=[];
  }

  getComponents(){
    this.httpService.get(this.url).subscribe((response) => {
      this.results = response.json().results;
    });
  }

  itemSelected(item){
    this.navCtrl.push(DetailPage,{
      item: item
    })
  }

  ionViewDidLoad(){
    this.getComponents();
  }
}
