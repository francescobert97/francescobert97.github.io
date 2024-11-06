import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollbar',
  template: `
    <div class="scrollbar-container">
      <span class="progress-number-status" *ngIf="progress != '%'">{{
        progress
      }}</span>
      <div
        class="scrollbar-progress d-flex justify-content-center"
        [style.width]="progress"
      ></div>
    </div>
  `,
  styles: [
    `
      .scrollbar-container {
        position: fixed;
        background: transparent;
        width: 100%;
        height: 0.8rem;
        overflow: visible;
        .progress-number-status {
          position: absolute;
          left: 50%;
          color: white;
          font-size: 0.5em;
          text-shadow: 0px 0px 1px rgba(0, 0, 0, 1);
        }
        .scrollbar-progress {
          width: 10px;
          height: 100%;
          background: aqua;
          -webkit-box-shadow: 50px 0px 43px -15px #00FFCC;
          box-shadow: 50px 0px 43px -2px #00FFCC;
          /*box-shadow: 0px 1px -195px -59px rgba(5, 255, 198, 1);
          -webkit-box-shadow: 0px 1px 195px 59px rgba(5, 255, 198, 1);
          -moz-box-shadow: 0px 1px 195px 59px rgba(5, 255, 198, 1);*/
        }
      }
    `,
  ],
})
export class ScrollbarComponent implements OnInit {
  @Input() progress: string = '';
  constructor() {}

  ngOnInit(): void {}
}
