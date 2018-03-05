import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SolcirPage } from '../solcir/solcir';
import { SolparPage } from '../solpar/solpar';
import { SolellPage } from '../solell/solell';
import { SolhypPage } from '../solhyp/solhyp';
/**
 * Generated class for the SolvePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solve',
  templateUrl: 'solve.html',
})
export class SolvePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolvePage');
  }

  circleClick(){
    this.navCtrl.push(SolcirPage);
  }

  parabolaClick(){
    this.navCtrl.push(SolparPage);
  }

  hyperbolaClick(){
    this.navCtrl.push(SolhypPage);
  }

  ellipseClick(){
    this.navCtrl.push(SolellPage);
  }


}
