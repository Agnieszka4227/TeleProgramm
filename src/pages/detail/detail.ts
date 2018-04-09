import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  item:any;
  private url: string = 'https://api.themoviedb.org/3/movie/333339?api_key=26d2e04dc0ef383471b348b5ca6e6c44&language=en-US';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("item");
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  getComponents(){
    this.http.get(this.url).subscribe((response) => {
      this.results = response.json().results;
    });
  }

}
