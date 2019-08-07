import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private idSource = new BehaviorSubject<string>('0');
  currentId = this.idSource.asObservable();

  constructor() { }

  changeId(id:string) {
    this.idSource.next(id);
  }
}
