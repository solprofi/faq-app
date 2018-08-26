import { Question } from './../models/question';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionDataService {
  questions: Question[];
  constructor() {
    this.questions = [
      {
        text: 'What is your name?',
        answer: 'My name is Roman',
        hide: true
      },
      {
        text: 'What is your pet`s name?',
        answer: 'His name is Beem',
        hide: true
      },
      {
        text: 'What is your age?',
        answer: 'I\'m 20',
        hide: true
      },
      {
        text: 'What is your name?',
        answer: 'My name is Roman',
        hide: true
      }
    ];
  }

  getQuestions() {
    return this.questions;
  }

  addQuestion(question) {
    this.questions.unshift(question);
  }
}
