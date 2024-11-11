import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  template: `
  <div class="error-box text-light d-flex flex-column justify-content-center align-items-center">
    <div class="box-shadow-green d-flex flex-column justify-content-around align-items-center">
      <h1 class="text-center">ACCESSO NEGATO</h1>
      <p class="text-center">Ti è stato vietato l'accesso perchè hai provato ad accedere ad un'area a cui non hai diritto di accedere oppure ad un percorso inesistente</p>
      <button (click)="router.navigateByUrl('/home')" class="box-shadow-green p-1 text-light">Torna indietro</button>
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

    @media screen and (max-width: 1200px) {
      .error-box {
        div:first-child {
          width: 80%;
          padding: 6rem 1.7rem;
          h1 {
            font-size: 2.2em;
          }
          p {
            font-size: 1.3em;
          }

        }
      }
    }

    @media screen and (max-width: 856px) {
      .error-box {
        div:first-child {
          width: 80%;
          padding: 5rem 1.5rem;
          h1 {
            font-size: 2em;
          }
          p {
            font-size: 1.1em;
          }

        }
      }
    }

    @media screen and (max-width: 600px) {
      .error-box {
        div:first-child {
          width: 80%;
          padding: 4rem 1rem;
          h1 {
            font-size: 1.7em;
          }
          p {
            font-size: 0.9em;
          }

        }
      }
    }

    @media screen and (max-width: 456px) {
      .error-box {
        div:first-child {
          width: 80%;
          padding: 3rem 0.8rem;
          h1 {
            font-size: 1.5em;
          }
          p {
            font-size: 0.7em;
          }

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
