import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from 'src/app/shared/models/home.model';

@Component({
  selector: 'app-project-list',
  template: `
    <div class="project-list d-flex flex-column align-items-center">
      <div class="mt-1 mb-5">
        <app-project-search-bar></app-project-search-bar>
      </div>

      <ng-container *ngFor="let project of projectListContent">
        <div (click)="showfullProject(project.id)" class="project-card d-flex flex-column align-items-center justify-content-around" >
          <h4>{{project.name | uppercase}}</h4>
          <div>
            <p>{{project.description}}</p>
            
            <p>clicca per maggiori dettagli.</p>
          </div>
        </div>
      </ng-container>

    </div>
  `,
  styles: [
    `
    .project-list {
      background: rgba(0, 0, 0, 0.477);
      box-shadow: 0px 0px 22px 4px #37dbd6;
      padding: 2.5rem;
      margin: 0 3rem;
      margin-top: 10rem;
      width: 92%;
      height: 65%;
      border-radius: 30px;

      .project-card {
        background: rgba(0, 0, 0, 0.477);
        width: 15rem;
        height: 20rem;
        box-shadow: 0px 0px 22px -2px #37dbd6;
        border-radius: 10px;
        transform: rotate3d(1, -10, 1, 30deg);
        transition: 2s;
        p {
          max-height: 5rem;
          overflow: hidden;
        }
        &:hover {
          transform: rotate3d(0, 0, 0, 365deg);
        }
      }
    }
    `
  ]
})
export class ProjectListComponent implements OnInit {
  @Input() public projectListContent:IProject[] = [];
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public showfullProject(id:number) {
    this.router.navigateByUrl(`/home/result/:${id}`);
  }
}
