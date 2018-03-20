import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the SolcirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solcir',
  templateUrl: 'solcir.html',
})
export class SolcirPage {
  public xxval:any = 1;
  public yyval:any = 1;
  public rrval:any = 1;
  public retval:any = 1;
  public aaval:any = 1;
  public bbval:any = 1;
  public ccval:any = 1;
  public ddval:any = 1;
  public eeval:any = 1;
  public xxval2:string;
  public yyval2:string;
  public bbval2:string;
  public ccval2:string;
  public ddval2:string;
  public eeval2:string;
  public stanordiv:string = 'divmar2';
  public standiv:string = 'divmar2';
  public gendiv:string = 'divmar2';
  public typeee:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolcirPage');
    //this.cireq = "wtff";
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  presentPrompt(xx:string, varr:any) {
    let alert = this.alertCtrl.create({
      title: 'Enter Value',
      inputs: [
        {
          name: 'value',
          placeholder: xx,
          type: 'number',
          max: 100,
          min: 1
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enter',
          handler: data => {
            varr = data.value;
            console.log(varr + ", " + xx);
           
          }
        }
      ]
    });
    alert.present();
    alert.onDidDismiss((data) => {
      console.log('Yes/No', data.value);
      this.rrval = data.value;
    });
  }

  presentPromptneg(xx:string, varr:any) {
    let alert = this.alertCtrl.create({
      title: 'Enter Value',
      inputs: [
        {
          name: 'value',
          placeholder: xx,
          type: 'number',
          max:100,
          min:-100
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enter',
          handler: data => {
            varr = data.value;
            console.log(varr + ", " + xx);
           
          }
        }
      ]
    });
    alert.present();

    alert.onDidDismiss((data) => {
      console.log('Yes/No', data.value);
      if (varr==this.xxval){
        this.xxval = data.value;
      }else if (varr==this.yyval){
        this.yyval = data.value;
      }else if (varr==this.aaval){
        this.aaval = data.value;
      }else if (varr==this.bbval){
        this.bbval = data.value;
      }else if (varr==this.ccval){
        this.ccval = data.value;
      }else if (varr==this.ddval){
        this.ddval = data.value;
      }else if (varr==this.eeval){
        this.eeval = data.value;
      }
      
    });
  }

  changety(typee:string){
    this.typeee = typee;
    if (this.typeee="stanor"){
      this.stanordiv = "divmar2";
      this.standiv = "divmar";
      this.gendiv = "divmar";
      this.xxval = 0;
      this.yyval = 0;
     
    }else if (this.typeee="stan"){
      this.stanordiv = "divmar";
      this.standiv = "divmar2";
      this.gendiv = "divmar";
      
    }else if (this.typeee="gen"){
      this.stanordiv = "divmar";
      this.standiv = "divmar";
      this.gendiv = "divmar2";
      
    }
   console.log(this.typeee);
  }

  presentAlert(subtit:string) {
    let alert = this.alertCtrl.create({
      title: 'Warning',
      subTitle: subtit,
      buttons: ['OK']
    });
    alert.present();
  }

  xval(){
    this.xxval = this.presentPromptneg("X value", this.xxval);
    if (this.xxval>=0){
      this.xxval2 = '-'+this.xxval;
    }else{
      this.xxval2 = '+'+this.xxval;
    }
  }

  yval(){
    this.presentPromptneg("Y value", this.yyval);
    if (this.yyval>=0){
      this.yyval2 = '-'+this.yyval;
    }else{
      this.yyval2 = '+'+this.yyval;
    }
  }
  
  rval(){
    
    this.presentPrompt("R value", this.rrval)
    //this.rrval = this.retval;
    
  }

  aval(){
    this.presentPromptneg("A value", this.aaval);
    if (this.aaval==0){
      this.presentAlert("A should not be equal to 0. 1 is the default value.");
      this.aaval = 1;
    }
  }

  bval(){
    this.presentPromptneg("B value", this.bbval);
    if (this.bbval>=0){
      this.bbval2 = '+'+this.bbval;
    }
  }

  cval(){
    this.presentPromptneg("C value", this.ccval);
    if (this.ccval>=0){
      this.ccval2 = '+'+this.ccval;
    }
  }

  dval(){
    this.presentPromptneg("D value", this.ddval);
    if (this.ddval>=0){
      this.ddval2 = '+'+this.ddval;
    }
  }

  eval(){
    this.presentPromptneg("E value", this.eeval);
    if (this.eeval>=0){
      this.eeval2 = '+'+this.eeval;
    }
  }

}
