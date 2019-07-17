import { Injectable } from '@angular/core';
import Reply from 'src/app/models/reply';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  private url = "http://localhost:8080/reply";

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Reply[]>(this.url + '/all');
  }

  getOne(id: String) {
    return this.http.get<Reply>(this.url + `/${id}`);
  }

  delete(id: String) {
    return this.http.delete(this.url + `/${id}`);
  }


  add(Reply: Reply) {
    
    return this.http.post(this.url + '/add', Reply);
  }

  update(Reply:Reply, id:String) {
   
    return this.http.put(this.url+`/${id}`, Reply)
  }
}
