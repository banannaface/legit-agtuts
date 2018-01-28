import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GraphPage } from '../graph/graph';
/**
 * Generated class for the GraphgenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-graphgen',
  templateUrl: 'graphgen.html',
})
export class GraphgenPage {
  public Ainput:any;
  public Binput:any;
  public Cinput:any;
  public Dinput:any;
  public Einput:any;
  
  public X:any;
  public Y:any;
  public R:any;
  public legX:any;
  public legY:any;
  public legR:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GraphgenPage');
  }

  submit(){
    if ((this.Ainput==0) && (this.Binput==0)){
      this.legX = (this.Cinput/2)*(this.Cinput/2);
      this.legY = (this.Dinput/2)*(this.Dinput/2);
      this.legR = ((this.Einput*-1)+this.legX+this.legY);
 
    }else if ((this.Ainput>0) && (this.Binput>0)){
      
    }else if ((this.Ainput<0) && (this.Binput<0)){

    }
     
    this.R = Math.sqrt(this.legR);
    this.X = (this.Cinput/2)*-1;
    this.Y = (this.Dinput/2)*-1;
    let data = {
      H:this.X,
      K:this.Y,
      R:this.R
    }
    this.navCtrl.push(GraphPage, data);
  }
}
