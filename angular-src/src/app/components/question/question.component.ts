import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common'

import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question: any | undefined

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    public datepipe: DatePipe,
  ) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'))
    this.questionService.getQuestion(id)
      .subscribe(question => this.question = question)
  }

}
