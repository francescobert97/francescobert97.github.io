import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IProject } from 'src/app/shared/models/home.model';

@Component({
  selector: 'app-project-card',
  template: `
    <div
      class="project-card-section d-flex flex-column justify-content-between align-items-center"
    >
      <div [class]="imgStyle" class="card-title d-flex justify-content-center">
        <img src="{{ project.imgCover }}" alt="immagine copertina" />
        <h2 class="text-shadow-green">{{ project.name | uppercase }}</h2>
      </div>
      <div class="description m-5">
        <p>
          {{ project.description }}
        </p>
      </div>

      <div class="box-img-slide"  *ngIf="project.projectImg.length > 0; else noImage">
      
        <div class="my-5 project-img-slide box-shadow-green">
          <div class="current-image-active px-2 box-shadow-green py-3 d-flex justify-content center" *ngIf="project.projectImg.length > 0">
                <ng-container *ngFor="let project of project.projectImg; let idx = index">
                  <div class=" mx-1" [class]="idx === counter? 'activated' : 'deactivated'">

                  </div>
                </ng-container>
          </div>
          <img (click)="imgClick($event)" src="{{project.projectImg[counter]}}" alt="">
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
          height: 70%;
          top: -2.5%;
          background: red;

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
          width: 50rem; 
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
          object-fit: cover;
        }
      }

      .myportfolio-img-resize {
      }
    `,
  ]
})
export class ProjectCardComponent implements OnInit {
  @Input() project!: IProject;
  @Input() imgStyle: string = '';
  public counter:number = 0;

  constructor() {}

  ngOnInit(): void {
    console.log(this.project.projectImg.length);
    
  }
  imgClick(event:any){
    const total = this.project.projectImg.length - 1;
    
    event.layerX < 330? this.dec(total) : this.inc(total)
    console.log(this.counter)
  }

  inc(total: number) {
    this.counter < total? this.counter++ : this.counter = 0; 
  }

  dec(total: number) {
    this.counter <= 0? this.counter = total : this.counter--;
  }

}


    /*setInterval(() => {
      if(counter > this.project.projectImg.length) {
        counter = 0;
      }
      counter++
      console.log(counter);
    }, 700);*/