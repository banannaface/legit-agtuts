import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



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
import { NondefinePage } from '../nondefine/nondefine';
import { NongraphPage } from '../nongraph/nongraph';
import { NonsolvePage } from '../nonsolve/nonsolve';
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
  
  pages: Array<{title:string, component:any}>;
  cpages: Array<{title:string, component:any}>;
  ppages: Array<{title:string, component:any}>;
  epages: Array<{title:string, component:any}>;
  hpages: Array<{title:string, component:any}>;
  npages: Array<{title:string, component:any}>;
  activePage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      {title: "Introduction", component:TutorialmainPage},
    ];
    this.cpages = [
      {title: "Defining Circle", component:CirdefinePage},
      {title: "Graphing Circle", component:CirgraphPage},
      {title: "Solving Circle", component:CirsolvePage}
    ];

    this.ppages = [
      {title: "Defining Parabola", component:PardefinePage},
      {title: "Graphing Parabola", component:PargraphPage},
      {title: "Solving Parabola", component:ParsolvePage}
    ];

    this.epages = [
      {title: "Defining Ellipse", component:ElldefinePage},
      {title: "Graphing Ellipse", component:EllgraphPage},
      {title: "Solving Ellipse", component:EllsolvePage}
    ];

    this.hpages = [
      {title: "Defining Hyperbola", component:HypdefinePage},
      {title: "Graphing Hyperbola", component:HypgraphPage},
      {title: "Solving Hyperbola", component:HypsolvePage}
    ];

    this.npages = [
      {title: "Defining Non-linear Equations", component:NondefinePage},
      {title: "Graphing Non-linear Equations", component:NongraphPage},
      {title: "Solving Non-linear Equations", component:NonsolvePage}
    ];
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TocPage');
  }
  openPage(page){
    this.navCtrl.push(page.component);
    this.activePage = page;
  }

  checkActive(page){
    return page == this.activePage;
  }
}
