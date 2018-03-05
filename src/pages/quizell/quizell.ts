import { Component, ViewChild, trigger, transition, style, state, animate, keyframes } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, AlertController } from 'ionic-angular';
import { QuizhypPage } from '../quizhyp/quizhyp';
/**
 * Generated class for the QuizellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizell',
  templateUrl: 'quizell.html',
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
export class QuizellPage {
  @ViewChild(Slides) slides : Slides;
  state: string = 'x';
  public slideind:number=0;
  public item :number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizellPage');
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
    this.navCtrl.push(QuizhypPage);
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

  showAnswer(tit: string, stit: string) {
    let alert = this.alertCtrl.create({
      title: tit,
      subTitle: stit,
      buttons: ['OK']
    });
    alert.present();
  }


  public num1:number=0;
  public num2:number=0;
  public num3:number=0;
  a1(){
    
    if (this.num1==1){
      this.showAnswer("Question 1", "You already answered!");
      this.num1=1;
    }else{
      this.showAnswer("Question 1", "Wrong Answer!");
      this.num1=1;
    }
  }

  b1(){
    
    if (this.num1==1){
      this.showAnswer("Question 1", "You already answered!");
      this.num1=1;
    }else{
      this.showAnswer("Question 1", "Wrong Answer!");
      this.num1=1;
    }
  }

  c1(){
    
    if (this.num1==1){
      this.showAnswer("Question 1", "You already answered!");
      this.num1=1;
    }else{
      this.showAnswer("Question 1", "Wrong Answer!");
      this.num1=1;
    }
  }


  d1(){
    
    if (this.num1==1){
      this.showAnswer("Question 1", "You already answered!");
      this.num1=1;
    }else{
      this.showAnswer("Question 1", "You got it!");
      this.num1=1;
    }
  }

  a2(){
    
    if (this.num2==1){
      this.showAnswer("Question 2", "You already answered!");
      this.num2=1;
    }else{
      this.showAnswer("Question 2", "Wrong Answer!");
      this.num2=1;
    }
  }

  b2(){
    
    if (this.num2==1){
      this.showAnswer("Question 2", "You already answered!");
      this.num2=1;
    }else{
      this.showAnswer("Question 2", "Wrong Answer!");
      this.num2=1;
    }
  }

  c2(){
    
    if (this.num2==1){
      this.showAnswer("Question 2", "You already answered!");
      this.num2=1;
    }else{
      this.showAnswer("Question 2", "You got it!");
      this.num2=1;
    }
  }


  d2(){
    
    if (this.num2==1){
      this.showAnswer("Question 2", "You already answered!");
      this.num2=1;
    }else{
      this.showAnswer("Question 2", "Wrong Answer!");
      this.num2=1;
    }
  }

  a3(){
    
    if (this.num3==1){
      this.showAnswer("Question 3", "You already answered!");
      this.num3=1;
    }else{
      this.showAnswer("Question 3", "Wrong Answer!");
      this.num3=1;
    }
  }

  b3(){
    
    if (this.num3==1){
      this.showAnswer("Question 3", "You already answered!");
      this.num3=1;
    }else{
      this.showAnswer("Question 3", "You got it!");
      this.num3=1;
    }
  }

  c3(){
    
    if (this.num3==1){
      this.showAnswer("Question 3", "You already answered!");
      this.num3=1;
    }else{
      this.showAnswer("Question 3", "Wrong Answer!");
      this.num3=1;
    }
  }


  d3(){
    
    if (this.num3==1){
      this.showAnswer("Question 3", "You already answered!");
      this.num3=1;
    }else{
      this.showAnswer("Question 3", "Wrong Answer!");
      this.num3=1;
    }
  }
}
