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
      class="container-stack mx-auto d-flex justify-content-center align-items-center"
    >
      <h2 class="tecnologie-title position-absolute text-shadow-green">Il mio stack tecnologico</h2>

        <ng-container
          *ngFor="let tecnologie of tecnologiesContent; let idx = index"
          >

          <img
          [ngStyle]="{'transform': 'rotate(' + (360 / tecnologiesContent.length * idx) + 'deg) translate(135px)'}"

          [ngClass]="{
            'icon-scale-effect': tecnologie.animation,
          }"
          (mouseover)="showInformation(idx)"
          (mouseout)="showInformation(idx)"
            class="single-tecnologie-card box-shadow-green p-2 rounded bg-light"
            src="{{ tecnologie.icon }}"
            alt="tecnologies icon"
          />

          <div
            *ngIf="showItem[idx]"
            class="tecnologie-info box-shadow-green p-3"
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
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }



          .single-tecnologie-card {
            margin-left: 50px;
            position: absolute;
            transform-origin: 10px;
            transition: 3s;
              width: 4.5rem;
              height: 4.5rem;


            .tecnologie-info {
              position: absolute;
              background: rgb(0,0,0);
              box-shadow: 0px 0px 32px -4px #37dbd6;
              z-index: 1000;
            }
        }
      }

      .icon-scale-effect {
       // transform: scale(1.3);
      }



      @media screen and (max-width: 1200px) {
        .container-stack {
           zoom:85%;
        }
      }

      @media screen and (max-width: 856px) {
        .container-stack {
          // zoom:70%;
        }
      }


      @media screen and (max-width: 576px) {
        .container-stack {

        }
      }

      @media screen and (max-width: 456px) {
        .container-stack {
              .tecnologie-info {
                width: 100%;
                font-size: 0.5em;
                top: 50%;
                left: 0;
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
   // this.endInterval = this.getScaleAnimation();
    this.showItem = new Array(this.tecnologiesContent.length).fill(false)
  }

  getScaleAnimation(): any[] {
    let arr = [];
    for (let tecnologie of this.tecnologiesContent) {
      let intervalTecnologie = this.intervalFn(tecnologie, tecnologie.time);
      arr.push(intervalTecnologie);
    }
    return arr;
  }

  public showInformation(idx: number) {
      this.showItem[idx] = !this.showItem[idx];
  }

  private intervalFn(tecnologie: ITecnology, time: number) {
    const foundIdx = this.tecnologiesContent.findIndex(
      (tcnlg) => tcnlg.id === tecnologie.id
    );

    return setInterval(() => {
      this.tecnologiesContent[foundIdx].animation =
        !this.tecnologiesContent[foundIdx].animation;
    }, time);
  }

  ngOnDestroy() {
    this.DestroyInterval();
  }

  private DestroyInterval() {
    for (let interval of this.endInterval) {
      clearInterval(interval);
    }
  }
}
