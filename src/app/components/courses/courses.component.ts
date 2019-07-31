import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses/courses.service';
import SubForum from 'src/app/models/subForum';
import { ActivatedRoute } from '@angular/router';
import { FacultySubForumService } from 'src/app/services/faculty-sub-forum/faculty-sub-forum.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private courseService:CoursesService, private route: ActivatedRoute, private facultyService:FacultySubForumService) { }

  ngOnInit() {
    this.getAll()
  }

  courses:any = []

  getAll():void {
    this.facultyService.getSubForums(+this.route.snapshot.paramMap.get('id')).subscribe((data: SubForum[]) => {
      this.courses = data;
    });
  }

}
