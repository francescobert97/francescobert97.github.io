import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    
      <!--<div class="first-animation" *ngIf="stopAnimation">
        <app-animation (stopAnimation)="hearStopAnimation($event)"></app-animation>
      </div>-->
    <div class="home-container d-flex justify-content-center" [class]="secondAnimation? 'second-animation' : null">
      <div *ngIf="showContent"  class="home-content text-light d-flex flex-column align-items-center">

          <div class="w-100">
            <app-presentation></app-presentation>
          </div>

          <div class="stack">
            <app-tech-stack></app-tech-stack>
          </div>

      </div>
    </div>
  `,
  styles: [
    `
    .home-container {
      background: url('../../../../assets/template/background.jpg') center;
      background-size: 10500%;
      height: 100vh;
      transition: 0.4s;
      position: relative;
      .first-animation {
        position: absolute;
      }
    }

    .home-content {
      width: 80%;
      /*background: rgba(255, 255, 255, 0.077);
      box-shadow: 0px 0px 22px 14px #37DBD6;*/

      overflow-y: scroll;
    }

    .stack {
  
    }
    .second-animation {
      background-size: 110%;
    }

    @media screen and (max-width: 1200px) {
      .second-animation {
        background-size: 150%;
      }
    }

    @media screen and (max-width: 856px) {
      .second-animation {
        background-size: 180%;
      }

      .home-content {
        width: 100%;
      }
    }

    @media screen and (max-width: 600px) {
      .second-animation {
        background-size: 265%;
      }

      .home-content {
        width: 100%;
      }
    }

    @media screen and (max-width: 356px) {
      .second-animation {
        background-size: 425%;
      }

      .home-content {
        width: 100%;
      }
    }
    `
  ]
})
export class HomeComponent implements OnInit {
  public stopAnimation:boolean = true;
  public secondAnimation:boolean = true;
  public showContent:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public hearStopAnimation(event:any) {
    this.stopAnimation = false;

    setTimeout(() => {
      this.secondAnimation = true;
    }, 100);

    setTimeout(() => this.showContent = true, 700);
  }

}
