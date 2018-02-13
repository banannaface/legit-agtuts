import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { QuizcirPage } from '../quizcir/quizcir';
import { QuizparPage } from '../quizpar/quizpar';
import { QuizellPage } from '../quizell/quizell';
import { QuizhypPage } from '../quizhyp/quizhyp';
/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
  
})
export class QuizPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');
  }

  circleClick(){
    this.navCtrl.push(QuizcirPage);
  }

  parabolaClick(){
    this.navCtrl.push(QuizparPage);
  }

  hyperbolaClick(){
    this.navCtrl.push(QuizhypPage);
  }

  ellipseClick(){
    this.navCtrl.push(QuizellPage);
  }

}
