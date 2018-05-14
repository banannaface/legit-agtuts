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
      buttons: [
        {
          text: 'OK',
      
          handler: () => {
            console.log('ok clicked');
            this.what = 'okie';
           
          }
        }
      ]
    });
    alert.present();
    /*alert.onDidDismiss(() => {
      console.log('Yes/No', this.what);
      if (this.what == 'okie'){
        this.slides.slideNext();
      }
    }

    );*/
  }
  
  public right:number=0;
  public wrong:number=0;
  public what:string;
  showAnswer(tit: string, stit: string) {
    let alert = this.alertCtrl.create({
      title: tit,
      subTitle: stit,
      buttons: [
        {
          text: 'OK',
      
          handler: () => {
            console.log('ok clicked');
            this.what = 'okie';
           
          }
        }
      ]
    });
    alert.present();
    alert.onDidDismiss(() => {
      console.log('Yes/No', this.what);
      if (this.what == 'okie'){
        this.slides.slideNext();
        var lasbut = document.getElementById("lastbutton");
        
        if ((this.slides.isEnd()==true)&&(this.right+this.wrong==this.slides.length())){
          this.showAlert('Message','you got '+this.right+' right answer/s and '+this.wrong+' wrong answer/s.<br>Click the button below to proceed next.');
          lasbut.style.display = 'block';
        }else{
          lasbut.style.display = 'none';
        };
      }
    }

    );

  }

 
  public num1:number=0;
  public num2:number=0;
  public num3:number=0;
  a1(){
    
    if (this.num1==1){
      this.showAnswer("Question 1", "You already answered!");
      this.num1=1;
    }else{
      this.showAnswer("Question 1", "Wrong Answer! The right answer is RADIUS.");
      this.wrong = this.wrong+1;
      this.num1=1;
    }
  }

  b1(){
    
    if (this.num1==1){
      this.showAnswer("Question 1", "You already answered!");
      this.num1=1;
    }else{
      this.showAnswer("Question 1", "Wrong Answer! The right answer is RADIUS.");
      this.wrong = this.wrong+1;
      this.num1=1;
    }
  }

  c1(){
    
    if (this.num1==1){
      this.showAnswer("Question 1", "You already answered!");
      this.num1=1;
    }else{
      this.showAnswer("Question 1", "You got it!");
      this.right = this.right+1;
      this.num1=1;
    }
  }


  d1(){
    
    if (this.num1==1){
      this.showAnswer("Question 1", "You already answered!");
      this.num1=1;
    }else{
      this.showAnswer("Question 1", "Wrong Answer! The right answer is RADIUS.");
      this.wrong = this.wrong+1;
      this.num1=1;
    }
  }

  a2(){
    
    if (this.num2==1){
      this.showAnswer("Question 2", "You already answered!");
      this.num2=1;
    }else{
      this.showAnswer("Question 2", "You got it!");
      this.right = this.right+1;
      this.num2=1;
    }
  }

  b2(){
    
    if (this.num2==1){
      this.showAnswer("Question 2", "You already answered!");
      this.num2=1;
    }else{
      this.showAnswer("Question 2", "Wrong Answer!");
      this.wrong = this.wrong+1;
      this.num2=1;
    }
  }

  c2(){
    
    if (this.num2==1){
      this.showAnswer("Question 2", "You already answered!");
      this.num2=1;
    }else{
      this.showAnswer("Question 2", "Wrong Answer!");
      this.wrong = this.wrong+1;
      this.num2=1;
    }
  }


  d2(){
    
    if (this.num2==1){
      this.showAnswer("Question 2", "You already answered!");
      this.num2=1;
    }else{
      this.showAnswer("Question 2", "Wrong Answer!");
      this.wrong = this.wrong+1;
      this.num2=1;
    }
  }

  a3(){
    
    if (this.num3==1){
      this.showAnswer("Question 3", "You already answered!");
      this.num3=1;
    }else{
      this.showAnswer("Question 3", "Wrong Answer!");
      this.wrong = this.wrong+1;
      this.num3=1;
    }
  }

  b3(){
    
    if (this.num3==1){
      this.showAnswer("Question 3", "You already answered!");
      this.num3=1;
    }else{
      this.showAnswer("Question 3", "Wrong Answer!");
      this.wrong = this.wrong+1;
      this.num3=1;
    }
  }

  c3(){
    
    if (this.num3==1){
      this.showAnswer("Question 3", "You already answered!");
      this.num3=1;
    }else{
      this.showAnswer("Question 3", "You got it!");
      this.right = this.right+1;
      this.num3=1;
    }
  }


  d3(){
    
    if (this.num3==1){
      this.showAnswer("Question 3", "You already answered!");
      this.num3=1;
    }else{
      this.showAnswer("Question 3", "Wrong Answer!");
      this.right = this.right+1;
      this.num3=1;
    }
  }

}
  