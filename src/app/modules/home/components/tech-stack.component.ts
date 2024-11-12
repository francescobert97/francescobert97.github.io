import {
  Component,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ITecnology } from 'src/app/shared/models/home.model';

@Component({
  selector: 'app-tech-stack',
  template: `


      <div class="position-relative container-stack ">
        <h2 class="tecnologie-title  text-center text-shadow-green">My technologies</h2>
        <ng-container
            *ngFor="let tecnologie of tecnologiesContent; let idx = index"
            >

            <img
            [ngStyle]="{'transform': 'rotate(' + (360 / tecnologiesContent.length * idx) + 'deg)'}"


            (mouseover)="showInformation(idx)"
            (mouseout)="showInformation(idx)"
              class="single-tecnologie-card box-shadow-green p-2 rounded bg-light"
              src="{{ tecnologie.icon }}"
              alt="tecnologies icon"
            />

            <div
              *ngIf="showItem[idx]"
              class="tecnologie-info rounded position-absolute box-shadow-green p-2"
            >
              <h2 class="">{{ tecnologie.name || 'no-name' }}</h2>
              <p>{{ tecnologie.description || 'no description' }}</p>
            </div>
          </ng-container>
      </div>

  `,
  styles: [
    `
      .container-stack {
        padding: 2rem;
        .tecnologie-title {
          font-size: 1.7em;
        }
          .single-tecnologie-card {
            position: absolute;
            left:-28%;
            top:24%;
            transform-origin: 210px;
            transition: 3s;
              max-width: 4.5rem;
              max-height: 4.5rem;
        }

        .tecnologie-info {
              background: rgb(0,0,0);
              box-shadow: 0px 0px 32px -4px #37dbd6;
              z-index: 10000;
              font-size: 0.8em;
              width:63%;
              top:-10%;
              left:20%;
              h2 {
                font-size:1.7em;
              }
            }
      }

      @media screen and (max-width: 1200px) {
        .container-stack {

          .single-tecnologie-card {

            max-width: 3.5rem;
            max-height: 3.5rem;
           }

        }
      }
      @media screen and (max-width: 576px) {
        .container-stack {
          .tecnologie-title {
          font-size: 1em;

        }
          .single-tecnologie-card {
            transform-origin: 140px;
            max-width: 2.5rem;
            max-height: 2.5rem;
           }

        }
      }

      @media screen and (max-width: 456px) {
        .container-stack {
              .tecnologie-info {
                width: 60%;
                font-size: 0.5em;
              }

              .single-tecnologie-card {
                transform-origin: 120px;
                left:-15%;
              }
        }
      }

    `,
  ],
})
export class TechStackComponent implements OnInit {
  @Input() public tecnologiesContent: ITecnology[] = [];
  showItem!:any[];
  constructor() {}

  ngOnInit(): void {
    this.showItem = new Array(this.tecnologiesContent.length).fill(false)
  }

  public showInformation(idx: number) {
    console.log('trigger')
    if(idx < 0) return;
      this.showItem[idx] = !this.showItem[idx];
  }

}
