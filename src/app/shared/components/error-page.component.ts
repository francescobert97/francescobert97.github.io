import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  template: `
  <div class="error-box text-light d-flex flex-column justify-content-center align-items-center">
    <div class="box-shadow-green">
      <h1>ACCESSO NEGATO</h1>
      <p>Ti è stato vietato l'accesso perchè hai provato ad accedere ad un'area a cui non hai diritto di accedere oppure ad un percorso inesistente</p>
      <button (click)="router.navigateByUrl('')" class="box-shadow-green p-1 text-light">Torna indietro</button>
    </div>
  </div>
  `,
  styles: [
    `
    .error-box {
      width: 100%;
      height: 100vh;
      background: transparent;
      div:first-child {
        border-radius: 10px;
        background: black;
        padding: 10rem;
        
        button {
          background: rgba(0, 255, 255, 0.674);
          border: none;
          border-radius: 10px;
        }
      }
    }
    `
  ]
})
export class ErrorPageComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}
