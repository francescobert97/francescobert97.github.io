import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IProject } from 'src/app/shared/models/home.model';

@Component({
  selector: 'app-project-card',
  template: `
    <div
      appScroll
      (progress)="hearProgressBarScroll($event)"
      class="project-card-section d-flex flex-column align-items-center"
    >
      <div [class]="imgStyle" class="card-title d-flex justify-content-center">
        <img src="{{ project.imgCover }}" alt="immagine copertina" />
        <h2 class="text-shadow-green">{{ project.name | uppercase }}</h2>
      </div>
      <div class="my-5 description">
        <p class="description-project personal-font-style text-center my-5">
          {{ project.description }}
        </p>
      </div>

      <div
        class="box-img-slide"
        *ngIf="project.projectImg.length > 0; else noImage"
      >
        <div class="my-5 project-img-slide box-shadow-green">
          <div
            class="current-image-active box-shadow-green  d-flex justify-content center"
            *ngIf="project.projectImg.length > 0"
          >
            <ng-container
              *ngFor="let project of project.projectImg; let idx = index"
            >
              <div
                class="mx-1"
                [class]="idx === counter ? 'activated' : 'deactivated'"
              ></div>
            </ng-container>
          </div>
          <img
            (click)="imgClick($event)"
            src="{{ project.projectImg[counter] }}"
            alt="immagine del progetto"
          />
        </div>
      </div>

      <ng-template #noImage>
        <p>non sono ancora presenti immagini per questo progetto</p>
      </ng-template>
    </div>
  `,
  styles: [
    `
      .project-card-section {
        color: white;
        width: 100%;
        height: 85vh;
        background: rgba(0, 0, 0, 0.477);
        box-shadow: 0px 0px 22px -2px #37dbd6;
        border-radius: 10px;
        overflow: scroll;
        .card-title {
          position: relative;
          width: 100%;
          height: 100%;
          top: -2.5%;
          img {
            border-radius: 10px;
            width: 100%;
            height: 100%;
          }

          h2 {
            top: 20%;
            position: absolute;
            font-size: 5em;
          }
        }

        .box-img-slide {
          width: 80%;
          height: 100%;

          .project-img-slide {
            position: relative;
            width: 100%;
            height: 100%;
            border-radius: 10px;

            img {
              object-fit: cover center;
              width: 100%;
              height: 100%;
              border-radius: 10px;
            }

            .current-image-active {
              position: absolute;
              top: 2%;
              left: 46%;
              background: black;
              border-radius: 10px;
              padding: 1.1rem 0.8rem;
            }
          }

          .activated {
            width: 10px;
            height: 10px;
            border-radius: 10px;
            background: white;
            box-shadow: 0px 0px 2px 1.5px #37dbd6;
          }
          .deactivated {
            width: 10px;
            height: 10px;
            border-radius: 10px;
            background: grey;
            box-shadow: 0px 0px 2px 1.5px #37dbd6;
          }
        }
      }

      .f-stream-img-resize {
        img {
          margin-top: 1.1rem;
        }
      }

      .myportfolio-img-resize {
        zoom: 10%;
      }
      @media screen and (max-width: 1200px) {
      }

      @media screen and (max-width: 856px) {
        .project-card-section {
          margin-left: 0.25rem;
          width: 100%;
          .card-title {
            top: -3.5 img {

            }

            h2 {
              font-size: 2em;
            }
          }

          .description-project {
            font-size: 0.8em;
          }

          .box-img-slide {
            .project-img-slide {
              .current-image-active {
                left: 44%;
                padding: 0.6rem 0.4rem;
              }
            }
            .activated {
              width: 6px;
              height: 6px;
            }

            .deactivated {
              width: 6px;
              height: 6px;
            }
          }
        }
      }

      @media screen and (max-width: 600px) {
        .project-card-section {
          margin-left: 0.35rem;
          width: 100%;
          .card-title {
            top: -3.5 img {

            }

            h2 {
              font-size: 2em;
            }
          }

          .description-project {
            font-size: 0.8em;
          }

          .box-img-slide {
            .project-img-slide {
              .current-image-active {
                left: 44%;
                padding: 0.6rem 0.4rem;
              }
            }
            .activated {
              width: 6px;
              height: 6px;
            }

            .deactivated {
              width: 6px;
              height: 6px;
            }
          }
        }
      }

      @media screen and (max-width: 456px) {
        .project-card-section {
          width: 100%;
          .card-title {
            top: -3.5 img {

            }

            h2 {
              font-size: 2em;
            }
          }

          .description-project {
            font-size: 0.8em;
          }

          .box-img-slide {
            .project-img-slide {
              .current-image-active {
                left: 42%;
                padding: 0.5rem 0.3rem;
              }
            }
            .activated {
              width: 5px;
              height: 5px;
            }

            .deactivated {
              width: 5px;
              height: 5px;
            }
          }
        }
      }
    `,
  ],
})
export class ProjectCardComponent implements OnInit {
  @Input() project!: IProject;
  @Input() imgStyle: string = '';
  @Output() progress = new EventEmitter<string>();
  public counter: number = 0;

  constructor() {}

  ngOnInit(): void {
    console.log(this.project.projectImg.length);
  }
  public imgClick(event: any) {
    const total = this.project.projectImg.length - 1;
    if (document.documentElement.clientWidth > 456) {
      event.layerX < 330 ? this.dec(total) : this.inc(total);
    } else {
      event.layerX < 150 ? this.dec(total) : this.inc(total);
      console.log(event.layerX);
    }
  }
  public hearProgressBarScroll(event: string) {
    this.emitScrollPercentage(event);
  }
  private inc(total: number) {
    this.counter < total ? this.counter++ : (this.counter = 0);
  }

  private dec(total: number) {
    this.counter <= 0 ? (this.counter = total) : this.counter--;
  }
  private emitScrollPercentage(percentage: string) {
    this.progress.emit(percentage);
  }
}

/*setInterval(() => {
      if(counter > this.project.projectImg.length) {
        counter = 0;
      }
      counter++
      console.log(counter);
    }, 700);*/
