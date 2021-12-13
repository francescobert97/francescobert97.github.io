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
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-project-search-list',
  template: `
    <div class="project-section w-100 d-flex flex-column justify-content-center align-items-center">
      <div class="my-4 ms-5  d-flex justify-content-start w-100">
        <button class="personal-font-style btn bg-dark box-shadow-green text-light" (click)="returnToHome()">
          Torna alla Home
        </button>
      </div>
      <div class="w-100 d-flex justify-content-center">
        <app-project-card [imgStyle]="project.imgResize" [project]="project"></app-project-card>
      </div>
    </div>
  `,
  styles: [
    `
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
  constructor(private router: Router, private accessHome: AccessHomeService) {}

  ngOnInit(): void {
    
    this.getProject();
    console.log(this.project);
  }

  public returnToHome() {
    this.router.navigateByUrl('home');
  }

  ngOnDestroy() {
    if(localStorage.projectData) {
      console.log('eseguito')
      this.accessHome.setAccessToHome(true);
      this.accessHome.getAccessToHome();
      localStorage.removeItem('projectData');
    }
   
  }
  private updateLocalStorage() {
    const projectObj = JSON.parse(
      localStorage.getItem('projectData') as string
    );
    this.project = projectObj;
  }

  private getProject() {
    this.updateLocalStorage();

  }
}
