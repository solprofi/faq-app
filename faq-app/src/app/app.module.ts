import { QuestionDataService } from './services/question-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionComponent } from './components/question/question.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    QuestionListComponent,
    QuestionComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    QuestionDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
