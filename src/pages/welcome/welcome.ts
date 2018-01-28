import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TutorialsPage } from '../tutorials/tutorials';
import { GraphPage } from '../graph/graph';
import { SolvePage } from '../solve/solve';
import { QuizPage } from '../quiz/quiz';
import { AboutPage } from '../about/about';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  tuts(){
    this.navCtrl.push(TutorialsPage)
  }

  graph(){
    this.navCtrl.push(GraphPage)
  }

  solve(){
    this.navCtrl.push(SolvePage)
  }

  quiz(){
    this.navCtrl.push(QuizPage)
  }

  about(){
    this.navCtrl.push(AboutPage)
  }
}
