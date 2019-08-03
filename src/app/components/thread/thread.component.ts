import { Component, OnInit } from '@angular/core';
import Thread from 'src/app/models/thread';
import { ThreadService } from 'src/app/services/thread/thread.service';
import { ActivatedRoute } from '@angular/router';
import Reply from 'src/app/models/reply';
import ForumUser from 'src/app/models/forumUser';
import { ReplyService } from 'src/app/services/reply/reply.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  constructor(private threadService:ThreadService, private replyService:ReplyService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getThread();
    this.getReplies();
  }

  thread:Thread;
  replies:any = [];


  activeThread:Thread;

  // this.newReply = {"id":null, 
  //   "content":'',
  //   "thread":this.thread,
  //   "author":{"id":1, "forum":null, "registeredUser":null, "startedThreads":[], "replies":[], "roles":[]}}

  newReply =new Reply();

  

  getThread():void {
    this.threadService.getOne(+this.route.snapshot.paramMap.get('id')).subscribe((data: Thread) => {
      this.thread = data;
    }); 
  }

  getActiveThread(){
    this.threadService.getOne(+this.route.snapshot.paramMap.get('id')).subscribe((data: Thread) => {
      this.activeThread = data;
    }); 
    
  }

  getReplies():void {
    this.threadService.getReplies(+this.route.snapshot.paramMap.get('id')).subscribe((data: Reply[]) => {
      this.replies = data;
    });
    
  }

  onSubmit() {
    this.newReply.thread = this.thread;
    this.newReply.id = null;
    this.newReply.author = {"id":1, "forum":null, "registeredUser":null, "startedThreads":[], "replies":[], "roles":[]}
    console.log(this.newReply)
    this.replyService.add(this.newReply).subscribe();
  }


  openReply() {
    this.showReply = true;
  }
  closeReply() {
    this.showReply = false;
  }
  showReply:boolean;
}
