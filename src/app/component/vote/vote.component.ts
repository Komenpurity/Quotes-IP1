import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Input() upvote!: number;
  @Input() downvote!: number;

  constructor() { }

  addUpvote(){
    this.upvote += 1
  }

  addDownvote(){
    this.downvote += 1
  }

  ngOnInit(): void {
  }

}
