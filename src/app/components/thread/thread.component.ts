import { Component, OnInit } from '@angular/core';
import Thread from 'src/app/models/thread';
import { ThreadService } from 'src/app/services/thread/thread.service';
import { ActivatedRoute } from '@angular/router';
import Reply from 'src/app/models/reply';
import ForumUser from 'src/app/models/forumUser';
import { ReplyService } from 'src/app/services/reply/reply.service';
import { FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data/data.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  constructor(private threadService:ThreadService, private authService:AuthenticationService, private data:DataService, private replyService:ReplyService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getThread();
    this.getReplies();
    this.setActivePage();
    this.isLoggedIn = this.authService.isLoggedIn();
    this.authService.getLoggedInUser().subscribe( (user:any) => {
      this.loggedInUser = user;
    });

  }
  loggedInUser: any;
  thread:Thread;
  replies:any = [];

  isLoggedIn = false;
  activeThread:Thread;

  newReply =new Reply();

  currentPage:number;

  

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

  setActivePage():void {
    this.data.chageActivePage(3);
  }

  getCurrentPage() {
    this.data.currentPage.subscribe(page => this.currentPage = page);
  }

  onSubmit() {
    
    this.newReply.id = null;
    this.newReply.forumThread = this.thread;
    // this.newReply.author = {"id":1, "forum":null, "registeredUser":null, "startedThreads":[], "replies":[], "roles":[]}
    this.newReply.author = this.loggedInUser;
    console.log(this.newReply)
    this.replyService.add(this.newReply).subscribe();
    this.getThread();
    window.location.reload();
  }


  openReply() {
    this.showReply = true;
  }
  closeReply() {
    this.showReply = false;
  }
  showReply:boolean;
}
