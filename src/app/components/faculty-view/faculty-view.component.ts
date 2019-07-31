import { Component, OnInit } from '@angular/core';
import { FacultySubForumService } from 'src/app/services/faculty-sub-forum/faculty-sub-forum.service';
import FacultySubForum from 'src/app/models/facultySubForum';

@Component({
  selector: 'app-faculty-view',
  templateUrl: './faculty-view.component.html',
  styleUrls: ['./faculty-view.component.css']
})
export class FacultyViewComponent implements OnInit {

  constructor(private facultyService:FacultySubForumService) { }

  ngOnInit() {
    this.getFaculties();
    console.log(this.faculties)
  }

  faculties:any = []

  getFaculties():void {
    this.facultyService.getAll().subscribe((data: FacultySubForum[]) => {
      this.faculties = data;
    });
  }

}
