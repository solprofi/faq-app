import { Question } from './../../models/question';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  @Output() questionAdded = new EventEmitter<Question>();
  text: string;
  answer: string;
  isHidden = true;
  constructor() { }

  ngOnInit() {
  }

  addQuestion() {
    this.questionAdded.emit({
      text: this.text,
      answer: this.answer,
      hide: true
    });
  }

  toggleHidden() {
    this.isHidden = !this.isHidden;
    console.log(this.isHidden);
  }
}
