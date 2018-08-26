import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: Object[];
  constructor() {
    this.questions = [
      {
        question: 'What is your name?',
        answer: 'My name is Roman'
      },
      {
        question: 'What is your pet`s name?',
        answer: 'His name is Beem'
      },
      {
        question: 'What is your age?',
        answer: 'I\'m 20'
      },
      {
        question: 'What is your name?',
        answer: 'My name is Roman'
      }
    ];
   }

  ngOnInit() {
  }

}
