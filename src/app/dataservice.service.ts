import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataserviceService {

  private messageSource = new BehaviorSubject<any>({});
  currentMessage = this.messageSource.asObservable();

  constructor() { 

  }

  changeMessage(message: any) {
    this.messageSource.next(message)
  }


}
