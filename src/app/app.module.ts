import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing-module';


import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import { ThreadListViewComponent } from './components/thread-list-view/thread-list-view.component';
import { ThreadTilesViewComponent } from './components/thread-tiles-view/thread-tiles-view.component';
import { ThreadComponent } from './components/thread/thread.component';
import { FacultyThreadViewComponent } from './components/faculty-thread-view/faculty-thread-view.component';
import { FacultyViewComponent } from './components/faculty-view/faculty-view.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ThreadListViewComponent,
    ThreadTilesViewComponent,
    ThreadComponent,
    FacultyThreadViewComponent,
    FacultyViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
