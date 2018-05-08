import { Component } from '@angular/core';
import { NavController  } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser'; /* 1 */


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public iab: InAppBrowser /* 2 */) {}
ngOnInit(){

    const browser = this.iab.create('https://google.com/','_self',{location:'no'}); /*3*/

}
}