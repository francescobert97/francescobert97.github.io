import {
  AfterViewChecked,
  Component,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ITecnology } from 'src/app/shared/models/home.model';

@Component({
  selector: 'app-tech-stack',
  template: `
    <div
      class="container-stack d-flex justify-content-center align-items-center"
    >
      <h2 class="mt-3 text-shadow-green">Il mio stack tecnologico</h2>

      <div class="contain-scale-effect">
        <div
          *ngFor="let tecnologie of tecnologiesContent; let idx = index"
          class="single-tecnologie-card"
          [ngClass]="{
            'icon-scale-effect': tecnologie.animation,
            'tech-description-visible': tecnologiesContent[idx].showDescription
          }"
          (click)="showInformation(idx)"
        >
          <img
            src="{{ tecnologie.icon }}"
            alt="una delle tecnologie che utilizzo."
          />
          <div
            class="tecnologie-info"
            *ngIf="tecnologiesContent[idx].showDescription"
          >
            <h2>{{ tecnologie.name }}</h2>
            <p>{{ tecnologie.description }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .container-stack {
        position: relative;
        margin: 10rem 0;
        padding: 2rem;
        height: 50%;

        h2 {
          font-size: 1.7em;
        }

        .contain-scale-effect {
          position: absolute;
          top: 2%;
          left: -14%;
          width: 33rem;
          height: 20rem;
          transition: 22s;

          div:nth-child(1) {
            top: 85%;
            left: 30%;
          }

          div:nth-child(2) {
            left: 27%;
            top: -45%;
          }

          div:nth-child(3) {
            left: -15%;
            top: -12%;
          }

          div:nth-child(4) {
            left: 78%;
            top: -11%;
          }

          div:nth-child(5) {
            left: 78%;
            top: 47%;
          }

          div:last-child {
            left: -15%;
            top: 47%;
          }

          .single-tecnologie-card {
            position: absolute;
            transition: 3s;
            img {
              width: 8.5rem;
              height: 8.5rem;
            }

            .tecnologie-info {
              position: absolute;
              top: 50%;
              left: 50%;
              background: black;
              padding: 1rem;
              box-shadow: 0px 0px 32px -4px #37dbd6;
            }
          }
        }
      }

      .icon-scale-effect {
        transform: scale(1.3);
      }

      .tech-description-visible {
        z-index: 10000;
      }

      @media screen and (max-width: 856px) {
        .container-stack {
          h2 {
            font-size: 1.9em;
          }
          .contain-scale-effect {
            .single-tecnologie-card {
              img {
                width: 8.2rem;
                height: 8.2rem;
              }

              .tecnologie-info {
                width: 6rem;
                font-size: 0.5em;
                top: 50%;
                left: 0;
              }
            }
          }
        }
      }

      @media screen and (max-width: 600px) {
        .container-stack {
          margin: 6rem 0;
          h2 {
            font-size: 1.5em;
          }
          .contain-scale-effect {
            width: 19rem;
            height: 14rem;
            top: 8%;
            left: 5%;

            .single-tecnologie-card {
              img {
                width: 4.5rem;
                height: 4.5rem;
              }

              .tecnologie-info {
                width: 6rem;
                font-size: 0.5em;
                top: 50%;
                left: 0;
              }
            }
          }
        }
      }

      @media screen and (max-width: 456px) {
        .container-stack {
          height: 100%;
          margin: 4rem 0;
          padding: 0 2rem;
          h2 {
            font-size: 0.9em;
          }
          .contain-scale-effect {
            width: 15rem;
            height: 11rem;
            top: 12.5%;
            left: -3%;

            .single-tecnologie-card {
              img {
                width: 5rem;
                height: 5rem;
              }

              .tecnologie-info {
                width: 6rem;
                font-size: 0.5em;
                top: 50%;
                left: 0;
              }
            }
          }
        }
      }
    `,
  ],
})
export class TechStackComponent implements OnInit, OnDestroy {
  @Input() public tecnologiesContent: ITecnology[] = [];
  endInterval!: any;

  public readonly showInfo: { [key: number]: boolean } = {};

  constructor() {}

  ngOnInit(): void {
    this.endInterval = this.getScaleAnimation();
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
    this.tecnologiesContent.forEach((element, index) => {
      this.tecnologiesContent[idx] !== this.tecnologiesContent[index]
        ? (this.tecnologiesContent[index].showDescription = false)
        : this.tecnologiesContent[idx].showDescription
        ? (this.tecnologiesContent[index].showDescription = false)
        : (this.tecnologiesContent[index].showDescription = true);
    });
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
