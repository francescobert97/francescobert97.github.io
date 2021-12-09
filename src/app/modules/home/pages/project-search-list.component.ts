import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ɵCodegenComponentFactoryResolver,
} from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from 'src/app/shared/models/home.model';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-project-search-list',
  template: `
    <div class="d-flex flex-column justify-content-between align-items-center">
      <div class="my-4 ms-5  d-flex justify-content-start w-100">
        <button class="btn text-light" (click)="returnToHome()">
          Torna alla Home
        </button>
      </div>
      <app-project-card [imgStyle]="project.imgResize" [project]="project"></app-project-card>
    </div>
  `,
  styles: [
    `

    `,
  ],
})
export class ProjectSearchListComponent implements OnInit {
  project!: IProject;
  constructor(private router: Router, private homeService: HomeService) {}

  ngOnInit(): void {
    
    this.getProject();
    console.log(this.project)
  }

  public returnToHome() {
    this.router.navigateByUrl('home');
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
