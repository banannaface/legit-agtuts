import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CanvascomComponent } from '../../components/canvascom/canvascom';
import { GlobalmethodsProvider } from '../../providers/globalmethods/globalmethods';

/**
 * Generated class for the GenellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-genell',
  templateUrl: 'genell.html',
})
export class GenellPage {

  constructor(public globalMeth:GlobalmethodsProvider, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }


  public x2den:number;
  public y2den:number;
  public totden:number;
  public cdiv:number;
  public ddiv:number;
  public xadd:number;
  public totxadd:number;
  public yadd:number;
  public totyadd:number;

  public hval2:string;
  public kval2:string;
  public aval2:string;
  public bval2:string;
  public cval2:string;
  public dval2:string;
  public eval2:string;
  public axis:boolean;


  public Aval:number;
  public Bval:number;
  public Cval:number;
  public Dval:number;
  public Eval:number;
  public aval:number;

  public a:number;
  public b:number;
  public c:number;

  public hval:number;
  public kval:number;
  public cdiv2:string;
  public ddiv2:string;

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenellPage');
    this.aval2='A';
    this.bval2='+B';
    this.cval2='+C';
    this.dval2='+D';
    this.eval2='E';
    this.major = false;
    this.axis = false;
  }
  note(){
    this.showAlert('How to Use','tap the values (A, B, C, D, E) you want to change and input your own value. Use the toggle button to toggle the major axis between vertical or horizontal, then tap submit to display graph.');
  }

  showAlert(tit: string, stit: string) {
    let alert = this.alertCtrl.create({
      title: tit,
      subTitle: stit,
      buttons: ['OK']
    });
    alert.present();
  }
  changeax(axiss){
    this.axis = axiss;
   
    
  }

  presentAlert(subtit:string) {
    let alert = this.alertCtrl.create({
      title: 'Warning',
      subTitle: subtit,
      buttons: ['OK']
    });
    alert.present();
  }

  presentPromptneg(xx:string, varr) {
    let alert = this.alertCtrl.create({
      title: 'Enter Value',
      inputs: [
        {
          name: 'value',
          placeholder: xx,
          type: 'number',
          max:500,
          min:-500
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
            
            console.log(varr + ", " + xx);
           
          }
        }
      ]
    });
    alert.present();

    alert.onDidDismiss((data) => {
      console.log('Yes/No', data.value);
      console.log('varr, ', varr);
   
      
      if (varr=="aaval"){
        this.Aval = data.value;
       if (this.Aval>0){
          this.aval2 = this.Aval.toString();
        }else if (this.aval<0){
          this.aval2 = this.Aval.toString();
        }else{
          this.presentAlert("A should not be equal to 0. 1 will be the default value.");
          this.Aval = 1;
        }
      }else if (varr=="bbval"){
        this.Bval = data.value;
       if (this.Bval>0){
          this.bval2 = '+'+this.Bval;
        }else if (this.aval<0){
          this.bval2 = this.Bval.toString();
        }else{
          this.presentAlert("B should not be equal to 0. 1 will be the default value.");
          this.Bval = 1;
        }
      }else if (varr=="ccval"){
        this.Cval = data.value;
        if (this.Cval>=0){
          this.cval2 = '+'+this.Cval;
        }else{
          this.cval2 = this.Cval.toString();
        }
      }else if (varr=="ddval"){
        this.Dval = data.value;
        if (this.Dval>=0){
          this.dval2 = '+'+this.Dval;
        }else{
          this.dval2 = this.Dval.toString();
        }
      }else if (varr=="eeval"){
        this.Eval = data.value;
        if (this.Eval>=0){
          this.eval2 = '+'+this.Eval;
        }else{
          this.eval2 = this.Eval.toString();
        }
      }else{
        console.log("badtrip wala?");
      }
      
    });
  }

  aaval(){
    this.presentPromptneg("A value", "aaval");
  }

  bbval(){
    this.presentPromptneg("B value", "bbval");
  }

  ccval(){
    this.presentPromptneg("C value", "ccval");
  }

  ddval(){
    this.presentPromptneg("D value", "ddval");
  }

  eeval(){
    this.presentPromptneg("E value", "eeval");
  }

  solve(){
   
    this.hval = ((this.Cval/this.Aval)/2)*-1;
    this.kval = ((this.Dval/this.Bval)/2)*-1;

    this.cdiv = (this.Cval/this.Aval);
    this.ddiv = (this.Dval/this.Bval);
    if(this.cdiv>=0){
      this.cdiv2 = '+'+this.cdiv;
    }else{
      this.cdiv2 = this.cdiv.toString();
    }
    if(this.ddiv>=0){
      this.ddiv2 = '+'+this.ddiv;
    }else{
      this.ddiv2 = this.ddiv.toString();
    }

    this.xadd = this.hval*this.hval;
    this.yadd = this.kval*this.kval;
    this.totxadd = this.hval*this.hval*this.Aval;
    this.totyadd = this.kval*this.kval*this.Bval;

    this.totden = +this.Eval + +((this.hval*this.hval)*this.Aval) + +((this.kval*this.kval)*this.Bval);
    this.x2den = (this.totden/this.Aval);
    this.y2den = (this.totden/this.Bval);
    
    
    if(this.x2den>this.y2den){
      let aa = Number(Math.sqrt(this.x2den)).toFixed(2);
      let bb = Number(Math.sqrt(this.y2den)).toFixed(2);
      this.a = parseFloat(aa);
      this.b = parseFloat(bb);
    }else{
      let aa1 = Number(Math.sqrt(this.y2den)).toFixed(2);
      let bb1 = Number(Math.sqrt(this.x2den)).toFixed(2);
      this.a = parseFloat(aa1);
      this.b = parseFloat(bb1);
    }

    let cc = Number(Math.sqrt((this.a*this.a)-(this.b*this.b))).toFixed(2);
    
    this.c = parseFloat(cc);
    
    
    if(this.c<=0){
      this.presentAlert('Remember, a is always greater than b. Default value of c is 1.');
      this.c = 1;
    }

    if(this.axis==true){//vertical b under x

      this.hinput = this.hval
       this.kinput = this.kval
       this.ainput = this.a
       this.binput = this.b
       this.formula = 'Ellipse'
       if (this.hval==0 && this.kval==0){
        this.origin = true;
        }      else{
          this.origin = false;
        }
        this.major = false
    }else{//horizontal a under x

      
      this.hinput = this.hval
       this.kinput = this.kval
       this.ainput = this.a
       this.binput = this.b
       this.formula = 'Ellipse'
       if (this.hval==0 && this.kval==0){
        this.origin = true;
        }      else{
          this.origin = false;
        }
        this.major = true
      
    } 

  }
  public hinput:any;
  public kinput:any;
  public ainput:number;
  public binput:number;
  public origin:boolean;
  public major:boolean;
  public formula:string;
  submit(){
    this.solve();

    let data = {
      ma:this.major,
      for: this.formula,
      or:this.origin,
      H:Number(this.hinput),
      K:Number(this.kinput),
      A:Number(this.ainput),
      B:Number(this.binput)
    }

    this.globalMeth.conicsection = 'ellipse';
    if (this.ainput<=0 || this.binput<=0){
      this.globalMeth.presentAlertOkOnly('Error!','R should not be less than or equal to zero since it is a distance');
    }else if(this.ainput<this.binput){
      this.globalMeth.presentAlertOkOnly('Error!','a should always be more than b since 2a is the major axis while 2b is the minor axis.');
    }else{
      this.navCtrl.push(CanvascomComponent, data); 
    }
  }

}
