import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import SubForum from 'src/app/models/subForum';

@Injectable({
  providedIn: 'root'
})
export class SubForumService {

  private url = "http://localhost:8080/subForum";

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<SubForum[]>(this.url + '/all');
  }

  getOne(id: String) {
    return this.http.get<SubForum>(this.url + `/${id}`);
  }

  delete(id: String) {
    return this.http.delete(this.url + `/${id}`);
  }


  add(SubForum: SubForum) {
    
    return this.http.post(this.url + '/add', SubForum);
  }
}
