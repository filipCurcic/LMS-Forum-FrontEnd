import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThreadListViewComponent } from './components/thread-list-view/thread-list-view.component';
import { ThreadTilesViewComponent } from './components/thread-tiles-view/thread-tiles-view.component';
import { FacultyViewComponent } from './components/faculty-view/faculty-view.component';


const routes: Routes = [
  { path: '', redirectTo: '/faculties', pathMatch: 'full' },
  {path: 'faculties/:id/tileView', component:ThreadTilesViewComponent},
  {path: 'faculties/:id/listView', component:ThreadListViewComponent},
  {path: 'faculties', component:FacultyViewComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }