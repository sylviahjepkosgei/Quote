import { Component, OnInit, } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Brian Kernigan', 'Controlling complexity is the essence of computer programming', new Date(2019, 3,1)),
    new Quote(2, 'John Johnson', 'First solve the problem then write the code', new Date(2019, 6, 9)),
    new Quote(3, 'Francis Glassborows', 'Good programmers use their brains but good guidelines save us having to think out every case', new Date(2019, 1, 12)),

  ];


  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;

  }
  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  isLikedClicked(liked:boolean,i){
    if(liked){
      this.quotes[i].upvote+=1;
    }
  }
    isUnLikedClicked(liked:boolean,i){
      if(liked){
        this.quotes[i].downvote+=1;
      }
    }
  
  formReceive(quote) {
   this.quotes.push(quote);
 }




  constructor() { }

  ngOnInit() {
  }

}
