import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from 'src/app/shared/models/home.model';

@Component({
  selector: 'app-project-list',
  template: `
    <div class="project-list d-flex flex-column align-items-center">
      <div class="mt-1 mb-5">
        <app-project-search-bar (resultEmitter)="hearSearchResult($event)"></app-project-search-bar>
      </div>

      <ng-container *ngFor="let project of projectListContent">
        <div *ngIf="searchResults.length <= 0 else projectResult" (click)="showfullProject(project.id)" class="project-card d-flex flex-column align-items-center justify-content-around">
          <img src="{{project.imgCover}}" alt="immagine del progetto">
          
          <div class="project-card-label d-flex flex-column justify-content-around align-items-center">
            <h4>{{project.name | uppercase}}</h4>
            <p>{{project.description}}</p>
            
            <p>clicca per maggiori dettagli.</p>
          </div>
        </div>
      </ng-container>
      <ng-template #projectResult>
        <div *ngFor="let result of searchResults" (click)="showfullProject(result.id)" class="project-card d-flex flex-column align-items-center justify-content-around" >
          <h4>{{result.name | uppercase}}</h4>
          <div>
            <p>{{result.description}}</p>
            
            <p>clicca per maggiori dettagli.</p>
          </div>
        </div>
      </ng-template>
      

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
        position: relative;
        background: rgba(0, 0, 0, 0.477);
        width: 25rem;
        height: 25rem;
        box-shadow: 0px 0px 22px -2px #37dbd6;
        border-radius: 20px;
        transform: rotate3d(1, -10, 1, 30deg);
        transition: 2s;
        img {
          width: 100%;
          height: 100%;
          border-radius: 20px;
        }
        p {
          max-height: 5rem;
          overflow: hidden;
        }
        &:hover {
          transform: rotate3d(0, 0, 0, 365deg);
        }

        .project-card-label {
          position: absolute;
        }
      }
    }
    `
  ]
})
export class ProjectListComponent implements OnInit {
  @Input() public projectListContent:IProject[] = [];
  searchResults:IProject[] = [];
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public showfullProject(id:number) {
    this.router.navigateByUrl(`/home/result/:${id}`);
  }

  public hearSearchResult (event: string) {
    console.log(event);
    this.getResultSearch(event);
  }

  private getResultSearch(searchText:string) {
    const found =  this.projectListContent.find(project => project.name === searchText);
    if(found) {
      this.searchResults.push(found as IProject);
    }
  }
}
