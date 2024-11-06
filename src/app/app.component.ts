import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <app-scrollbar [progress]="progress"></app-scrollbar>

      <div appScroll class="container-fluid p-0"  (progress)="hearProgressBarScroll($event)">
        <router-outlet></router-outlet>
      </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'myportfolio';
  public progress!:string;

  public hearProgressBarScroll(event:string) {
    console.log(event)
      this.progress = event;
  }
}
