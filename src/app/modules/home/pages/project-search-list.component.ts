import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ɵCodegenComponentFactoryResolver,
} from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from 'src/app/shared/models/home.model';
import { AccessHomeService } from 'src/app/shared/services/access-home.service';

@Component({
  selector: 'app-project-search-list',
  template: `
    <app-scrollbar [progress]="progress"></app-scrollbar>
    <div
      class="w-100 d-flex flex-column justify-content-center align-items-center"
    >
      <div class="my-4 ms-5  d-flex justify-content-start w-100">
        <button
          class="close-btn personal-font-style btn box-shadow-green text-light"
          (click)="returnToHome()"
        >
          Torna alla Home
        </button>
      </div>
      <div class="w-100 d-flex justify-content-center">
        <app-project-card
          [imgStyle]="project.imgResize"
          [project]="project"
          (progress)="hearProgressScrollPercentage($event)"
        ></app-project-card>
      </div>
    </div>
  `,
  styles: [
    `
      .close-btn {
        background: rgba(0, 0, 0, 0.777);
        border-radius: 10px;
      }
      @media screen and (max-width: 1200px) {
      }

      @media screen and (max-width: 856px) {
      }

      @media screen and (max-width: 600px) {
      }

      @media screen and (max-width: 456px) {
        button {
          font-size: 0.8em;
        }
      }
    `,
  ],
})
export class ProjectSearchListComponent implements OnInit, OnDestroy {
  project!: IProject;
  progress: string = '';
  constructor(private router: Router, private accessHome: AccessHomeService) {}

  ngOnInit(): void {
    this.updateProjectOnLocalStorage();
  }

  public returnToHome() {
    this.getAccessToHome();

    this.router.navigateByUrl('home');
  }

  public hearProgressScrollPercentage(event: string) {
    this.progress = event;
  }

  private updateProjectOnLocalStorage() {
    const projectObj = JSON.parse(
      localStorage.getItem('projectData') as string
    );
    this.project = projectObj;
  }

  ngOnDestroy() {
    if (localStorage.projectData) {
      this.getAccessToHome();
      localStorage.removeItem('projectData');
    }
  }
  private getAccessToHome() {
    this.accessHome.setAccessToHome(true);
    this.accessHome.getAccessToHome();
  }

}
