import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessHomeService {
public access:boolean = false;
constructor() { }

public setAccessToHome(access:boolean) {
  this.access = access;
}

public getAccessToHome() {
  if(this.access) {
    return true
  }else {
    return false;
  }
  
}

}
