import { QuestionDataService } from './../../services/question-data.service';
import { Question } from './../../models/question';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input('question') question: Question;
  constructor(public questionDataService: QuestionDataService) {
   }

  ngOnInit() {
  }

  removeQuestion(question) {
    this.questionDataService.removeQuestion(question);
  }

}
