import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data/data.service';
import { HttpClient } from '@angular/common/http';
import { ForumUserService } from '../forum-user/forum-user.service';
import { Subject } from 'rxjs';
import decode from 'jwt-decode'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router, private userService: ForumUserService, private dataService: DataService) {}

  roleChanged = new Subject<any[]>();
  loggedInStatusChanged = new Subject<boolean>();

  login(username: string, password: string){
    this.http.post<{token: string}>("http://localhost:8080/login/", {username: username, password: password}).subscribe(response =>{
      if(response.token){
        localStorage.setItem('token', response.token);
        this.roleChanged.next(this.getCurrentRoles());
        this.router.navigate(['/']);
        this.loggedInStatusChanged.next(true);
        this.getUserID();
      }
    });

  }

  logout(){
    this.roleChanged.next([]);
    localStorage.removeItem('token');
    localStorage.removeItem('userID');
    this.router.navigate(['/']);
    this.loggedInStatusChanged.next(false);
  }

  getCurrentRoles(){
    const token = localStorage.getItem('token');
    var roles = []
    if(token){
      decode(token).role.forEach(role => {
        roles.push(role.authority);
      });
    }
    return roles;
  }

  getCurrentUser(){
    const token = localStorage.getItem('token');
    if(token){
      return decode(token).sub;
    }
    return null;
  }

  isLoggedIn(){
    if(localStorage.getItem('token')){
      return true;
    }
    return false;
  }

  getUserID(){
    const token = localStorage.getItem('token');
    if(token){
      let dtoken = decode(token).sub;
      this.userService.getLoggedUser(dtoken).subscribe((data) => {
        localStorage.setItem('userID', JSON.stringify(data.id));
      });
    }
  }








}
