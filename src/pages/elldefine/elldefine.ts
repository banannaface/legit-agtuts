import { Component, ViewChild, trigger, transition, style, state, animate, keyframes } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, AlertController } from 'ionic-angular';
import { EllgraphPage } from '../ellgraph/ellgraph';
/**
 * Generated class for the ElldefinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-elldefine',
  templateUrl: 'elldefine.html',
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
export class ElldefinePage {
  @ViewChild(Slides) slides : Slides;
  state: string = 'x';
  public slideind:number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElldefinePage');
  }

  slideChanged(){
    try{
      this.slideind = this.slides.getActiveIndex();
    }catch(error){
      console.log('something\'s thingy shit when slidechanged');
    }
  }

  skip(){
    this.navCtrl.push(EllgraphPage);
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

  aler(){
    this.showAlert("Explanation","From PF<sub>1</sub> + PF<sub>2</sub> = 2a, transpose PF<sub>2</sub> to the right");
  }
  aler1(){
    this.showAlert("Explanation","Use the distance formula to get the value of PF<sub>1</sub> and PF<sub>2</sub>");
  }
  aler2(){
    this.showAlert("Explanation","Rationalize by squaring both sides");
  }
  aler3(){
    this.showAlert("Explanation","Cancel like terms on both sides then transpose -2cx to the left");
  }
  aler4(){
    this.showAlert("Explanation","Transpose 4a<sup>2</sup> to the left then multiply the whole equation by -1");
  }
  aler5(){
    this.showAlert("Explanation","Divide both sides by 4 to simplify");
  }
  aler6(){
    this.showAlert("Explanation","Rationalize by squaring both sides");
  }
  aler7(){
    this.showAlert("Explanation","Expand the left side by distributing a<sup>2</sup> inside the brackets");
  }
  aler8(){
    this.showAlert("Explanation","Cancel like terms on both sides which is -2a<sup>2</sup>cx");
  }
  aler9(){
    this.showAlert("Explanation","Transpose a<sup>2</sup>c<sup>2</sup> to the right and c<sup>2</sup>x<sup>2</sup> to the left");
  }
  aler10(){
    this.showAlert("Explanation","Simplify both sides by factoring");
  }
  aler11(){
    this.showAlert("Explanation","By letting b = &radic;(a<sup>2</sup> - c<sup>2</sup>), so a>b and b<sup>2</sup> = a<sup>2</sup> - c<sup>2</sup>");
  }
  aler12(){
    this.showAlert("Explanation","Divide both sides by a<sup>2</sup>b<sup>2</sup> for the final formula of ellipse");
  }

  aler13(){
    this.showAlert("Explanation","When we let b = &radic;(a<sup>2</sup> - c<sup>2</sup>), we assumed a > c. To see why this is true, look at &#9651;PF1F2. By the Triangle Inequality, PF1 + PF2 > F1F2, which implies 2a > 2c, so a > c.");
  }

}
