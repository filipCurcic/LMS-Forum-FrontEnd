import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import File from 'src/app/models/file';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private url = "http://localhost:8080/forumfile";

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<File[]>(this.url + '/all');
  }

  getOne(id: String) {
    return this.http.get<File>(this.url + `/${id}`);
  }

  delete(id: String) {
    return this.http.delete(this.url + `/${id}`);
  }


  add(File: File) {
    
    return this.http.post(this.url + '/add', File);
  }

  update(File:File, id:String) {
   
    return this.http.put(this.url+`/${id}`, File)
  }
}
