import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private company_code = new BehaviorSubject<string>('MC');
  currentMsg = this.company_code.asObservable();
  constructor() {}
  changeMessage(message: string) {
    this.company_code.next(message);
  }
}
