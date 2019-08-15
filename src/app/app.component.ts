import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { DataService } from './services/data/data.service';
import { AuthenticationService } from './services/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lms-forum';

  constructor(private router: Router, private data:DataService, private authService:AuthenticationService) { }

  activePage: string;
  subscription: Subscription;
  currentPage:number;
  loggedIn:boolean = true;
  runFunctn:boolean;

  test1 = true;

  isLoggedIn = false;
  public loggedUserUsername: String;
  private loggedUserRoles: String[];
  public loggedUserType: String;
  private loggedInSubcription : Subscription;
  roles = [];
  private roleSubcription : Subscription;



  ngOnInit() {
    

    this.isLoggedIn = this.authService.isLoggedIn();
    this.loggedInSubcription = this.authService.loggedInStatusChanged.subscribe(
      (status: boolean)=>{
        this.isLoggedIn = status;
        
      }
    );
    

    this.roles = this.authService.getCurrentRoles();
    this.roleSubcription = this.authService.roleChanged.subscribe(
      (roles: [])=>{
        this.roles = roles;
      }
    );

    this.getCurrentPage();
    this.setActivePage();
    this.setCurrentRoles();

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

  setCurrentRoles():void {
    this.data.chageRoles(this.roles);
  }

  onLogout(){
    this.authService.logout();
  }


}
