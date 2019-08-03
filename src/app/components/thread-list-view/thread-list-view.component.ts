import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses/courses.service';
import { ActivatedRoute } from '@angular/router';
import Thread from 'src/app/models/thread';

@Component({
  selector: 'app-thread-list-view',
  templateUrl: './thread-list-view.component.html',
  styleUrls: ['./thread-list-view.component.css']
})
export class ThreadListViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private courseService:CoursesService) { }

  ngOnInit() {
    this.getAll();
    this.setActivePage();
  }
  threads:any = []


  getAll():void {
    this.courseService.getThreads(+this.route.snapshot.paramMap.get('id')).subscribe((data: Thread[]) => {
      this.threads = data;
    });
  }

  setActivePage():void {
    let activePage = 'active';
    localStorage.setItem(activePage, '2');
  }

}
