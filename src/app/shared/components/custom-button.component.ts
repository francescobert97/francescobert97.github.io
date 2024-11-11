import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-button',
  template: `
      <button (click)="triggerExternalMethod()" [class]='btnData.classes'>{{btnData.label}}</button>
  `,
  styles: [
    `

     .close-btn {
        background: rgba(0, 0, 0, 0.777);
        border-radius: 10px;

        z-index: 9999;
      }
    @media screen and (max-width: 1200px) {

    }

    @media screen and (max-width: 856px) {

    }

    @media screen and (max-width: 600px) {
    .close-btn {
     font-size: 0.6em;
    }

    }

    @media screen and (max-width: 456px) {

    }
    `
  ]
})
export class CustomButtonComponent implements OnInit {
  @Input() btnData:any = {
    label: '',
    classes: ''
  }
  @Output() methodCaller = new EventEmitter<any>()
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  triggerExternalMethod() {
    this.methodCaller.emit();
  }
}
