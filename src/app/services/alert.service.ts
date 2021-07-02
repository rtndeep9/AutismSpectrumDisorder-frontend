import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alert$ = new BehaviorSubject({
    message: '',
    type: ''
  });
  constructor() { }

  getObservable() {
    return this.alert$.asObservable();
  }

  success(message: string) {
    this.alert$.next({
      message,
      type: 'success'
    })
  }

  error(message: string) {
    this.alert$.next({
      message,
      type: 'error'
    })
  }

  notice(message: string) {
    this.alert$.next({
      message,
      type: 'notice'
    })
  }

  close() {
    this.alert$.next({
      message: '',
      type: ''
    });
  }

}
