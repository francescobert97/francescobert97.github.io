import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from 'src/app/shared/models/home.model';
import { AccessHomeService } from 'src/app/shared/services/access-home.service';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-project-search-list',
  template: `
    <div
      class="background-2 w-100 h-100 row g-0"
    >
        <app-custom-button [btnData]="{label: 'Back home', classes: 'my-4 ms-2 ms-xxl-5 p-2 position-absolute close-btn personal-font-style btn box-shadow-green text-light'}" (methodCaller)="returnToHome()"></app-custom-button>


      <div class="col-sm-10 mx-auto col-12 d-flex justify-content-center">
        <app-projects-box-container
          [project]="project"
        ></app-projects-box-container>
      </div>
    </div>
  `,
  styles: [
    `

    app-custom-button {
      position:absolute;
    }
      @media screen and (max-width: 456px) {
        button {
          font-size: 0.9em;
        }
      }
    `,
  ],
})
export class ProjectSearchListComponent implements OnInit, OnDestroy {
  project!: IProject;
  constructor(private router: Router, private homeService:HomeService) {}

  ngOnInit(): void {
    this.updateProjectOnLocalStorage();
  }

  public returnToHome() {
    this.router.navigateByUrl('home');
  }


  private updateProjectOnLocalStorage() {
    this.homeService.projectGuard$.subscribe(data => this.project = data)
  }

  ngOnDestroy() {
    if (localStorage.projectData) this.homeService.removeProject()
  }


}
