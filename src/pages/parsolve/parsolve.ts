import { Component, ViewChild, trigger, transition, style, state, animate, keyframes } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, AlertController } from 'ionic-angular';
import { ElldefinePage } from '../elldefine/elldefine';
/**
 * Generated class for the ParsolvePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parsolve',
  templateUrl: 'parsolve.html',
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
export class ParsolvePage {
  @ViewChild(Slides) slides : Slides;
  state: string = 'x';
  public slideind:number=0;
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParsolvePage');
  }

  slideChanged(){
    try{
      this.slideind = this.slides.getActiveIndex();
    }catch(error){
      console.log('something\'s thingy shit when slidechanged');
    }
  }

  skip(){
    this.navCtrl.push(ElldefinePage);
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

  aler1(){
    this.showAlert("Explanation","substitute 150 for x since we are looking for y when x=150");
  }

  aler2(){
    this.showAlert("Explanation","divide both sides by 333.33");
  }

  aler3(){
    this.showAlert("Explanation","transpose 30 to get y");
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
