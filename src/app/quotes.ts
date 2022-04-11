export class Quotes {

    constructor(public quoteName: string,public quoteMessage: string,
      public quoteAuthor: string,public upVote: number,public downVote:number,public time: any){
        
        this.time = new Date();
    }
  
  }