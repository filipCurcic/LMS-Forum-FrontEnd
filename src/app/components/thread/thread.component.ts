import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  openReply() {
    this.showReply = true;
  }
  closeReply() {
    this.showReply = false;
  }
  showReply:boolean;
}
