import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizellPage } from './quizell';

@NgModule({
  declarations: [
    QuizellPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizellPage),
  ],
})
export class QuizellPageModule {}
