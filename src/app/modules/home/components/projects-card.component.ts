import { Component, Input, OnInit } from '@angular/core';
import { IProject } from 'src/app/shared/models/home.model';
import { HomeService } from '../services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-card',
  template: `
 <div
               *ngFor="let project of projects; let idx = index"
                (click)="showfullProject(project.id, project)"
                class="position-absolute project-card box-shadow-green d-flex flex-column align-items-center justify-content-around"
                [ngStyle]="{'z-index':  100 + idx, 'left':  (3 +idx *4) + '%'}"
              >
                <h4>{{ project.name | uppercase }}</h4>

                <img  src="{{ project.imgCover }}" alt="immagine del progetto" />

                  <span class=" position-absolute  w-25  personal-font-style text-center box-shadow-green p-1 d-flex justify-content-center align-items-center">
                    <img src="../../../../assets/icons/play-icon.png" alt="play button" class="ms-3"/>
                  </span>
              </div>
  `,
  styles: [
    `
  .project-card {
          top:0;
          height: 95%;
          background: rgba(0, 0, 0);
          border-radius: 20px;
          transform: rotate3d(1, -10, 1, 30deg);
          transition: 1s;
          overflow: hidden;
          h4 {
            text-shadow: -3px -1px 12px rgba(108, 255, 215, 1);
            font-size: 2em;
          }

          img {
            width:100%;
            height:100%;
          }

          &:hover {
            transform: rotate3d(0, 0, 0, 365deg) translateY(-100px);
            z-index: 1000;
          }
          span {
              border-radius: 100%;
              background: aqua;
            }
        }
        @media screen and (max-width: 856px) {


          .project-card {
            border-radius: 10px;
            &:hover {
            transform:  translateY(-50px);
            z-index: 1000;
          }
            h4 {
              font-size: 1.4em;
            }

          }
        }

      @media screen and (max-width: 456px) {
          .project-card {
            h4 {
              font-size: 1.2em;
            }

          }
        }
    `,
  ],
})
export class ProjectsCardComponent implements OnInit {
  @Input() projects!: IProject[];

  constructor(private router: Router, private homeService: HomeService) {}

  ngOnInit(): void {}

  public showfullProject(id: number, project: IProject) {
    this.sendDataProject(project);

    this.router.navigateByUrl(`/home/project/:${id}`);
  }
  private sendDataProject(project: IProject) {
    this.homeService.saveProject(project);

  }

}
