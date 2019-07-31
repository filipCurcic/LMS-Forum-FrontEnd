import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import SubForum from 'src/app/models/subForum';
import Thread from 'src/app/models/thread';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost:8080/subforum";

  getAll(id:number) {
    return this.http.get<SubForum[]>(this.url + '/all')
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

  getThreads(id:number) {
    return this.http.get<Thread[]>(this.url + `/${id}`+"/threads")
  }

  
  
}
