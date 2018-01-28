import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the CirgraphPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cirgraph',
  templateUrl: 'cirgraph.html',
})
export class CirgraphPage {
  @ViewChild('canvas') canvasEl : ElementRef;
  private _CANVAS  : any;
  private _CONTEXT : any;
  public devwidth : number;
  public devheight : number;
  public toth : number;
  public rangech : number = 0;
  public rangeck : number = 0;
  public ranger : number = 1;
  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
    platform.ready().then((readySource) => {
      console.log('Width: plat' + platform.width());
      console.log('Height: plat' + platform.height());
      this.devwidth = platform.width();
      this.devheight = platform.height();
      this.toth = this.devheight*0.6;
    });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CirgraphPage');
    
    this.initialiseCanvas();
    this.drawGrid();
    this.drawCircle(this.rangech, this.rangeck, this.ranger);
    console.log('Height: ' + this._CANVAS.height);
    console.log('width: ' + this._CANVAS.width);

   
  }

  changecenterh(rch){
    this.rangech = rch;
    console.log(this.rangech);
    this.drawCircle(this.rangech, this.rangeck, this.ranger);
  }

  changecenterk(rck){
    this.rangeck = rck;
    console.log(this.rangeck);
    this.drawCircle(this.rangech, this.rangeck, this.ranger);
  }

  changeradius(rr){
    this.ranger = rr;
    console.log(this.ranger);
    this.drawCircle(this.rangech, this.rangeck, this.ranger);
  }


  initialiseCanvas(){
    this._CANVAS 	    = this.canvasEl.nativeElement;
    this._CANVAS.width  	= this.devwidth;
    this._CANVAS.height 	= this.toth;

    if(this._CANVAS.getContext)
    {
      this.setupCanvas();
    }
  }
  setupCanvas(){
    this._CONTEXT = this._CANVAS.getContext('2d');
    this._CONTEXT.fillStyle = "#3e3e3e";
    this._CONTEXT.fillRect(0, 0, this.devwidth, this.toth);
  }
  clearCanvas(){
    this._CONTEXT.clearRect(0, 0, this.devwidth, this.toth);
    this.setupCanvas();
  }

  public CenterX: number;
  public CenterY: number;
  public totwidth: number;
  public totheight: number;
  public CenterXpos: number;
  public CenterXneg: number;
  public CenterYpos: number;
  public CenterYneg: number;
  public unit: number;
  drawGrid(){
   
    this.totwidth = this.devwidth;
    this.totheight = this.toth;
    this.CenterY = this._CANVAS.height/2;
    this.CenterX = this._CANVAS.width/2;
    this._CONTEXT.beginPath();
    this._CONTEXT.moveTo(this.CenterX, 0); //y-axis
    this._CONTEXT.lineTo(this.CenterX, this.totheight);
    this._CONTEXT.moveTo(0, this.CenterY); //x-axis
    this._CONTEXT.lineTo(this.totwidth, this.CenterY);
    this._CONTEXT.lineWidth = 2;
    this._CONTEXT.strokeStyle = '#ffffff';
    this._CONTEXT.stroke();

    //drawing unit marks
    this._CONTEXT.font = '5pt Calibri'
    this._CONTEXT.textAlign = 'center'
    this._CONTEXT.textBaseline = 'top'
    this._CONTEXT.fillStyle = '#ffffff'

    this.CenterXpos = this.CenterX + 10; //x-axis positive unit marks
    this.unit = 1;
    while(this.CenterXpos <= this.totwidth){ 
      this._CONTEXT.moveTo(this.CenterXpos, this.CenterY - 5); 
      this._CONTEXT.lineTo(this.CenterXpos, this.CenterY + 5);
  
      this._CONTEXT.fillText(this.unit, this.CenterXpos, this.CenterY + 8);
    this.CenterXpos = this.CenterXpos + 10;
    this.unit = this.unit + 1;

    this._CONTEXT.lineWidth = 1;
    this._CONTEXT.strokeStyle = '#ffffff';
    this._CONTEXT.stroke();
    }

    this.CenterXneg = this.CenterX - 10; //x-axis negative unit marks
    this.unit =1;
    while(this.CenterXneg >= 0){ 
      this._CONTEXT.moveTo(this.CenterXneg, this.CenterY - 5); 
      this._CONTEXT.lineTo(this.CenterXneg, this.CenterY + 5);
  
      this._CONTEXT.fillText('-'+this.unit, this.CenterXneg, this.CenterY - 15);
    this.CenterXneg = this.CenterXneg - 10;
    this.unit = this.unit +1;

    this._CONTEXT.lineWidth = 1;
    this._CONTEXT.strokeStyle = '#ffffff';
    this._CONTEXT.stroke();
    }

    this.CenterYpos = this.CenterY - 10; //y-axis positive unit marks
    this.unit = 1;
    while(this.CenterYpos >= 0){ 
      this._CONTEXT.moveTo(this.CenterX - 5, this.CenterYpos); 
      this._CONTEXT.lineTo(this.CenterX + 5, this.CenterYpos);
      
      this._CONTEXT.fillText(this.unit, this.CenterX + 12, this.CenterYpos-3);
    this.CenterYpos = this.CenterYpos - 10;
    this.unit = this.unit + 1

    this._CONTEXT.lineWidth = 1;
    this._CONTEXT.strokeStyle = '#ffffff';
    this._CONTEXT.stroke();
    }

    this.CenterYneg = this.CenterY + 10; //y-axis negative unit marks
    this.unit = 1;
    while(this.CenterYneg <= this.totheight){ 
      this._CONTEXT.moveTo(this.CenterX - 5, this.CenterYneg); 
      this._CONTEXT.lineTo(this.CenterX + 5, this.CenterYneg);
  
      this._CONTEXT.fillText('-'+this.unit, this.CenterX - 12, this.CenterYneg-3);
    this.CenterYneg = this.CenterYneg + 10;
    this.unit = this.unit + 1
    
    this._CONTEXT.lineWidth = 1;
    this._CONTEXT.strokeStyle = '#ffffff';
    this._CONTEXT.stroke();
    }
  }
  drawPoint(xVal:number, yVal:number){
    
    this._CONTEXT.beginPath();
    this._CONTEXT.arc(xVal, yVal, 3, 0, 2 * Math.PI);      
    this._CONTEXT.fillStyle = '#ff0000';
    this._CONTEXT.fill();
  }
  public canvalX:number;
  public canvalY:number;
  public canvalR:number;

  drawCircle(h:number, k:number, r:number){
    this.clearCanvas();
    this.drawGrid();
    console.log(h+'  '+k+'  '+r)
   
    this._CONTEXT.beginPath();

    this.canvalX = (h*10)+this.totwidth/2;
    this.canvalY = this.totheight/2 - (k*10);

    this.canvalR = (r*10);
    console.log(this.canvalX+'  '+this.canvalY+'  '+this.canvalR)
      // x, y, radius, startAngle, endAngle
      this._CONTEXT.arc(this.canvalX, this.canvalY, this.canvalR, 0, 2 * Math.PI);      
      this._CONTEXT.lineWidth = 2;
      this._CONTEXT.strokeStyle = '#ffffff';
      this._CONTEXT.stroke();
    this.drawPoint(this.canvalX, this.canvalY);
    this.writeLabel('center: ('+h+','+k+') radius: '+r, this.totwidth*0.25, this.totheight*0.9);
  }

  writeLabel(str:string, x:number, y:number){
    
    this._CONTEXT.font = '12pt Calibri'
    this._CONTEXT.textAlign = 'center'
    this._CONTEXT.textBaseline = 'top'
    this._CONTEXT.fillStyle = '#de691a'
    this._CONTEXT.fillText(str, x, y);
  }
}
