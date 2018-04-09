import { Component, ViewChild, trigger, transition, style, state, animate, keyframes } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { CirdefinePage } from '../cirdefine/cirdefine';
import { Storage } from '@ionic/storage';
//import { Observable } from 'rxjs/Observable';
import { AgtutsmongoProvider } from './../../providers/agtutsmongo/agtutsmongo';

@IonicPage()
@Component({
  selector: 'page-tutorialmain',
  templateUrl: 'tutorialmain.html',
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

export class TutorialmainPage {
//@ViewChild('canvas') canvasEl : ElementRef;
//@ViewChild('canvas1') canvasEl1 : ElementRef;
////@ViewChild('canvas2') canvasEl2 : ElementRef;
//@ViewChild('canvas3') canvasEl3 : ElementRef;
//@ViewChild('canvas4') canvasEl4 : ElementRef;
@ViewChild(Slides) slides : Slides;
public skef:string = 'START LEARNING';
state: string = 'x';
//private _CANVAS : any;
//private _CONTEXT : any;

  constructor(public agtuts: AgtutsmongoProvider, public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
  }
  public slideind:number=0;

  slideChanged(){
    try{
      this.slideind = this.slides.getActiveIndex();
    }catch(error){
      console.log('something\'s thingy shit when slidechanged');
    }
    
   /* if (this.slideind==0){
      
      
    }else if (this.slideind==1){
      this.initialiseCanvas(this.slideind);
      this.drawGrid();
      this.drawCircle();
    }else if (this.slideind==2){
      this.initialiseCanvas(this.slideind);
      this.drawGrid();
      this.drawParabola();
    }else if (this.slideind==3){
      this.initialiseCanvas(this.slideind);
      this.drawGrid();
      this.drawEllipse();
    }else if (this.slideind==4){
      this.initialiseCanvas(this.slideind);
      this.drawGrid();
      this.drawHyperbola();
    }else if (this.slideind==5){
      this.initialiseCanvas(this.slideind);
      this.drawGrid();
      this.drawNonlinear();
    }else{
      console.log('something\'s wrong daw');
    }*/
  
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
  try = [0, 11, 22, 33];
  //tang:any = [];
  //data:any = [];
  //datas: Observable<any>;
 totos: any = [];
  //datas = null;
  //public etonas: string[];
  
  //pass = null;
  //public num: number;
  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialmainPage');
    this.totos = this.navParams.data;
    //for ( var i = 0; i < this.totos.length; i++ ) {
      //this.etonas[i] = this.totos[i];
    // console.log(this.etona[i]);
    //}
  }


  
 
  /*loadData(){
    this.storage.get('tuts').then((val) => {
      if(val!=null && val !=undefined){
        this.tutorials = JSON.parse(val);
        //console.log(this.conts);
      }else{
        console.log('omg undefined huhu');
      }
    });
  }*/
/*


public CenterX: number;
public CenterY: number;
public totwidth: number=300;
public totheight: number=250;
public CenterXpos: number;
  public CenterXneg: number;
  public CenterYpos: number;
  public CenterYneg: number;
  public unit: number;
  drawGrid(){
    this.clearCanvas();

    this.CenterY = this._CANVAS.height/2;
    this.CenterX = this._CANVAS.width/2;
    this._CONTEXT.beginPath();
    this._CONTEXT.moveTo(this.CenterX, 0); //y-axis
    this._CONTEXT.lineTo(this.CenterX, this.totheight);
    this._CONTEXT.moveTo(0, this.CenterY); //x-axis
    this._CONTEXT.lineTo(this.totwidth, this.CenterY);
    this._CONTEXT.lineWidth = 1;
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
  public spntX:number;
  public spntY:number;
  public epntX:number;
  public epntY:number;
  public cpntX:number;
  public cpntY:number;
  drawParabola(){
    
    this.spntX = -(Math.sqrt(4*2*15)*10) + this.totwidth/2;
    this.spntY = this.totheight/2 - 150;
    this.epntX = (Math.sqrt(4*2*15)*10) + this.totwidth/2;
    this.epntY = this.totheight/2 - 150;
    this.cpntX = 0 + this.totwidth/2;
    this.cpntY = this.totheight/2 + 150;
    this._CONTEXT.beginPath();
 
    this._CONTEXT.moveTo(this.spntX, this.spntY);
    this._CONTEXT.quadraticCurveTo(this.cpntX, this.cpntY, this.epntX, this.epntY);
    this._CONTEXT.stroke();

      this.drawDirectrix(0, this.totheight/2+(2*10), this.totwidth,this.totheight/2+(2*10));
      

      this.drawPoint(this.totwidth/2,this.totheight/2);//vertex
      this.drawPoint(this.totwidth/2,this.totheight/2-(2*10));//focus
      this.drawPoint(this.spntX,this.spntY);//startpoint
      this.drawPoint(this.epntX,this.epntY);//endpoint
    // x, y, radius, startAngle, endAngle
   
  }
public c: number;
public canvalX:number;
  public canvalY:number;
  public canvalR:number;
  drawEllipse(){
    let h:number=0;
    let k:number=0;
    let a:number=10;
    let b:number=6;
    this.c = Math.sqrt((a*a)-(b*b));
    this.canvalX = (h*10)+this.totwidth/2;
    this.canvalY = this.totheight/2 - (k*10);
    this.canvalR = b*10;
    let plry:number;
    let nlry:number;
    
    let plrx:number;
    let nlrx:number;
    

    plry = this.totheight/2-(k+(b/3)*4)*10;//top curve
    nlry = this.totheight/2-(k-(b/3)*4)*10;//below curve
     
    plrx = this.totwidth/2+((h+a)*10)
    nlrx = this.totwidth/2+((h-a)*10)
      
    this._CONTEXT.lineWidth = 2;
    this._CONTEXT.strokeStyle = '#ffffff';
      //top curve
    this._CONTEXT.beginPath();
    this._CONTEXT.moveTo(this.totwidth/2+((h+a)*10), this.canvalY);//-a
    this._CONTEXT.bezierCurveTo(plrx,plry,nlrx,plry,this.totwidth/2+((h-a)*10), this.canvalY);//end point is +a
    this._CONTEXT.stroke();
      
      //below curve
    
    this._CONTEXT.moveTo(this.totwidth/2+((h+a)*10), this.canvalY);
    this._CONTEXT.bezierCurveTo(plrx,nlry,nlrx,nlry,this.totwidth/2+((h-a)*10), this.canvalY);
    this._CONTEXT.stroke();

    this.drawPoint(this.canvalX, this.totheight/2-((k+b)*10));//+b
    this.drawPoint(this.canvalX, this.totheight/2-((k-b)*10));//-b 
    this.drawPoint(this.totwidth/2+((h+a)*10), this.canvalY);//+a vertex2
    this.drawPoint(this.totwidth/2+((h-a)*10), this.canvalY);//-a vertex1      this.drawPoint(this.totwidth/2+((h+this.c)*10), this.canvalY);//+c focus2
    this.drawPoint(this.totwidth/2+((h-this.c)*10), this.canvalY);//-c focus1
    this.drawPoint(this.canvalX, this.canvalY);//center
  }

  drawHyperbola(){
    this.spntX = -(Math.sqrt(4*2*12)*10) + this.totwidth/2;
    this.spntY = this.totheight/2 - 120;
    this.epntX = (Math.sqrt(4*2*12)*10) + this.totwidth/2;
    this.epntY = this.totheight/2 - 120;
    this.cpntX = 0 + this.totwidth/2;
    this.cpntY = this.totheight/2 + 80;
    this._CONTEXT.beginPath();
 
    this._CONTEXT.moveTo(this.spntX, this.spntY);
    this._CONTEXT.quadraticCurveTo(this.cpntX, this.cpntY, this.epntX, this.epntY);
    this._CONTEXT.lineWidth = 2;
     this._CONTEXT.strokeStyle = '#ffffff';
    this._CONTEXT.stroke();

      //this.drawDirectrix(0, this.totheight/2+(2*10), this.totwidth,this.totheight/2+(2*10));
      

      //this.drawPoint(this.totwidth/2,this.totheight/2);//vertex
      //this.drawPoint(this.totwidth/2,this.totheight/2-(2*10));//focus
      this.drawPoint(this.spntX,this.spntY);//startpoint
      this.drawPoint(this.epntX,this.epntY);//endpoint


      this.spntX = -(Math.sqrt(4*2*12)*10) + this.totwidth/2;
    this.spntY = this.totheight/2 + 120;
    this.epntX = (Math.sqrt(4*2*12)*10) + this.totwidth/2;
    this.epntY = this.totheight/2 + 120;
    this.cpntX = 0 + this.totwidth/2;
    this.cpntY = this.totheight/2 - 80;
    this._CONTEXT.beginPath();
 
    this._CONTEXT.moveTo(this.spntX, this.spntY);
    this._CONTEXT.quadraticCurveTo(this.cpntX, this.cpntY, this.epntX, this.epntY);

    this._CONTEXT.stroke();
    this.drawPoint(this.spntX,this.spntY);//startpoint
      this.drawPoint(this.epntX,this.epntY);//endpoint

  }

  drawNonlinear(){
 
    this._CONTEXT.beginPath();
    this._CONTEXT.moveTo((this._CANVAS.width/2)-100,(this._CANVAS.height/2)-100);
    this._CONTEXT.bezierCurveTo((this._CANVAS.width/2)-50,(this._CANVAS.height/2)+200,(this._CANVAS.width/2)+50,(this._CANVAS.height/2)-200,(this._CANVAS.width/2)+100,(this._CANVAS.height/2)+100);
    
    this._CONTEXT.lineWidth = 2;
    this._CONTEXT.strokeStyle = '#ffffff';
    this._CONTEXT.stroke();

    this.drawPoint(this._CANVAS.width/2, this._CANVAS.height/2);
    this.drawPoint((this._CANVAS.width/2)-100,(this._CANVAS.height/2)-100);
    this.drawPoint((this._CANVAS.width/2)+100,(this._CANVAS.height/2)+100);
  }

  drawCircle(){
     this._CONTEXT.beginPath();
     // x, y, radius, startAngle, endAngle
     this._CONTEXT.arc(this._CANVAS.width/2, this._CANVAS.height/2, 80, 0, 2 * Math.PI);
     this._CONTEXT.lineWidth = 2;
     this._CONTEXT.strokeStyle = '#ffffff';
     this._CONTEXT.stroke();
     this.drawPoint(this._CANVAS.width/2, this._CANVAS.height/2);
  }
  drawPoint(xVal:number, yVal:number){
   
    this._CONTEXT.beginPath();
    this._CONTEXT.arc(xVal, yVal, 3, 0, 2 * Math.PI);
    this._CONTEXT.fillStyle = '#ff0000';
    this._CONTEXT.fill();
  }

  drawDirectrix(x1, y1, x2, y2){
   
    this._CONTEXT.beginPath();
    this._CONTEXT.moveTo(x1, y1);  
    this._CONTEXT.lineTo(x2, y2)    
    this._CONTEXT.lineWidth = 2;
    this._CONTEXT.strokeStyle = "#ff0000";
    this._CONTEXT.stroke();
  }

  initialiseCanvas(num:number){
  if (num==0){

  }else if (num==1){
    //this._CANVAS 	    = this.canvasEl.nativeElement;
  }
  else if (num==2){
    this._CANVAS 	    = this.canvasEl1.nativeElement;
  }
  else if (num==3){
    this._CANVAS 	    = this.canvasEl2.nativeElement;
  }
  else if (num==4){
    this._CANVAS 	    = this.canvasEl3.nativeElement;
  }else if (num==5){
    this._CANVAS 	    = this.canvasEl4.nativeElement;
  }else{
    console.log('sumthing wrong here');
  }
  
    this._CANVAS.width  	= 300;
    this._CANVAS.height 	= 250;
   if(this._CANVAS.getContext)
   {
      this.setupCanvas();
   }
}

setupCanvas()
{
   this._CONTEXT = this._CANVAS.getContext('2d');
   this._CONTEXT.fillStyle = "#3e3e3e";
   this._CONTEXT.fillRect(0, 0, 300, 250);
}

clearCanvas()
{
   this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
   this.setupCanvas();
}*/
skip(){
    this.navCtrl.push(CirdefinePage);
}

}
