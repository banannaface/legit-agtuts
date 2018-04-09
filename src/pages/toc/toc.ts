import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgtutsmongoProvider } from './../../providers/agtutsmongo/agtutsmongo';


import { TutorialmainPage } from '../tutorialmain/tutorialmain';
import { CirdefinePage } from '../cirdefine/cirdefine';
import { CirgraphPage } from '../cirgraph/cirgraph';
import { CirsolvePage } from '../cirsolve/cirsolve';
import { PardefinePage } from '../pardefine/pardefine';
import { PargraphPage } from '../pargraph/pargraph';
import { ParsolvePage } from '../parsolve/parsolve';
import { ElldefinePage } from '../elldefine/elldefine';
import { EllgraphPage } from '../ellgraph/ellgraph';
import { EllsolvePage } from '../ellsolve/ellsolve';
import { HypdefinePage } from '../hypdefine/hypdefine';
import { HypgraphPage } from '../hypgraph/hypgraph';
import { HypsolvePage } from '../hypsolve/hypsolve';
//import { NondefinePage } from '../nondefine/nondefine';
//import { NongraphPage } from '../nongraph/nongraph';
//import { NonsolvePage } from '../nonsolve/nonsolve';
/**
 * Generated class for the TocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toc',
  templateUrl: 'toc.html',
})
export class TocPage {
  
  pages: Array<{title:string, component:any, wtf: any}>;
  cpages: Array<{title:string, component:any, wtf: any}>;
  ppages: Array<{title:string, component:any, wtf: any}>;
  epages: Array<{title:string, component:any, wtf: any}>;
  hpages: Array<{title:string, component:any, wtf: any}>;
  npages: Array<{title:string, component:any, wtf: any}>;
  activePage: any;
  constructor(public agtuts: AgtutsmongoProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      {title: "Introduction", component:TutorialmainPage, wtf:this.agtuts.totos},
    ];
    this.cpages = [
      {title: "Defining Circle", component:CirdefinePage, wtf:this.agtuts.defcirs},
      {title: "Graphing Circle", component:CirgraphPage, wtf:''},
      {title: "Solving Circle", component:CirsolvePage, wtf:this.agtuts.solcirs}
    ];

    this.ppages = [
      {title: "Defining Parabola", component:PardefinePage, wtf:this.agtuts.defpars},
      {title: "Graphing Parabola", component:PargraphPage, wtf:''},
      {title: "Solving Parabola", component:ParsolvePage, wtf:this.agtuts.solpars}
    ];

    this.epages = [
      {title: "Defining Ellipse", component:ElldefinePage, wtf:this.agtuts.defells},
      {title: "Graphing Ellipse", component:EllgraphPage, wtf:''},
      {title: "Solving Ellipse", component:EllsolvePage, wtf:this.agtuts.solells}
    ];

    this.hpages = [
      {title: "Defining Hyperbola", component:HypdefinePage, wtf:this.agtuts.defhyps},
      {title: "Graphing Hyperbola", component:HypgraphPage, wtf:''},
      {title: "Solving Hyperbola", component:HypsolvePage, wtf:this.agtuts.solhyps}
    ];

    /*this.npages = [
      {title: "Defining Non-linear Equations", component:NondefinePage, wtf:this.agtuts.totos},
      {title: "Graphing Non-linear Equations", component:NongraphPage, wtf:this.agtuts.totos},
      {title: "Solving Non-linear Equations", component:NonsolvePage, wtf:this.agtuts.totos}
    ];*/
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TocPage');
  }
  openPage(page){
    this.navCtrl.push(page.component, page.wtf);
    this.activePage = page;
  }

  checkActive(page){
    return page == this.activePage;
  }
}
