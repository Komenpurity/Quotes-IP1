import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/app/quotes';

@Component({
  selector: 'app-form-quote',
  templateUrl: './form-quote.component.html',
  styleUrls: ['./form-quote.component.css']
})
export class FormQuoteComponent implements OnInit {

  upVote: number = 0;
  downVote: number = 0;
  time!: Date;
  header: string = "Fill in the Quote"
  quoteName!: string;
  quoteMessage!: string;
  quoteAuthor!: string;
  newMessage: any;
  
  constructor() { }
  
  messages: Quotes[] = [
    new Quotes("Mark John","Winter is Coming","Jon Snow",0,0,'01-10-2015')

  ];


  submitQuote() {
    this.newMessage= new Quotes(this.quoteName,this.quoteMessage,this.quoteAuthor,this.upVote,this.downVote,this.time);
    this.messages.push(this.newMessage);
  }

  ngOnInit(): void {
  }

}
