import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ForumRole from 'src/app/models/forumRole';

@Injectable({
  providedIn: 'root'
})
export class ForumRoleService {

  private url = "http://localhost:8080/forumrole";

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<ForumRole[]>(this.url + '/all');
  }

  getOne(id: String) {
    return this.http.get<ForumRole>(this.url + `/${id}`);
  }

  delete(id: String) {
    return this.http.delete(this.url + `/${id}`);
  }


  add(ForumRole: ForumRole) {
    
    return this.http.post(this.url + '/add', ForumRole);
  }

  update(ForumRole:ForumRole, id:String) {
   
    return this.http.put(this.url+`/${id}`, ForumRole)
  }
  
}
