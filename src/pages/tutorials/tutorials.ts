import { Component, ViewChild, trigger, transition, style, state, animate, keyframes } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { TutorialmainPage } from '../tutorialmain/tutorialmain';

import { GraphcirPage } from '../graphcir/graphcir';
import { SolvePage } from '../solve/solve';
import { QuizPage } from '../quiz/quiz';
import { HelpPage } from '../help/help';
import { AboutPage } from '../about/about';
/**
 * Generated class for the TutorialsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorials',
  templateUrl: 'tutorials.html',
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
export class TutorialsPage {
  @ViewChild(Slides) slides:Slides;
 public skef:string = 'START LEARNING';
  state: string = 'x';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
public slideind:number=0;

  slideChanged(){
    try{
      this.slideind = this.slides.getActiveIndex();
    }catch(error){
      console.log('something\'s thingy shit when slidechanged');
    }
    
    if (this.slideind==0){
      
      this.skef = 'START LEARNING';
    }else if (this.slideind==1){
     
      this.skef = 'START GRAPHING';
    }else if (this.slideind==2){
     
      this.skef = 'START SOLVING';
    }else if (this.slideind==3){
      
      this.skef = 'TAKE THE QUIZ';
    }else if (this.slideind==4){
      
      this.skef = 'CHECK MANUAL';
    }else if (this.slideind==5){
      
      this.skef = 'ABOUT ME';
    }else{
      console.log('something\'s wrong daw');
    }
  }

  skip(){
    if (this.slideind==0){
      this.navCtrl.push(TutorialmainPage);
      
    }else if (this.slideind==1){
      this.navCtrl.push(GraphcirPage);
      
    }else if (this.slideind==2){
      this.navCtrl.push(SolvePage);
      
    }else if (this.slideind==3){
      this.navCtrl.push(QuizPage);
     
    }else if (this.slideind==4){
      this.navCtrl.push(HelpPage);
     
    }else if (this.slideind==5){
      this.navCtrl.push(AboutPage);
     
    }else{
      console.log('something\'s wrong daw');
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

  animationDone() {
    try{
      this.state = 'x';
    }catch(error){
      console.log('something\'s thingy shit when animationdone');
    }
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialsPage');
  }
 
}
