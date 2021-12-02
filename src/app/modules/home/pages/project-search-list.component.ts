import { Component, OnInit } from '@angular/core';
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
      <div
        class="project-card-section d-flex flex-column justify-content-around align-items-center"
      >
        <div class="card-title d-flex justify-content-center">
          <img src="{{ project.imgCover }}" alt="" />
          <h2>{{ project.name }}</h2>
        </div>
        <p>
          {{ project.description }}
        </p>
        <div>project image slide</div>
      </div>
    </div>
  `,
  styles: [
    `
      .project-card-section {
        color: white;
        width: 95%;
        height: 85vh;
        background: rgba(0, 0, 0, 0.477);
        box-shadow: 0px 0px 22px -2px #37dbd6;
        border-radius: 10px;
        .card-title {
          border-radius: 10px;
          position: relative;
          width: 100%;
          height: 70%;
          margin-top: -2.2%;
          background: red;

          img {
            border-radius: 10px;
            width: 100%;
            height: 100%;
          }

          h2 {
            position:absolute;
          }
        }
      }
    `,
  ],
})
export class ProjectSearchListComponent implements OnInit {
  project!: IProject;
  constructor(private router: Router, private homeService: HomeService) {}

  ngOnInit(): void {
    this.project = this.homeService.getProject();
  }

  public returnToHome() {
    this.router.navigateByUrl('home');
  }
}
