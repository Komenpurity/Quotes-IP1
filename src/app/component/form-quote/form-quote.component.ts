import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-quote',
  templateUrl: './form-quote.component.html',
  styleUrls: ['./form-quote.component.css']
})
export class FormQuoteComponent implements OnInit {

  header: string = "Fill in the Quote"
  quoteName!: string;
  quoteMessage!: string;
  quoteAuthor!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
