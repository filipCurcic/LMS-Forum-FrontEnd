import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ForumUser from 'src/app/models/forumUser';

@Injectable({
  providedIn: 'root'
})
export class ForumUserService {

  private url = "http://localhost:8080/forumuser";

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<ForumUser[]>(this.url + '/all');
  }

  getOne(id: String) {
    return this.http.get<ForumUser>(this.url + `/${id}`);
  }

  delete(id: String) {
    return this.http.delete(this.url + `/${id}`);
  }


  add(ForumUser: ForumUser) {
    
    return this.http.post(this.url + '/add', ForumUser);
  }

  update(ForumUser:ForumUser, id:String) {
   
    return this.http.put(this.url+`/${id}`, ForumUser)
  }

  getLoggedUser(username: String){
    return this.http.get<ForumUser>(this.url + `/logged/${username}`);
  }



}
