import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the SolellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solell',
  templateUrl: 'solell.html',
})
export class SolellPage {

  public xden:string;
  public yden:string;
  public axis:boolean;
  public type:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolellPage');
    this.xden='a';
    this.yden='b';
    this.hval2='-h';
    this.kval2='-k';
    this.aval2='A';
    this.bval2='+B';
    this.cval2='+C';
    this.dval2='+D';
    this.eval2='E';
    this.axis = false;
    this.type = 'stanor';
  }

  public bval:number;
  public aval:number;
  public hval:number;
  public kval:number;
  public Aval:number;
  public Bval:number;
  public Cval:number;
  public Dval:number;
  public Eval:number;
  
  public a:number;
  public b:number;
  public c:number;

  public hval2:string;
  public kval2:string;
  public aval2:string;
  public bval2:string;
  public cval2:string;
  public dval2:string;
  public eval2:string;

  public vh1:number;
  public vk1:number;
  public vh2:number;
  public vk2:number;
  public fh1:number;
  public fk1:number;
  public fh2:number;
  public fk2:number;
  public wh1:number;
  public wk1:number;
  public wh2:number;
  public wk2:number;

  public vhfor1:string;
  public vkfor1:string;
  public vhfor2:string;
  public vkfor2:string;
  public fhfor1:string;
  public fkfor1:string;
  public fhfor2:string;
  public fkfor2:string;
  public whfor1:string;
  public wkfor1:string;
  public whfor2:string;
  public wkfor2:string;

  public axform:string;

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
      if (varr=="avalx"){
        this.aval = data.value;
        this.xden = this.aval.toString();
        if (this.aval<0){
          this.presentAlert("a<sup>2</sup> should not be lessthan 0 since it is a square of a number. It will be converted to positive");
          this.aval = this.aval*-1;
        }else if(this.aval==0){
          this.presentAlert("a<sup>2</sup> should not be equal to 0. 1 will be the default value.");
          this.aval = 1;
        }
      }else if (varr=="bvalx"){
        this.bval = data.value;
        this.xden = this.bval.toString();
        if (this.bval<0){
          this.presentAlert("b<sup>2</sup> should not be lessthan 0 since it is a square of a number. It will be converted to positive");
          this.bval = this.bval*-1;
        }else if(this.bval==0){
          this.presentAlert("b<sup>2</sup> should not be equal to 0. 1 will be the default value.");
          this.bval = 1;
        }
      }else if (varr=="avaly"){
        this.aval = data.value;
        this.yden = this.aval.toString();
        if (this.aval<0){
          this.presentAlert("a<sup>2</sup> should not be lessthan 0 since it is a square of a number. It will be converted to positive");
          this.aval = this.aval*-1;
        }else if(this.aval==0){
          this.presentAlert("a<sup>2</sup> should not be equal to 0. 1 will be the default value.");
          this.aval = 1;
        }
      }else if (varr=="bvaly"){
        this.bval = data.value;
        this.yden = this.bval.toString();
        if (this.bval<0){
          this.presentAlert("b<sup>2</sup> should not be lessthan 0 since it is a square of a number. It will be converted to positive");
          this.bval = this.bval*-1;
        }else if(this.bval==0){
          this.presentAlert("b<sup>2</sup> should not be equal to 0. 1 will be the default value.");
          this.bval = 1;
        }
      }else if (varr=="hhval"){
        this.hval = data.value;
        if(this.hval>=0){
          this.hval2 = '-' + this.hval
        }else{
          this.hval2 = '+' + this.hval*-1
        }
      }else if (varr=="kkval"){
        this.kval = data.value;
        if(this.kval>=0){
          this.kval2 = '-' + this.kval
        }else{
          this.kval2 = '+' + this.kval*-1
        }
      }else if (varr=="aaval"){
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

  changeax(axiss){
    this.axis = axiss;
    if (axiss==true){
      if (this.type=='gen'){
        //this.gensq = 'x';
        
      }else{
        this.xden='b';
        this.yden='a';
        
      }
      
    }else{
      if(this.type=='gen'){
        //this.gensq = 'y';
      }else{
        this.xden='a';
        this.yden='b';
        
      }
      
      
    }
  }

  xdenval(){
    if (this.axis==true){
      this.presentPromptneg("B^2 value", "bvalx");
    }else{
      this.presentPromptneg("A^2 value", "avalx");
    }
  }

  ydenval(){
    if (this.axis==true){
      this.presentPromptneg("A^2 value", "avaly");
    }else{
      this.presentPromptneg("B^2 value", "bvaly");
    }
  }

  hhval(){
    this.presentPromptneg("H value", "hhval");
  }

  kkval(){
    this.presentPromptneg("K value", "kkval");
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

  public x2den:number;
  public y2den:number;
  public totden:number;
  public cdiv:number;
  public ddiv:number;
  public xadd:number;
  public totxadd:number;
  public yadd:number;
  public totyadd:number;

  public cdiv2:string;
  public ddiv2:string;
  public horver:string;

  solve(){
    var stanorisol = document.getElementById("stanorsol");
    var standsol = document.getElementById("stansol");
    var genesol = document.getElementById("gensol");

    if(this.type=='stanor'){
      console.log(this.type+' type stanor');
      this.hval = 0;
      this.kval = 0;
      let aa = Number(Math.sqrt(this.aval)).toFixed(2);
      let bb = Number(Math.sqrt(this.bval)).toFixed(2);
      let cc = Number(Math.sqrt(this.aval-this.bval)).toFixed(2);
      this.a = parseFloat(aa);
      this.b = parseFloat(bb);
      this.c = parseFloat(cc);
      if(this.c<=0){
        this.presentAlert('Remember, a is always greater than b. Default value of c is 1.');
        this.c = 1;
      }
      if(this.axis==true){//vertical b under x
        this.vh1 = 0;
        this.vk1 = 0-this.a;
        this.vh2 = 0;
        this.vk2 = 0+this.a;

        this.fh1 = 0;
        this.fk1 = 0-this.c;
        this.fh2 = 0;
        this.fk2 = 0+this.c;

        this.wh1 = 0-this.b;
        this.wk1 = 0;
        this.wh2 = 0+this.b;
        this.wk2 = 0;

        this.vhfor1 = '0';
        this.vkfor1 = '-a';
        this.vhfor2 = '0';
        this.vkfor2 = 'a';

        this.fhfor1 = '0';
        this.fkfor1 = '-c';
        this.fhfor2 = '0';
        this.fkfor2 = 'c';

        this.whfor1 = '-b';
        this.wkfor1 = '0';
        this.whfor2 = 'b';
        this.wkfor2 = '0';
        
        this.horver = 'vertical';
        this.axform = 'x^2\'s denominator is smaller that y^2\'s which means it is b^2 and the major axis is vertical.';

      }else{//horizontal a under x

        this.vh1 = 0-this.a;
        this.vk1 = 0;
        this.vh2 = 0+this.a;
        this.vk2 = 0;

        this.fh1 = 0-this.c;
        this.fk1 = 0;
        this.fh2 = 0+this.c;
        this.fk2 = 0;

        this.wh1 = 0;
        this.wk1 = 0-this.b;
        this.wh2 = 0;
        this.wk2 = 0+this.b;

        this.vhfor1 = '-a';
        this.vkfor1 = '0';
        this.vhfor2 = 'a';
        this.vkfor2 = '0';

        this.fhfor1 = '-c';
        this.fkfor1 = '0';
        this.fhfor2 = 'c';
        this.fkfor2 = '0';

        this.whfor1 = '0';
        this.wkfor1 = '-b';
        this.whfor2 = '0';
        this.wkfor2 = 'b';

        this.horver = 'horizontal';
        this.axform = 'x^2\'s denominator is greater than y^2\'s which means it is a^2 and the major axis is horizontal.';
      }
      stanorisol.style.display = "block";
      standsol.style.display = "none";
      genesol.style.display = "none";

    }else if (this.type=='stan'){
      console.log(this.type+' type stan');
      
      let aa = Number(Math.sqrt(this.aval)).toFixed(2);
      let bb = Number(Math.sqrt(this.bval)).toFixed(2);
      let cc = Number(Math.sqrt(+this.aval - +this.bval)).toFixed(2);
      this.a = parseFloat(aa);
      this.b = parseFloat(bb);
      this.c = parseFloat(cc);

      console.log(this.c + " c , "+cc);
      if(this.c<=0){
        this.presentAlert('Remember, a is always greater than b. Default value of c is 1.');
        this.c = 1;
      }

      if(this.axis==true){//vertical b under x

        this.vh1 = this.hval;
        this.vk1 = parseFloat(Number(+this.kval - +this.a).toFixed(2));
        this.vh2 = this.hval;
        this.vk2 = parseFloat(Number(+this.kval + +this.a).toFixed(2));

        this.fh1 = this.hval;
        this.fk1 = parseFloat(Number(+this.kval - +this.c).toFixed(2));
        this.fh2 = this.hval;
        this.fk2 = parseFloat(Number(+this.kval + +this.c).toFixed(2));

        this.wh1 = parseFloat(Number(+this.hval - +this.b).toFixed(2));
        this.wk1 = this.kval;
        this.wh2 = parseFloat(Number(+this.hval + +this.b).toFixed(2));
        this.wk2 = this.kval;

        this.vhfor1 = 'h';
        this.vkfor1 = 'k-a';
        this.vhfor2 = 'h';
        this.vkfor2 = 'k+a';

        this.fhfor1 = 'h';
        this.fkfor1 = 'k-c';
        this.fhfor2 = 'h';
        this.fkfor2 = 'k+c';

        this.whfor1 = 'h-b';
        this.wkfor1 = 'k';
        this.whfor2 = 'h+b';
        this.wkfor2 = 'k';

        this.horver = 'vertical';
        this.axform = 'x^2\'s denominator is smaller that y^2\'s which means it is b^2 and the major axis is vertical.';
      }else{//horizontal a under x

        
        this.vh1 = parseFloat(Number(+this.hval - +this.a).toFixed(2));
        this.vk1 = this.kval;
        this.vh2 = parseFloat(Number(+this.hval + +this.a).toFixed(2));
        this.vk2 = this.kval;
        
        this.fh1 = parseFloat(Number(+this.hval - +this.c).toFixed(2));
        this.fk1 = this.kval;
        this.fh2 = parseFloat(Number(+this.hval + +this.c).toFixed(2));
        this.fk2 = this.kval;

        this.wh1 = this.hval;
        this.wk1 = parseFloat(Number(+this.kval - +this.b).toFixed(2));
        this.wh2 = this.hval;
        this.wk2 = parseFloat(Number(+this.kval + +this.b).toFixed(2));

        this.vhfor1 = 'h-a';
        this.vkfor1 = 'k';
        this.vhfor2 = 'h+a';
        this.vkfor2 = 'k';

        this.fhfor1 = 'h-c';
        this.fkfor1 = 'k';
        this.fhfor2 = 'h+c';
        this.fkfor2 = 'k';

        this.whfor1 = 'h';
        this.wkfor1 = 'k-b';
        this.whfor2 = 'h';
        this.wkfor2 = 'k+b';

        this.horver = 'horizontal';
        this.axform = 'x^2\'s denominator is greater than y^2\'s which means it is a^2 and the major axis is horizontal.';
      }

      stanorisol.style.display = "none";
      standsol.style.display = "block";
      genesol.style.display = "none";


    }else if (this.type=='gen'){
      console.log(this.type+' type gen');
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

        this.vh1 = this.hval;
        this.vk1 = parseFloat(Number(+this.kval - +this.a).toFixed(2));
        this.vh2 = this.hval;
        this.vk2 = parseFloat(Number(+this.kval + +this.a).toFixed(2));

        this.fh1 = this.hval;
        this.fk1 = parseFloat(Number(+this.kval - +this.c).toFixed(2));
        this.fh2 = this.hval;
        this.fk2 = parseFloat(Number(+this.kval + +this.c).toFixed(2));

        this.wh1 = parseFloat(Number(+this.hval - +this.b).toFixed(2));
        this.wk1 = this.kval;
        this.wh2 = parseFloat(Number(+this.hval + +this.b).toFixed(2));
        this.wk2 = this.kval;

        this.vhfor1 = 'h';
        this.vkfor1 = 'k-a';
        this.vhfor2 = 'h';
        this.vkfor2 = 'k+a';

        this.fhfor1 = 'h';
        this.fkfor1 = 'k-c';
        this.fhfor2 = 'h';
        this.fkfor2 = 'k+c';

        this.whfor1 = 'h-b';
        this.wkfor1 = 'k';
        this.whfor2 = 'h+b';
        this.wkfor2 = 'k';

        this.horver = 'vertical';
        this.axform = 'x^2\'s denominator is smaller that y^2\'s which means it is b^2 and the major axis is vertical.';

      }else{//horizontal a under x

        this.vh1 = parseFloat(Number(+this.hval - +this.a).toFixed(2));
        this.vk1 = this.kval;
        this.vh2 = parseFloat(Number(+this.hval + +this.a).toFixed(2));
        this.vk2 = this.kval;
        
        this.fh1 = parseFloat(Number(+this.hval - +this.c).toFixed(2));
        this.fk1 = this.kval;
        this.fh2 = parseFloat(Number(+this.hval + +this.c).toFixed(2));
        this.fk2 = this.kval;

        this.wh1 = this.hval;
        this.wk1 = parseFloat(Number(+this.kval - +this.b).toFixed(2));
        this.wh2 = this.hval;
        this.wk2 = parseFloat(Number(+this.kval + +this.b).toFixed(2));

        this.vhfor1 = 'h-a';
        this.vkfor1 = 'k';
        this.vhfor2 = 'h+a';
        this.vkfor2 = 'k';

        this.fhfor1 = 'h-c';
        this.fkfor1 = 'k';
        this.fhfor2 = 'h+c';
        this.fkfor2 = 'k';

        this.whfor1 = 'h';
        this.wkfor1 = 'k-b';
        this.whfor2 = 'h';
        this.wkfor2 = 'k+b';
        
        this.horver = 'horizontal';
        this.axform = 'x^2\'s denominator is greater than y^2\'s which means it is a^2 and the major axis is horizontal.';
      }

      stanorisol.style.display = "none";
      standsol.style.display = "none";
      genesol.style.display = "block";

    }else{

      console.log(this.type+"sumthins wrong na naman.");
    }
  }

}
