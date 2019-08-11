import { Component, OnInit } from '@angular/core';
import { FacultySubForumService } from 'src/app/services/faculty-sub-forum/faculty-sub-forum.service';
import FacultySubForum from 'src/app/models/facultySubForum';

@Component({
  selector: 'app-left-panel-content-faculty',
  templateUrl: './left-panel-content-faculty.component.html',
  styleUrls: ['./left-panel-content-faculty.component.css']
})
export class LeftPanelContentFacultyComponent implements OnInit {

  constructor(private facultyService:FacultySubForumService) { }

  ngOnInit() {
    this.getFaculties();
  }

  faculties:any = []

  getFaculties():void {
    this.facultyService.getAll().subscribe((data: FacultySubForum[]) => {
      this.faculties = data;
    });
  }



}
