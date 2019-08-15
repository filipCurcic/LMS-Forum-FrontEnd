import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService : AuthenticationService) { }

  ngOnInit() {
  }

  username:string;
  password:string;

  hide = true;

  login(){
    if (this.username == null || this.password == null) {
      return;
    }
    this.authenticationService.login(this.username, this.password);
  }

  logout() {
    this.authenticationService.logout();
  }

}
