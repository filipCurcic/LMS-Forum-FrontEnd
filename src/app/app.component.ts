import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { DataService } from './services/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lms-forum';

  constructor(private router: Router, private data:DataService) { }

  activePage: string;
  subscription: Subscription;
  currentPage:number;

  ngOnInit() {
    this.getCurrentPage()
    this.setActivePage()
  }

  getCurrentPage() {
    this.data.currentPage.subscribe(page => this.currentPage = page);
  }

  setActivePage():void {
    this.data.chageActivePage(0);
  }



getActivePage(): void {
  this.activePage = localStorage.getItem('active');
  console.log(this.activePage)
}


}
