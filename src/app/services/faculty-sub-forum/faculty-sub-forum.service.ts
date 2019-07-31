import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import FacultySubForum from 'src/app/models/facultySubForum';
import SubForum from 'src/app/models/subForum';

@Injectable({
  providedIn: 'root'
})
export class FacultySubForumService {

  private url = "http://localhost:8080/facultyforum";

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<FacultySubForum[]>(this.url + '/all');
  }

  getOne(id: String) {
    return this.http.get<FacultySubForum>(this.url + `/${id}`);
  }

  delete(id: String) {
    return this.http.delete(this.url + `/${id}`);
  }


  add(FacultySubForum: FacultySubForum) {
    return this.http.post(this.url + '/add', FacultySubForum);
  }

  getSubForums(id:number) {
    return this.http.get<SubForum[]>(this.url + `/${id}`+"/subForums")
  }
}
