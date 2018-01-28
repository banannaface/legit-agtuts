import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TocPage } from '../pages/toc/toc';
import { TutorialsPage } from '../pages/tutorials/tutorials';
import { GraphcirPage } from '../pages/graphcir/graphcir';
import { SolvePage } from '../pages/solve/solve';
import { QuizPage } from '../pages/quiz/quiz';
import { HelpPage } from '../pages/help/help';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;
  rootPage:any = TutorialsPage;
  pages: Array<{title:string, component:any}>;
  
  activePage: any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      {title: "Tutorials", component:TocPage},
      {title: "Graphing", component:GraphcirPage},
      {title: "Solving", component:SolvePage},
      {title: "Quiz", component:QuizPage},
      {title: "Help", component:HelpPage},
      {title: "About me", component:AboutPage},
    ]
    
   
  }
  openPage(page){
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  checkActive(page){
    return page == this.activePage;
  }
}

