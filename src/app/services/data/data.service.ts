import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private idSource = new BehaviorSubject<string>('0');
  currentId = this.idSource.asObservable();

  private pageSource = new BehaviorSubject<number>(0);
  currentPage = this.pageSource.asObservable();

  constructor() { }

  changeId(id:string) {
    this.idSource.next(id);
  }

  chageActivePage(id:number) {
    this.pageSource.next(id);
  }
}
