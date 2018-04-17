import { Component, ViewChild, trigger, transition, style, state, animate, keyframes } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, AlertController } from 'ionic-angular';
import { EllsolvePage } from '../ellsolve/ellsolve';
/**
 * Generated class for the HypdefinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hypdefine',
  templateUrl: 'hypdefine.html',
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
export class HypdefinePage {
  @ViewChild(Slides) slides : Slides;
  state: string = 'x';
  public slideind:number=0;
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HypdefinePage');
  }
  slideChanged(){
    try{
      this.slideind = this.slides.getActiveIndex();
    }catch(error){
      console.log('something\'s thingy shit when slidechanged');
    }
  }

  skip(){
    this.navCtrl.push(EllsolvePage);
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

  aler14(){
    this.showAlert("Note","<ul><li>when the denominator of x<sup>2</sup> is a<sup>2</sup> (bigger denominator), the major axis would be horinzotal.</li><li>when the denominator of x<sup>2</sup> is b<sup>2</sup> (smaller denominator), the major axis would be vertical.</li><li>In all cases above, a > b and c = &radic;(a<sup>2</sup> - b<sup>2</sup>)</li></ul>");
  }
  
  aler15(){
    this.showAlert("Note","<ul><li>when the denominator of (x-h)<sup>2</sup> is a<sup>2</sup> (bigger denominator), the major axis would be horinzotal.</li><li>when the denominator of (x-h)<sup>2</sup> is b<sup>2</sup> (smaller denominator), the major axis would be vertical.</li><li>In all cases above, a > b and c = &radic;(a<sup>2</sup> - b<sup>2</sup>)</li></ul>");
  }

  aler16(){
    this.showAlert("Explanation","Factor both the x<sup>2</sup> and y<sup>2</sup> to separate their coefficient");
  }

  aler17(){
    this.showAlert("Explanation","Now, complete the square of x<sup>2</sup> and y<sup>2</sup>. Dont forget to addwhat you added to te other side of the equation");
  }

  aler18(){
    this.showAlert("Explanation","Simplify the equation");
  }

  aler19(){
    this.showAlert("Explanation","Divide both sides by 576 to make the constant 1 and get the standard formula.");
  }

  aler20(){
    this.showAlert("Note","With this, we can say that<ul><li>the <b>center</b> is on C(7,-2)</li><li>major axis is horizontal</li><li>a = 8; b = 6; c = &radic;(a<sup>2</sup>-b<sup>2</sup>), so c = 5.3</li><li><b>Vertices:</b> V<sub>1</sub> = (-1,-2);<br>V<sub>2</sub> = (15,-2)</li><li><b>Foci:</b> F<sub>1</sub> = (1.7,-2);<br>F<sub>2</sub> = (12.3,-2)</li><li><b>Covertices:</b> W<sub>1</sub> = (7,-8);<br>W<sub>2</sub> = (7,4)</li></ul>");
  }

  

}
