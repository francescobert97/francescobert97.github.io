import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CONTENT } from 'src/app/shared/mock-content';
import { IContent } from 'src/app/shared/models/home.model';

@Component({
  selector: 'app-home',
  template: `
    <div class="home-container d-flex justify-content-start" [class]="secondAnimation? 'second-animation' : null">

      <div class="mt-5 p-3">
        <app-social-bar (toggle)="hearShowSocialBar($event)" [opened]="openedBar"></app-social-bar>
      </div>

      <div  class="home-content text-light d-flex flex-column align-items-center">

          <div class="w-100">
            <app-presentation [presentationContent]="content.home.presentation"></app-presentation>
          </div>

          <div class="stack">
            <app-tech-stack [tecnologiesContent]="content.home.tecnology"></app-tech-stack>
          </div>
          
          <div class="w-100">
            <app-project-list [projectListContent]="content.home.project"></app-project-list>
          </div>
      </div>
    </div>
  `,
  styles: [
    `
    .home-container {
      background: url('../../../../assets/template/background.jpg') center;
      background-size: 10500%;
      width: 100%;
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

    .second-animation {
      background-size: 110%;
    }

    @media screen and (max-width: 1200px) {
      .second-animation {
        background-size: 170%;
      }
    }

    @media screen and (max-width: 856px) {
      .second-animation {
        background-size: 235%;
      }

      .home-content {
        width: 100%;
      }
    }

    @media screen and (max-width: 600px) {
      .second-animation {
        background-size: 295%;
      }

      .home-content {
        width: 100%;
      }
    }

    @media screen and (max-width: 456px) {
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
  public content:IContent = CONTENT[0];
  public stopAnimation:boolean = true;
  public secondAnimation:boolean = false;
  public openedBar: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.hearStopAnimation();
    localStorage.clear()
  }

  private hearStopAnimation() {
    this.stopAnimation = false;

    setTimeout(() => this.secondAnimation = true, 100);
  }

  public hearShowSocialBar(event:any) {
    this.openedBar = !this.openedBar;
  }
}
