import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses/courses.service';
import { ActivatedRoute } from '@angular/router';
import Thread from 'src/app/models/thread';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-thread-list-view',
  templateUrl: './thread-list-view.component.html',
  styleUrls: ['./thread-list-view.component.css']
})
export class ThreadListViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private courseService:CoursesService, private data:DataService) { }

  facultyId:string;
  threads:any = []
  currentPage:number;

  ngOnInit() {
    this.getAll();
    this.setActivePage();
    this.data.currentId.subscribe(id => this.facultyId = id);
    this.setActivePage();
    this.changeFacultyId();

  }

  changeFacultyId() {
    this.data.changeId(this.route.snapshot.paramMap.get('id'));
  }

  getAll():void {
    this.courseService.getThreads(+this.route.snapshot.paramMap.get('id')).subscribe((data: Thread[]) => {
      this.threads = data;
    });
  }

  

  getCurrentPage() {
    this.data.currentPage.subscribe(page => this.currentPage = page);
  }

  setActivePage():void {
    this.data.chageActivePage(2);
  }

}
