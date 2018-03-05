import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { TutorialsPage } from '../pages/tutorials/tutorials';
import { GraphPage } from '../pages/graph/graph';
import { SolvePage } from '../pages/solve/solve';
import { QuizPage } from '../pages/quiz/quiz';
import { AboutPage } from '../pages/about/about';
import { ParallaxDirective } from '../directives/parallax/parallax';
import { TutorialmainPage } from '../pages/tutorialmain/tutorialmain';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HideDirective } from '../directives/hide/hide';

import { CirdefinePage } from '../pages/cirdefine/cirdefine';
import { CirgraphPage } from '../pages/cirgraph/cirgraph';
import { CirsolvePage } from '../pages/cirsolve/cirsolve';
import { PardefinePage } from '../pages/pardefine/pardefine';
import { PargraphPage } from '../pages/pargraph/pargraph';
import { ParsolvePage } from '../pages/parsolve/parsolve';
import { ElldefinePage } from '../pages/elldefine/elldefine';
import { EllgraphPage } from '../pages/ellgraph/ellgraph';
import { EllsolvePage } from '../pages/ellsolve/ellsolve';
import { HypdefinePage } from '../pages/hypdefine/hypdefine';
import { HypgraphPage } from '../pages/hypgraph/hypgraph';
import { HypsolvePage } from '../pages/hypsolve/hypsolve';
import { NondefinePage } from '../pages/nondefine/nondefine';
import { NongraphPage } from '../pages/nongraph/nongraph';
import { NonsolvePage } from '../pages/nonsolve/nonsolve';
import { TocPage } from '../pages/toc/toc';
import { HelpPage } from '../pages/help/help';
import { GraphcirPage } from '../pages/graphcir/graphcir';

import { GraphstaPage } from '../pages/graphsta/graphsta';
import { GraphgenPage } from '../pages/graphgen/graphgen';
import { GenparPage } from '../pages/genpar/genpar';
import { StanparPage } from '../pages/stanpar/stanpar';
import { GenellPage } from '../pages/genell/genell';
import { StanellPage } from '../pages/stanell/stanell';
import { GenhypPage } from '../pages/genhyp/genhyp';
import { StanhypPage } from '../pages/stanhyp/stanhyp';

import { QuizcirPage } from '../pages/quizcir/quizcir';
import { QuizparPage } from '../pages/quizpar/quizpar';
import { QuizellPage } from '../pages/quizell/quizell';
import { QuizhypPage } from '../pages/quizhyp/quizhyp';

import { SolcirPage } from '../pages/solcir/solcir';
import { SolparPage } from '../pages/solpar/solpar';
import { SolellPage } from '../pages/solell/solell';
import { SolhypPage } from '../pages/solhyp/solhyp';


import { CanvascomComponent } from '../components/canvascom/canvascom';
import { GlobalmethodsProvider } from '../providers/globalmethods/globalmethods';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    TutorialsPage,
    GraphPage,
    SolvePage,
    QuizPage,
    AboutPage,
    ParallaxDirective,
    TutorialmainPage,
    HideDirective,
    CirdefinePage,
    CirgraphPage,
    CirsolvePage,
    PardefinePage,
    PargraphPage,
    ParsolvePage,
    ElldefinePage,
    EllgraphPage,
    EllsolvePage,
    HypdefinePage,
    HypgraphPage,
    HypsolvePage,
    NondefinePage,
    NongraphPage,
    NonsolvePage,
    TocPage,
    HelpPage,
    GraphstaPage,
    GraphgenPage,
    GraphcirPage,
    CanvascomComponent,
    StanparPage,
    GenparPage,
    StanellPage,
    GenellPage,
    StanhypPage,
    GenhypPage,
    QuizcirPage,
    QuizparPage,
    QuizellPage,
    QuizhypPage,
    SolcirPage,
    SolparPage,
    SolellPage,
    SolhypPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    TutorialsPage,
    GraphPage,
    SolvePage,
    QuizPage,
    AboutPage,
    TutorialmainPage,
    CirdefinePage,
    CirgraphPage,
    CirsolvePage,
    PardefinePage,
    PargraphPage,
    ParsolvePage,
    ElldefinePage,
    EllgraphPage,
    EllsolvePage,
    HypdefinePage,
    HypgraphPage,
    HypsolvePage,
    NondefinePage,
    NongraphPage,
    NonsolvePage,
    TocPage,
    HelpPage,
    GraphstaPage,
    GraphgenPage,
    GraphcirPage,
    CanvascomComponent,
    StanparPage,
    GenparPage,
    StanellPage,
    GenellPage,
    StanhypPage,
    GenhypPage,
    QuizcirPage,
    QuizparPage,
    QuizellPage,
    QuizhypPage,
    SolcirPage,
    SolparPage,
    SolellPage,
    SolhypPage
    
   
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalmethodsProvider
  ]
})
export class AppModule {}
