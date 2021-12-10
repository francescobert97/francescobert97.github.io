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
  return this.access;
}
}
