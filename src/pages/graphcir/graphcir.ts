import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GraphstaPage } from '../graphsta/graphsta';
import { GraphgenPage } from '../graphgen/graphgen';
import { GenparPage } from '../genpar/genpar';
import { StanparPage } from '../stanpar/stanpar';
import { GenellPage } from '../genell/genell';
import { StanellPage } from '../stanell/stanell';
import { GenhypPage } from '../genhyp/genhyp';
import { StanhypPage } from '../stanhyp/stanhyp';
import { GlobalmethodsProvider } from '../../providers/globalmethods/globalmethods';
/**
 * Generated class for the GraphcirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-graphcir',
  templateUrl: 'graphcir.html',
})
export class GraphcirPage {
  public form: string;
  public consec: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public globalMeth: GlobalmethodsProvider) {
  }
  
  
  /*closeModal(){
    this.view.dismiss();
}*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad GraphcirPage');
    this.form='Standard';
    this.consec='Circle';
  }

  changeEf(choice){
    this.form = choice;
    console.log(this.form)
  }
  changeWg(cho){
    this.consec = cho;
    console.log(this.consec)
  }

  submittoinput(){
   
    if ((this.consec=="Circle")&&(this.form=="General")){
      this.navCtrl.push(GraphgenPage);
    }else if ((this.consec=="Circle")&&(this.form=="Standard")){
      this.navCtrl.push(GraphstaPage);
    }else if ((this.consec=="Parabola")&&(this.form=="General")){
      this.navCtrl.push(GenparPage);
    }else if ((this.consec=="Parabola")&&(this.form=="Standard")){
      this.navCtrl.push(StanparPage);
    }else if ((this.consec=="Ellipse")&&(this.form=="General")){
      this.navCtrl.push(GenellPage);
    }else if ((this.consec=="Ellipse")&&(this.form=="Standard")){
      this.navCtrl.push(StanellPage);
    }else if ((this.consec=="Hyperbola")&&(this.form=="General")){
      this.navCtrl.push(GenhypPage);
    }else if ((this.consec=="Hyperbola")&&(this.form=="Standard")){
      this.navCtrl.push(StanhypPage);
    }else{
      this.globalMeth.presentAlertOkOnly('Error!','Sorry, something went wrong.');
    }
/*
    let data = {
      conicsection: this.consec,
      eqform: this.form
    }
    this.navCtrl.push();*/
  }
}
