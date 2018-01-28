import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GraphcirPage } from '../graphcir/graphcir';


@IonicPage()

@Component({
  selector: 'page-graph',
  templateUrl: 'graph.html',
})
export class GraphPage {
  @ViewChild('canvas') canvasEl : ElementRef;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  choice(){
    this.navCtrl.push(GraphcirPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GraphPage');
    

  }

  back(){
    this.navCtrl.pop().catch(() => console.log('view was not dismissed'));
  }
  /*
  initialiseCanvas()
  {
     if(this._CANVAS.getContext)
     {
        this.setupCanvas();
     }
  }
  setupCanvas()
  {
     this._CONTEXT = this._CANVAS.getContext('2d');
     this._CONTEXT.fillStyle = "#3e3e3e";
     this._CONTEXT.fillRect(0, 0, 330, 400);
  }
  clearCanvas()
  {
     this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
     this.setupCanvas();
  }
  drawGrid(){
    this.CenterX = this._CANVAS.width/2;
    this.CenterY = this._CANVAS.height/2;
    this.clearCanvas();
    this._CONTEXT.beginPath();
    this._CONTEXT.moveTo(this.CenterX, 0); //y-axis
    this._CONTEXT.lineTo(this.CenterX, 400);
    this._CONTEXT.moveTo(0, this.CenterY); //x-axis
    this._CONTEXT.lineTo(330, this.CenterY);
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
    while(this.CenterXpos <= 330){ 
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
    while(this.CenterYneg <= 400){ 
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

  
  drawCircle()
  {
    this.drawGrid();

    this._CONTEXT.beginPath();
    if (this.h<0){
      this.canvalX = (this.h*10)+165;
    }else{
      this.canvalX = (this.h*10)+165;
    }
    if (this.k<0){
      this.canvalY = 200 - (this.k*10);
    }else{
      this.canvalY = 200 - (this.k*1);
    }
    this.canvalR = (this.r*10);
    // x, y, radius, startAngle, endAngle
    this._CONTEXT.arc(this.canvalX, this.canvalY, this.canvalR, 0, 2 * Math.PI);      
    this._CONTEXT.lineWidth = 1;
    this._CONTEXT.strokeStyle = '#ffffff';
    this._CONTEXT.stroke();

    this._CONTEXT.arc(this.canvalX, this.canvalY, 2, 0, 2 * Math.PI);      
    this._CONTEXT.lineWidth = 1;
    this._CONTEXT.strokeStyle = '#ff0000';
    this._CONTEXT.stroke();
  }

  drawSquare()
  {
     this.clearCanvas();
     this._CONTEXT.beginPath();
     this._CONTEXT.rect(this._CANVAS.width/2 - 100, this._CANVAS.height/2 - 100, 200, 200);
     this._CONTEXT.lineWidth = 1;
     this._CONTEXT.strokeStyle = '#ffffff';
     this._CONTEXT.stroke();
  }

  drawTriangle()
  {
     this.clearCanvas();
     this._CONTEXT.beginPath();
     this._CONTEXT.moveTo(this._CANVAS.width/2 - 100, this._CANVAS.height/2 + 100);
     this._CONTEXT.lineTo(this._CANVAS.width/2 + 100, this._CANVAS.height/2 + 100);
     this._CONTEXT.lineTo(this._CANVAS.width/2, this._CANVAS.height/2);
     this._CONTEXT.lineTo(this._CANVAS.width/2 -100, this._CANVAS.height/2 + 100);
     this._CONTEXT.lineWidth = 1;
     this._CONTEXT.strokeStyle = '#ffffff';
     this._CONTEXT.stroke();
  }

  */
}
