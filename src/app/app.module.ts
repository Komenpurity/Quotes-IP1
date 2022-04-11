import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuoteComponent } from './component/quote/quote.component';
import { FormQuoteComponent } from './component/form-quote/form-quote.component';
import { VoteComponent } from './component/vote/vote.component';
import { FormsModule } from '@angular/forms';
import { TimePipe } from './time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    FormQuoteComponent,
    VoteComponent,
    TimePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
