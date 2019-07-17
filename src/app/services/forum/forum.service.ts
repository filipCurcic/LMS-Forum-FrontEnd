import { Injectable } from '@angular/core';
import Forum from 'src/app/models/forum';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private forumUrl = "http://localhost:8080/forum";

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Forum[]>(this.forumUrl + '/all');
  }

  getOne(id: String) {
    return this.http.get<Forum>(this.forumUrl + `/${id}`);
  }

  delete(id: String) {
    return this.http.delete(this.forumUrl + `/${id}`);
  }


  add(forum: Forum) {
    
    return this.http.post(this.forumUrl + '/add', forum);
  }

  


}
