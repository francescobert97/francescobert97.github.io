import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ITecnology } from 'src/app/shared/models/home.model';

@Component({
  selector: 'app-tech-stack',
  template: `

    <div
      class="container-stack mt-2 mx-auto d-flex justify-content-center align-items-center"
    >
      <h2 class="tecnologie-title  text-center text-shadow-green">My technologies</h2>

        <ng-container
          *ngFor="let tecnologie of tecnologiesContent; let idx = index"
          >

          <img
          [ngStyle]="{'transform': 'rotate(' + (360 / tecnologiesContent.length * idx) + 'deg) translate(140px)'}"


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
        position: relative;
        padding: 2rem;
        width: 100%;
        height: 100%;
        width: clamp(300px,300px, 400px);
        min-height: 400px;

        .tecnologie-title {
          font-size: 1.7em;

        }
          .single-tecnologie-card {
            margin-left: 50px;
            position: absolute;
            transform-origin: 10px;
            transition: 3s;
              max-width: 4.5rem;
              max-height: 4.5rem;
        }

        .tecnologie-info {
              background: rgb(0,0,0);
              box-shadow: 0px 0px 32px -4px #37dbd6;
              z-index: 10000;
              font-size: 0.8em;
              width:50%;
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
            max-width: 2.5rem;
            max-height: 2.5rem;
           }

        }
      }

      @media screen and (max-width: 456px) {
        .container-stack {
              .tecnologie-info {
                width: 100%;
                font-size: 0.8em;

              }
        }
      }
    `,
  ],
})
export class TechStackComponent implements OnInit, OnDestroy {
  @Input() public tecnologiesContent: ITecnology[] = [];
  showItem!:any[];

  endInterval!: any;

  public readonly showInfo: { [key: number]: boolean } = {};

  constructor() {}

  ngOnInit(): void {
    this.showItem = new Array(this.tecnologiesContent.length).fill(false)
  }



  public showInformation(idx: number) {
    if(idx < 0) return;
      this.showItem[idx] = !this.showItem[idx];
  }



  ngOnDestroy() {
  //  this.DestroyInterval();
  }


}
