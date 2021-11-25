import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div *ngIf="stopAnimation">
      <app-animation (stopAnimation)="hearStopAnimation($event)"></app-animation>
    </div>
  `,
  styles: [
    `
   

    `
  ]
})
export class HomeComponent implements OnInit {
  public stopAnimation:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public hearStopAnimation(event:any) {
    this.stopAnimation = false;
  }

}
