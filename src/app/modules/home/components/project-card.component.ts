import { Component, Input, OnInit,  ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IProject } from 'src/app/shared/models/home.model';

@Component({
  selector: 'app-project-card',
  template: `
    <div
      class="project-card-section d-flex flex-column  vh-100 text-light "
    >

      <div class="image-fixed-height position-relative d-flex justify-content-center">
        <img class="w-100" src="{{ project.imgCover }}" alt="immagine copertina" />
        <div class="position-absolute d-flex flex-column align-items-center ">
          <app-links-bar [socialLink]="project.links"></app-links-bar>
          <h2 class="box-shadow-green mt-5 bg-dark p-xxl-4 p-2 rounded">{{ project.name | uppercase }}</h2>
        </div>
      </div>


        <p class="d-flex align-items-center justify-content-center text-center p-2 flex-grow-1  personal-font-style ">
          {{ project.description }}
        </p>

        <div
          class="  position-relative box-shadow-green d-flex flex-column align-items-center image-fixed-height"
          *ngIf="project.projectImg.length > 0; else noImage"
        >
          <div
            class="current-image-active box-shadow-green  d-flex justify-content center"

          >
              <span
               *ngFor="let imgPath of project.projectImg; let idx = index"
                class="mx-1"
                [ngClass]="{'activated': idx === (count| async ), 'deactivated': idx !== (count| async )}"
              ></span>
          </div>
          <img
                (click)="deepImgClick($event)"
                src="{{ project.projectImg[(count | async) || 0] }}"
                alt="immagine del progetto"
                class=""
                #imgBox
          />
      </div>

      <ng-template #noImage>
        <p>non sono ancora presenti immagini per questo progetto</p>
      </ng-template>
  `,
  styles: [
    `

.image-fixed-height {
  width: 100%;
    height: 400px;
  img {

    width: 50%;
    height: 100%;
  }
}
      .project-card-section {
        background: rgba(0, 0, 0, 0.477);
        box-shadow: 0px 0px 22px -2px #37dbd6;
        div:first-of-type img {
          object-fit: cover;
        }
            .current-image-active {
              position: absolute;
              top: 2%;
              left:48%;
              background: black;
              border-radius: 10px;
              padding: 1.1rem 0.8rem;
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



      @media screen and (max-width: 1200px) {
      }

      @media screen and (max-width: 856px) {
        .image-fixed-height {
          img {
            height: 350px;
            width: 100%;
          }
        }
        .flex-grow-lg-1 {
          flex-grow: 1!important;
        }
        .project-card-section {
              .current-image-active {
                left: 44%;
                padding: 0.6rem 0.4rem;
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



      @media screen and (max-width: 576px) {


        .flex-grow-sm-0 {
          flex-grow: 0!important;
        }
        .flex-grow-sm-1 {
          flex-grow: 1!important;
        }
        .project-card-section {
          border-radius: 0;
          P {
            font-size: 0.7em;
          }
          div:first-of-type {
            h2 {
              font-size: 1.5em;
            }
          }
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

      @media screen and (max-width: 456px) {
        .project-card-section {


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
    `,
  ],
})
export class ProjectCardComponent implements OnInit {
  @Input() project!: IProject;
  count = new BehaviorSubject<number>(0);
  @ViewChild('imgBox') seeWid!:ElementRef;



  constructor() {}

  ngOnInit(): void {
    console.log(this.project)
    this.test()
  }

  test() {
  return this.project.projectImg.some((data,index)=> this.count.getValue() === index? true : false);


  }
  public deepImgClick(event: any) {
   const lastValue = this.count.getValue();
    const total = this.project.projectImg.length -1;
    const imgBoxWidth = this.seeWid.nativeElement.offsetWidth;

    event.layerX > imgBoxWidth / 2 ? this.count.next(lastValue === total? 0 : lastValue +1) : this.count.next( lastValue === 0? total : lastValue -1);
  }
}


