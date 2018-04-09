import { Component, ViewChild, trigger, transition, style, state, animate, keyframes } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, AlertController } from 'ionic-angular';
import { CirgraphPage } from '../cirgraph/cirgraph';
import { Storage } from '@ionic/storage';
import { AgtutsmongoProvider } from './../../providers/agtutsmongo/agtutsmongo';


/**
 * Generated class for the CirdefinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cirdefine',
  templateUrl: 'cirdefine.html',
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
export class CirdefinePage {
  @ViewChild(Slides) slides : Slides;
  state: string = 'x';
  public slideind:number=0;
  tutordc: any = [];
  constructor(public agtuts: AgtutsmongoProvider, public storage: Storage, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }
  defcirs: any = [];
  ionViewDidLoad() {
    console.log('ionViewDidLoad CirgraphPage');
    //this.loadData('defcir');
    this.defcirs = this.navParams.data;

    console.log(this.agtuts.defcirs);
    
  }

  slideChanged(){
    try{
      this.slideind = this.slides.getActiveIndex();
    }catch(error){
      console.log('something\'s thingy shit when slidechanged');
    }
  }

  skip(){
    this.navCtrl.push(CirgraphPage);
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
    this.showAlert('Explanation','Distance formula was used.');
  }

  aler2(){
    this.showAlert('Explanation','Squaring both sides to simplify.');
  }
  aler3(){
    this.showAlert('Explanation','Put the same variable beside each other and the constant on the other side.');
  }
  aler4(){
    this.showAlert('Explanation','Complete the square of both variables.');
  }
  aler5(){
    this.showAlert('Explanation','Simplify the equation.');
  }
  aler6(){
    this.showAlert("Note","To complete the square of X, we have to square the half of the coeffient of X, which is 10. Half of -10 is -5. Square of -5 is 25.<br/>Remember that what we add on the left side of the equation shall also be added in the right side.<br/>In terms of Y, its coefficient is 12 and half of it is 6. Square of 6 is 36, so we also added 36 to both sides of the equation.");

  }

  showAlert(tit: string, stit: string) {
    let alert = this.alertCtrl.create({
      title: tit,
      subTitle: stit,
      buttons: ['OK']
    });
    alert.present();
  }

/*  getsaveData(str:string){
    console.log(str);
    this.agtuts.getTutorials(str).then((data) => {
      console.log('gettuts');
      this.tutordc = data;
      console.log(this.tutordc);

      console.log('savetuts');
      this.storage.set(str, JSON.stringify(this.tutordc));
      console.log(JSON.stringify(this.tutordc));
      
      this.loadData(str);
    });
    
  }

  loadData(stri: string){
    console.log('loadtuts');
    console.log(stri);
      this.storage.get(stri).then((val) => {
        if(val != null && val != undefined){
          if (stri == 'intall'){
            this.agtuts.totos = JSON.parse(val);
          }else if (stri == 'defcir'){
            this.agtuts.defcira = JSON.parse(val);
          }else if (stri == 'solcir'){
            this.agtuts.solcira = JSON.parse(val);
          }else if (stri == 'defpar'){
            this.agtuts.defpara = JSON.parse(val);
          }else if (stri == 'solpar'){
            this.agtuts.solpara = JSON.parse(val);
          }else if (stri == 'defell'){
            this.agtuts.defella = JSON.parse(val);
          }else if (stri == 'solell'){
            this.agtuts.solella = JSON.parse(val);
          }else if (stri == 'defhyp'){
            this.agtuts.defhypa = JSON.parse(val);
          }else if (stri == 'solhyp'){
            this.agtuts.solhypa = JSON.parse(val);
          }
          
          console.log(val);
          
        }else{
          console.log('omg undefined huhu');
        }
      });
  }*/


}
