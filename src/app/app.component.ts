import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lms-forum';

  constructor(private router: Router) { }

  activePage: string;
  subscription: Subscription;

  ngOnInit() {
    setTimeout(this.getActivePage, 10000);
  }




getActivePage(): void {
  this.activePage = localStorage.getItem('active');
  console.log(this.activePage)
}


}
