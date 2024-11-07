import { Component, OnInit } from '@angular/core';

import { CONTENT } from 'src/app/shared/mock-content';
import { IContent } from 'src/app/shared/models/home.model';


@Component({
  selector: 'app-home',
  template: `
    <div class="home-container m-0 w-100 h-100 row g-0 " [class]="secondAnimation? 'second-animation' : null">
      <div class="text-light d-flex flex-column justify-content-between col-sm-10 mx-sm-auto col-12">
            <app-presentation [presentationContent]="content.home.presentation"></app-presentation>

            <app-tech-stack [tecnologiesContent]="content.home.tecnology"></app-tech-stack>

            <app-project-list [projectListContent]="content.home.project"></app-project-list>
      </div>
    </div>
  `,
  styles: [
    `
    .home-container {
      background: url('../../../../assets/template/background-s.jpg') center;
      background-size: 10500%;
      transition: 0.4s;
    }


    .second-animation {
      background-size: cover;
    }



    @media screen and (max-width: 600px) {


    }

    @media screen and (max-width: 456px) {



    }
    `
  ]
})
export class HomeComponent implements OnInit {
  public content:IContent = CONTENT[0];
  public stopAnimation:boolean = true;
  public secondAnimation:boolean = false;
  public progress!:string;

  constructor() { }

  ngOnInit(): void {
    this.hearStopAnimation();
  }

  private hearStopAnimation() {
    this.stopAnimation = false;

    setTimeout(() => this.secondAnimation = true, 100);
  }

  public hearProgressBarScroll(event:string) {
      this.progress = event;
  }
}
