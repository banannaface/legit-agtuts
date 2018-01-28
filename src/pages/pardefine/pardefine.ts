import { Component, ViewChild, trigger, transition, style, state, animate, keyframes } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, AlertController } from 'ionic-angular';
import { PargraphPage } from '../pargraph/pargraph';
/**
 * Generated class for the PardefinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pardefine',
  templateUrl: 'pardefine.html',
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
export class PardefinePage {
  @ViewChild(Slides) slides : Slides;
  state: string = 'x';
  public slideind:number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PardefinePage');
  }

  slideChanged(){
    try{
      this.slideind = this.slides.getActiveIndex();
    }catch(error){
      console.log('something\'s thingy shit when slidechanged');
    }
  }

  skip(){
    this.navCtrl.push(PargraphPage);
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

  aler1(){
    this.showAlert('Explanation','Get the distance of PF and PP<sub>l</sub>');
  }  
  aler2(){
    this.showAlert('Explanation','Since, We squared the left side to simplify, we also have to square the right side.');
  }
  aler3(){
    this.showAlert('Explanation','Transpose like terms and cancel all with the same variable and opposite signs.');
  }
  aler4(){
    this.showAlert('Explanation','Standard formula of parabola openinf upward and vertex in origin.');
  }

  aler5(){
    this.showAlert('Note!','<ul><li>When <b>x is squared</b> the parabola opens <b>upward/downward</b> and the axis of symmetry is the <b>y-axis</b>.</li><li>When <b>y is squared</b> the parabola opens <b>right/left</b> and the axis of symmetry is the <b>x-axis</b>.</li></ul>');
  }

  aler6(){
    this.showAlert('Note!','<ul><li>When <b>x is squared</b> the parabola opens <b>upward/downward</b> and the axis of symmetry is the <b>x = h (vertical)</b>.</li><li>When <b>y is squared</b> the parabola opens <b>right/left</b> and the axis of symmetry is <b>y = k (horizontal)</b>.</li><li>When the coefficient of the non-squared part is positive then it opens upward or right, otherwise it opens downward or left.</li></ul>');
  }

  aler7(){
    this.showAlert('Explanation','Transpose the x to complete the square of y.');
  }

  aler8(){
    this.showAlert('Explanation','To complete the square, divide the variable of y in 2 then square the answer. Whatever you add to complete the square of y, add it to the other side too.');
  }

  aler9(){
    this.showAlert('Explanation','Now simplify the equation.');
  }

  aler10(){
    this.showAlert('Explanation','This is the standard form we are looking for.');
  }

  aler11(){
    this.showAlert('Note!','With this, we can say that<ul><li>vertex V(-4,-6)</li><li>the parabola opens to the right since y is squared and 4c is positive.</li><li>c = 1.25 since 4c = 5</li><li>focus is c = 1.25 units to the right of V : F(-2.75,-6)</li><li>the (vertical) directrix is c = 1.25 units to the left of V : x = -5.25</li><li>the (horizontal) axis of symmetry is through V : y = -6</li></ul>');
  }

  aler12(){
    this.showAlert('Explanation','Transpose the y to complete the square of x.');
  }

  aler13(){
    this.showAlert('Explanation','Factor the left side so that we could complete the square of x without its coefficient.');
  }

  aler14(){
    this.showAlert('Explanation','Now we can complete the square of x by adding 9. We added 9(5) to the right side since there is still the coefficient of 5 outside the completed square of x.');
  }

  aler15(){
    this.showAlert('Explanation','Simplify the equations');
  }

  aler16(){
    this.showAlert('Explanation','Factor the right side so that we can get the value of 4c and k.');
  }

  aler17(){
    this.showAlert('Explanation','Divide both sides by 5 to remove the coefficient of x. This is the standard equation we are looking for.');
  }

  aler18(){
    this.showAlert('Note!','With this, we can say that<ul><li>vertex V(-3,4)</li><li>the parabola opens downward since x is squared and 4c is negative.</li><li>c = 1.2 since 4c = 24/5</li><li>focus is c = 1.2 units below V : F(-3,2.8)</li><li>the (horizontal) directrix is c = 1.2 units above V :<br>y = 5.2</li><li>the (vertical) axis of symmetry is through V : x = -3</li></ul>');
  }

}
