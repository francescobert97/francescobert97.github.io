import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessHomeService {
  private access$ = new BehaviorSubject<boolean>(JSON.parse(localStorage.getItem('homeAccess') as string)?.access ||false);
  public accessObs$ = this.access$.asObservable()
constructor() { }

public setAccessToHome(access:boolean) {
  this.access$.next(access);
}
getLastValue () {
 return this.access$.getValue()
}
}
