import { Question } from './../../models/question';
import { QuestionDataService } from './../../services/question-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: Question[];

  constructor(public questionDataService: QuestionDataService) {
  }

  ngOnInit() {
    this.questions = this.questionDataService.getQuestions();
  }

}
