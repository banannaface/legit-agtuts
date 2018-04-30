import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GlobalmethodsProvider } from '../../providers/globalmethods/globalmethods';
import { CanvascomComponent } from '../../components/canvascom/canvascom';

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
  constructor(public globalMeth:GlobalmethodsProvider, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GraphgenPage');
  }

  public aaval2:string = 'A';
  public bbval2:string = '+B';
  public ccval2:string = '+C';
  public ddval2:string = '+D';
  public eeval2:string = '+E';
  public aaval:any = 1;
  public bbval:any = 1;
  public ccval:any = 1;
  public ddval:any = 1;
  public eeval:any = 1;


  presentAlert(subtit:string) {
    let alert = this.alertCtrl.create({
      title: 'Warning',
      subTitle: subtit,
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert(tit: string, stit: string) {
    let alert = this.alertCtrl.create({
      title: tit,
      subTitle: stit,
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
        this.aaval = data.value;
        if (this.aaval>0){
          this.aaval2 = this.aaval;
        }else if(this.aaval<0){
          this.aaval2 = (this.aaval);
        }else{
          this.presentAlert("A should not be equal to 0. 1 will be the default value.");
          this.aaval = 1;
        }
       
      }else if (varr=="bbval"){
        this.bbval = data.value;
        if (this.bbval>=0){
          this.bbval2 = '+'+this.bbval;
        }else{
          this.bbval2 = (this.bbval);
        }
      }else if (varr=="ccval"){
        this.ccval = data.value;
        if (this.ccval>=0){
          this.ccval2 = '+'+this.ccval;
        }else{
          this.ccval2 = this.ccval;
        }
      }else if (varr=="ddval"){
        this.ddval = data.value;
        if (this.ddval>=0){
          this.ddval2 = '+'+this.ddval;
        }else{
          this.ddval2 = this.ddval;
        }
      }else if (varr=="eeval"){
        this.eeval = data.value;
        if (this.eeval>=0){
          this.eeval2 = '+'+this.eeval;
        }else{
          this.eeval2 = this.eeval;
        }
      }else{
        console.log("badtrip wala?");
      }
      
    });
  }

  note(){
    this.showAlert('How to Use','tap the values (A, B, C, D, E) you want to change, then tap submit to display graph.');
  }

  aval(){
    this.presentPromptneg("A value", "aaval");
    if (this.aaval==0){
     
      this.presentAlert("A should not be equal to 0. 1 is the default value.");
      this.aaval = 1;
    }
  }

  bval(){
    this.presentPromptneg("B value", "bbval");
    if (this.bbval>=0){
      this.bbval2 = '+'+this.bbval;
    }
  }

  cval(){
    this.presentPromptneg("C value", "ccval");
    if (this.ccval>=0){
      this.ccval2 = '+'+this.ccval;
    }
  }

  dval(){
    this.presentPromptneg("D value", "ddval");
    if (this.ddval>=0){
      this.ddval2 = '+'+this.ddval;
    }
  }

  eval(){
    this.presentPromptneg("E value", "eeval");
    if (this.eeval>=0){
      this.eeval2 = '+'+this.eeval;
    }
  }
  public finalradius:number=0;
  public finalx:number=0;
  public finaly:number=0;

  public xdiv:string;
  public xdivf:number;
  public ydiv:string;
  public ydivf:number;

  public xdiv2:number;
  public ydiv2:number;
  public xdiv22:string;
  public ydiv22:string;
  public xdivf2:string;
  public ydivf2:string;

  public xadd:number;
  public yadd:number;
  public eneg:number;


  graph(){
    if (this.aaval<0){
      this.aaval = this.aaval*-1;
      this.bbval = this.bbval*-1;
      this.ccval = this.ccval*-1;
      this.ddval = this.ddval*-1;
      this.eeval = this.eeval*-1;
    }
    this.xdiv = Number(this.ccval/this.aaval).toFixed(2);
    this.xdivf = parseFloat(this.xdiv);

    this.ydiv = Number(this.ddval/this.aaval).toFixed(2);
    this.ydivf = parseFloat(this.ydiv);
    
    if (this.xdivf==0){
      this.finalx = 0;
    }else{
      this.finalx = this.xdivf/-2;
      this.xdiv2 = this.xdivf/2;

    }
    if (this.ydivf==0){
      this.finaly = 0;
    }else{
      this.finaly = this.ydivf/-2;
      this.ydiv2 = this.ydivf/2;
    }

    this.xadd = (this.finalx*this.finalx)*this.aaval;
    this.yadd = (this.finaly*this.finaly)*this.aaval;
    this.eneg = this.eeval*-1;
    let fin = Number(Math.sqrt(((this.eeval*-1)+this.xadd+this.yadd)/this.aaval)).toFixed(2);
    this.finalradius = parseFloat(fin);
    
    /*if (xdivf>0){ negative ang x
      this.finalx = xdivf/-2;
    }else if (xdivf<0){ positive ang x
      this.finalx = xdivf/-2;
    }else{ nasa origin
      nasa origin
    }*/
  }

  submit(){

    this.graph();
    
    let data = {
      H:this.finalx,
      K:this.finaly,
      R:this.finalradius
    }
    this.globalMeth.conicsection = 'circle';
    if (this.finalradius<=0){
      this.globalMeth.presentAlertOkOnly('Error!','R should not be less than or equal to zero since it is a distance');
    }else{
      this.navCtrl.push(CanvascomComponent, data); 
    }
  }
}
