import { Component, OnInit } from '@angular/core';
import Thread from 'src/app/models/thread';
import { DataService } from 'src/app/services/data/data.service';
import { ThreadService } from 'src/app/services/thread/thread.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {

  constructor(private data:DataService, private threadService:ThreadService, private authService:AuthenticationService) { }

  facultyId:string;

  ngOnInit() {
    this.getCurrentId();
    this.authService.getLoggedInUser().subscribe( (user:any) => {
      this.loggedInUser = user;
    });
  }

  getCurrentId() {
    this.data.currentId.subscribe(id => this.facultyId = id);
  }

  loggedInUser: any;

  newThread = new Thread();

  onSubmit():void {
    this.getCurrentId();
    this.newThread.id = null;
    this.newThread.dateOfCreation = new Date();
    this.newThread.file = null;
    this.newThread.author = this.loggedInUser;
    this.newThread.replies = [];
    this.newThread.subForum = {"id":Number(this.facultyId), "subFacultyForum":null, "name":null, "studyCourse":null, "threads":null}
    this.threadService.add(this.newThread).subscribe();
    console.log(this.newThread)

  }

}
