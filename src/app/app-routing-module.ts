import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThreadListViewComponent } from './components/thread-list-view/thread-list-view.component';
import { ThreadTilesViewComponent } from './components/thread-tiles-view/thread-tiles-view.component';
import { FacultyViewComponent } from './components/faculty-view/faculty-view.component';
import { FacultyThreadViewComponent } from './components/faculty-thread-view/faculty-thread-view.component';
import { NewThreadComponent } from './components/new-thread/new-thread.component';
import { ThreadComponent } from './components/thread/thread.component';
import { CoursesComponent } from './components/courses/courses.component';


const routes: Routes = [
  { path: '', redirectTo: '/faculties', pathMatch: 'full' },
  {path: 'tileView', component:ThreadTilesViewComponent},
  {path: 'faculties', component:FacultyViewComponent},
  {path: 'newThread', component:NewThreadComponent},
  {path: 'faculty/:id', component:CoursesComponent},
  {path: 'course/:id/threads', component:ThreadListViewComponent},
  {path: 'thread/:id', component:ThreadComponent},
  {path: 'courses', component:CoursesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }