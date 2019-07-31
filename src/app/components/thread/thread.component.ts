import { Component, OnInit } from '@angular/core';
import Thread from 'src/app/models/thread';
import { ThreadService } from 'src/app/services/thread/thread.service';
import { ActivatedRoute } from '@angular/router';
import Reply from 'src/app/models/reply';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  constructor(private threadService:ThreadService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getThread();
    this.getReplies();
  }

  thread:Thread;
  replies:any = [];

  getThread():void {
    this.threadService.getOne(+this.route.snapshot.paramMap.get('id')).subscribe((data: Thread) => {
      this.thread = data;
    }); 
  }

  getReplies():void {
    this.threadService.getReplies(+this.route.snapshot.paramMap.get('id')).subscribe((data: Reply[]) => {
      this.replies = data;
    });
    
  }


  openReply() {
    this.showReply = true;
  }
  closeReply() {
    this.showReply = false;
  }
  showReply:boolean;
}
