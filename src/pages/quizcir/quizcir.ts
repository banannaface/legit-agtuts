import { Component, ViewChild, trigger, transition, style, state, animate, keyframes } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, AlertController } from 'ionic-angular';
import { QuizparPage } from '../quizpar/quizpar';
/**
 * Generated class for the QuizcirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizcir',
  templateUrl: 'quizcir.html',
  animations:[

    trigger('bounce', [
      state('*', style({
        transform: 'translateX(0)'
      })),
      transition('* => rightSwipe', animate('700ms ease-out', keyframes([
        style({transform: 'translateX(0)', offset: 0}),
        style({transform: 'translateX(-65px)', offset: .3}),
        style({transform: 'translateX(0)', offset: 1}),
      ]))),
      transition('* => leftSwipe', animate('700ms ease-out', keyframes([
        style({transform: 'translateX(0)', offset: 0}),
        style({transform: 'translateX(65px)', offset: .3}),
        style({transform: 'translateX(0)', offset: 1}),
      ])))
    ])
  ]
})
export class QuizcirPage {
  @ViewChild(Slides) slides : Slides;
  state: string = 'x';
  public slideind:number=0;
  public item :number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizcirPage');
    this.item = 1;
  }

  slideChanged(){
    try{
      this.slideind = this.slides.getActiveIndex();
      this.item = this.slideind + 1;
    }catch(error){
      console.log('something\'s thingy shit when slidechanged');
    }
  }

  skip(){
    this.navCtrl.push(QuizparPage);
  }

  animationDone() {
    try{
      this.state = 'x';
    }catch(error){
      console.log('something\'s thingy shit when animationdone');
    }

  }

  slideMoved(){
    try{
      if(this.slides.getActiveIndex() >= this.slides.getPreviousIndex()){
      this.state = 'rightSwipe';
      }else{
      this.state = 'leftSwipe';
      }
    }catch (error){
      console.log('something\'s thingy shit when slidemoved');
    }
  }

  showAlert(tit: string, stit: string) {
    let alert = this.alertCtrl.create({
      title: tit,
      subTitle: stit,
      buttons: ['OK']
    });
    alert.present();
  }


}
