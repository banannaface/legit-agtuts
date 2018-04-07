import { Component, ViewChild, trigger, transition, style, state, animate, keyframes } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ToastController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
//import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { TutorialmainPage } from '../tutorialmain/tutorialmain';
import { GraphcirPage } from '../graphcir/graphcir';
import { SolvePage } from '../solve/solve';
import { QuizPage } from '../quiz/quiz';
import { HelpPage } from '../help/help';
import { AboutPage } from '../about/about';
import { AgtutsmongoProvider } from './../../providers/agtutsmongo/agtutsmongo';

/**
 * Generated class for the TutorialsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorials',
  templateUrl: 'tutorials.html',
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
export class TutorialsPage {
  @ViewChild(Slides) slides:Slides;
 public skef:string = 'START LEARNING';
  state: string = 'x';

  connected: Subscription;
  disconnected: Subscription;
  tut: Observable<any>
  //public http: HttpClient
  constructor(public http: Http, public storage: Storage, public agtutsmongo: AgtutsmongoProvider, private toast: ToastController, private network: Network, public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidEnter(){
    this.connected = this.network.onConnect().subscribe(data => {
      console.log(data);
      this.networkupdate(data.type, 1);
    }, error => console.error(error));
    this.disconnected = this.network.onDisconnect().subscribe(data => {
      console.log(data);
      this.networkupdate(data.type, 2);
    }, error => console.error(error));

  }

  ionViewWillLeave(){
    this.connected.unsubscribe();
    this.disconnected.unsubscribe();
  }

  
  /*data:any = [];
  url:string = 'http://localhost:5000/defpar';
  
  getalltuts(){
    this.tut = this.http.get(this.url)
    .map(response => response.json().result);

    this.tut.subscribe(result => {
      this.data = result;
      console.log(this.data);
    });
  }

  savealltuts(){
    
    this.storage.set('intuts', JSON.stringify(this.data));
  }*/

  networkupdate(connstate: string, num: number){

    let netype = this.network.type;
    if (num==1){
      this.toast.create({
        message: `you are ${connstate} via ${netype}.`,
        duration: 3000
      }).present();
     // this.getalltuts();
     // this.savealltuts();

      //do the 8.5 saving data blabla tutorial on server.js thingies
      //tas download sa local storage ng phone ang json file then load it.
    }else if (num==2){
      this.toast.create({
        message: `you are ${connstate}.`,
        duration: 3000
      }).present();
    }
    
  }

  public slideind:number=0;

  slideChanged(){
    try{
      this.slideind = this.slides.getActiveIndex();
    }catch(error){
      console.log('something\'s thingy shit when slidechanged');
    }
    
    if (this.slideind==0){
      
      this.skef = 'START LEARNING';
    }else if (this.slideind==1){
     
      this.skef = 'START GRAPHING';
    }else if (this.slideind==2){
     
      this.skef = 'START SOLVING';
    }else if (this.slideind==3){
      
      this.skef = 'TAKE THE QUIZ';
    }else if (this.slideind==4){
      
      this.skef = 'CHECK MANUAL';
    }else if (this.slideind==5){
      
      this.skef = 'ABOUT ME';
    }else{
      console.log('something\'s wrong daw');
    }
  }

  skip(){
    if (this.slideind==0){
      this.navCtrl.push(TutorialmainPage);
      
    }else if (this.slideind==1){
      this.navCtrl.push(GraphcirPage);
      
    }else if (this.slideind==2){
      this.navCtrl.push(SolvePage);
      
    }else if (this.slideind==3){
      this.navCtrl.push(QuizPage);
     
    }else if (this.slideind==4){
      this.navCtrl.push(HelpPage);
     
    }else if (this.slideind==5){
      this.navCtrl.push(AboutPage);
     
    }else{
      console.log('something\'s wrong daw');
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

  animationDone() {
    try{
      this.state = 'x';
    }catch(error){
      console.log('something\'s thingy shit when animationdone');
    }
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialsPage');
   
  }
 
}
