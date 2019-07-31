import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Thread from 'src/app/models/thread';
import Reply from 'src/app/models/reply';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  private url = "http://localhost:8080/thread";

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Thread[]>(this.url + '/all');
  }

  getOne(id: number) {
    return this.http.get<Thread>(this.url + `/${id}`);
  }

  getReplies(id:number) {
    return this.http.get<Reply[]>(this.url + `/${id}` + '/replies')
  }

  delete(id: String) {
    return this.http.delete(this.url + `/${id}`);
  }


  add(Thread: Thread) {
    
    return this.http.post(this.url + '/add', Thread);
  }

  update(thread:Thread, id:String) {
   
    return this.http.put(this.url+`/${id}`, thread)
  }

}
