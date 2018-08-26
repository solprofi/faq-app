import { Question } from './../models/question';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionDataService {
  questions: Question[];
  constructor() {
  }

  getQuestions() {
    if (localStorage.getItem('questions') === null) {
      this.questions = [];
    } else {
      this.questions =  JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

  addQuestion(question) {
    this.questions.unshift(question);

    // add to local storage
    let questions;
    if (localStorage.getItem('questions') === null) {
      questions = [];
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
    }
    questions.unshift(question);
    localStorage.setItem('questions', JSON.stringify(questions));
  }

  removeQuestion(question) {
    this.questions.forEach( (val, index, arr) => {
      if (val === question) {
        arr.splice(index, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    });
  }
}
