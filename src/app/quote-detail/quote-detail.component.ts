import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})

export class QuoteDetailComponent implements OnInit {


  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  @Output() isLiked=new EventEmitter<boolean>();
  @Output() isUnLiked=new EventEmitter<boolean>();

  upVote(liked:boolean){
    this.isLiked.emit(liked);
    
  }
  downVote(unliked:boolean){
    this.isUnLiked.emit(unliked);
  }
  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
    constructor() { }

    ngOnInit() {
    }

}
