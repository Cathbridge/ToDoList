

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { OCCASION } from '../../mocks/Event.mocks';

/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {
agender: string;
date: string ;
place: string ;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

 onAdd(){
  
  OCCASION.push({Agender: this.agender,Date: this.date,Place: this.place});
  this.navCtrl.pop();

 }


}
