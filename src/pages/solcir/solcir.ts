import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GlobalmethodsProvider } from '../../providers/globalmethods/globalmethods';
import { CanvascomComponent } from '../../components/canvascom/canvascom';
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
  public xxval2:string = '-1';
  public yyval2:string = '-1';
  public aaval2:string = 'A';
  public bbval2:string = '+B';
  public ccval2:string = '+C';
  public ddval2:string = '+D';
  public eeval2:string = '+E';
  public type:string = "stanor";
  

  constructor(public globalMeth:GlobalmethodsProvider, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolcirPage');
    //this.cireq = "wtff";
  }
 
  presentPrompt(xx:string, varr:any) {
    let alert = this.alertCtrl.create({
      title: 'Enter Value',
      inputs: [
        {
          name: 'value',
          placeholder: xx,
          type: 'number',
          max: 500,
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
      if (varr=="xxval"){
        this.xxval = data.value;
        if (this.xxval>=0){
          this.xxval2 = '-'+this.xxval;
          console.log("xvall >=?");
        }else{
          this.xxval2 = '+'+(this.xxval*-1);
          console.log("xvall else?");
        }
        console.log("xvall?");
      }else if (varr=="yyval"){
        this.yyval = data.value;
        if (this.yyval>=0){
          this.yyval2 = '-'+this.yyval;
          console.log("yvall >=?");
        }else{
          this.yyval2 = '+'+(this.yyval*-1);
          console.log("yvall else?");
        }
        console.log("yvall?");
      }else if (varr=="aaval"){
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

  graph(){
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

  changety(typee){

    var stanori = document.getElementById("stanordiv");
    var stand = document.getElementById("standiv");
    var gene = document.getElementById("gendiv");

   
    this.type = typee;
    console.log(typee);
    if (typee=="stanor"){
      stanori.style.display = "block";
      stand.style.display = "none";
      gene.style.display = "none";
      
     
      console.log(typee + ", stanor daw");
     
      
    }else if (typee=="stan"){
      stanori.style.display = "none";
      stand.style.display = "block";
      gene.style.display = "none";
      console.log(typee + ", stan daw");
      
      
    }else if (typee=="gen"){
      stanori.style.display = "none";
      stand.style.display = "none";
      gene.style.display = "block";
      console.log(typee + ", gen daw");
     
      
    }
   
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
    this.presentPromptneg("X value", "xxval");
    
  }

  yval(){
    this.presentPromptneg("Y value", "yyval");
    
  }
  
  rval(){
    
    this.presentPrompt("R^2 value", this.rrval)
    //this.rrval = this.retval;
    
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

  public xadd:number;
  public yadd:number;
  public eneg:number;
  public xcomsq:number;
  public ycomsq:number;

  public xdivf2:string;
  public ydivf2:string;

  public xdiv2:number;
  public ydiv2:number;
  public xdiv22:string;
  public ydiv22:string;
  solve(){
    var stanorisol = document.getElementById("stanorsol");
    var standsol = document.getElementById("stansol");
    var genesol = document.getElementById("gensol");
    var graphbut = document.getElementById("graphbut");
    if (this.type=="stanor"){
      this.finalx = 0;
      this.finaly = 0;
      let fin = Number(Math.sqrt(this.rrval)).toFixed(2);
      this.finalradius = parseFloat(fin);

      stanorisol.style.display = "block";
      standsol.style.display = "none";
      genesol.style.display = "none";
      

    }else if (this.type=="stan"){
      this.finalx = this.xxval;
      this.finaly = this.yyval;
      let fin = Number(Math.sqrt(this.rrval)).toFixed(2);
      this.finalradius = parseFloat(fin);

      stanorisol.style.display = "none";
      standsol.style.display = "block";
      genesol.style.display = "none";
    }else if (this.type=="gen"){
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

        if (this.xdiv2>0){
          this.xdiv22 = '+'+this.xdiv2;
        }else{
          this.xdiv22 = this.xdiv2.toString();
        }
        if (this.xdivf>0){
          this.xdivf2 = '+'+this.xdivf;
        }else{
          this.xdivf2 = this.xdivf.toString();
        }
      }
      if (this.ydivf==0){
        this.finaly = 0;
      }else{
        this.finaly = this.ydivf/-2;
        this.ydiv2 = this.ydivf/2;

        if (this.ydiv2>0){
          this.ydiv22 = '+'+this.ydiv2;
        }else{
          this.ydiv22 = this.ydiv2.toString();
        }
        if (this.ydivf>0){
          this.ydivf2 = '+'+this.ydivf;
        }else{
          this.ydivf2 = this.ydivf.toString();
        }
      }
      this.xcomsq = this.finalx*this.finalx;
      this.ycomsq = this.finaly*this.finaly;
      this.xadd = (this.finalx*this.finalx)*this.aaval;
      this.yadd = (this.finaly*this.finaly)*this.aaval;
      this.eneg = this.eeval*-1;
      let fin = Number(Math.sqrt(((this.eeval*-1)+this.xadd+this.yadd)/this.aaval)).toFixed(2);
      this.finalradius = parseFloat(fin);
      
      stanorisol.style.display = "none";
      standsol.style.display = "none";
      genesol.style.display = "block";
      /*if (xdivf>0){ negative ang x
        this.finalx = xdivf/-2;
      }else if (xdivf<0){ positive ang x
        this.finalx = xdivf/-2;
      }else{ nasa origin
        nasa origin
      }*/
    }else{
      console.log("sumthins wrong na naman.");
    }

   graphbut.style.display = "block"; 
  }


}
