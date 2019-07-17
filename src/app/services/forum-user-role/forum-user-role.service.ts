import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ForumUserRole from 'src/app/models/forumUserRole';

@Injectable({
  providedIn: 'root'
})
export class ForumUserRoleService {

  private url = "http://localhost:8080/userroles";

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<ForumUserRole[]>(this.url + '/all');
  }

  getOne(id: String) {
    return this.http.get<ForumUserRole>(this.url + `/${id}`);
  }

  delete(id: String) {
    return this.http.delete(this.url + `/${id}`);
  }


  add(ForumUserRole: ForumUserRole) {
    
    return this.http.post(this.url + '/add', ForumUserRole);
  }

  update(ForumUserRole:ForumUserRole, id:String) {
   
    return this.http.put(this.url+`/${id}`, ForumUserRole)
  }
}
