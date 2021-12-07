import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IProject } from 'src/app/shared/models/home.model';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-project-list',
  template: `
    <div class="project-list d-flex flex-column align-items-center">
      <div class="mt-1 mb-5">
        <app-project-search-bar
          (resultEmitter)="hearSearchResult($event)"
        ></app-project-search-bar>
      </div>

      <div>
        <div
          class="d-flex"
          *ngIf="searchResults.length <= 0; else projectResult"
        >
          <ng-container *ngFor="let project of projectListContent">
            <div
              (click)="showfullProject(project.id, project)"
              class="project-card d-flex flex-column align-items-center justify-content-around"
            >
              <img src="{{ project.imgCover }}" alt="immagine del progetto" />

              <div
                class="project-card-label d-flex flex-column justify-content-around align-items-center"
              >
                <h4>{{ project.name | uppercase }}</h4>
                <p class="text-center">{{ project.description }}</p>

                <p class="text-center">clicca per maggiori dettagli.</p>
              </div>
            </div>
          </ng-container>
        </div>
      </div>

      <ng-template #projectResult>
        <div
          *ngFor="let result of searchResults"
          (click)="showfullProject(result.id, result)"
          class="project-card d-flex flex-column align-items-center justify-content-around"
        >
          <img src="{{ result.imgCover }}" alt="immagine del progetto" />

          <div
            class="project-card-label d-flex flex-column justify-content-around align-items-center"
          >
            <h4>{{ result.name | uppercase }}</h4>
            <p>{{ result.description }}</p>

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
        margin-left: 3rem;
        margin-top: 14rem;
        margin-bottom: 1rem;
        width: 92%;
        height: 65%;
        border-radius: 30px;

        .project-card {
          position: relative;
          background: rgba(0, 0, 0, 0.477);
          width: 20rem;
          height: 18.5rem;
          box-shadow: 0px 0px 22px -2px #37dbd6;
          border-radius: 20px;
          transform: rotate3d(1, -10, 1, 30deg);
          transition: 2s;
          overflow:hidden;

          img {
            margin-left: 150px;
            width: 190%;
            height: 120%;
        
            border-radius: 20px;
          }

          h4 {
            text-shadow: -3px -1px 12px rgba(108, 255, 215, 1);
            font-size: 2em;
          }

          p {
            margin: 1.9rem 0;
            max-height: 5rem;
            overflow: hidden;
            font-size: 1.2em;
          }
          &:hover {
            transform: rotate3d(0, 0, 0, 365deg);
            transform: scale(1.1);
            z-index: 1000;
          }

          .project-card-label {
            position: absolute;
          }
        }
      }

    @media screen and (max-width: 1200px) {
   
    }

    @media screen and (max-width: 856px) {
      .project-list {
        margin-left: 2rem;
        margin-top: 13rem;
        height: 25rem;
        .project-card {
          width: 15.5rem;
          height: 15.5rem;
          h4{
            font-size: 1.4em;
          }
          p{
            margin: 0.6rem 0;
            max-height: 3.5rem;
            font-size: 0.7em;
          }
        }
      }
    }

    @media screen and (max-width: 600px) {
      .project-list {
        height: 25rem;
        margin-left: 1rem;
        margin-top: 10rem;
        .project-card {
          width: 12.5rem;
          height: 12.5rem;
          h4{
            font-size: 1.4em;
          }
          p{
            margin: 0.6rem 0;
            max-height: 3.5rem;
            font-size: 0.7em;
          }
        }
      }
    }

    @media screen and (max-width: 456px) {
      .project-list {
        height: 20rem;
        margin-left: 1rem;
        margin-top: 13rem;
        .project-card {
          width: 10rem;
          height: 10rem;
          h4{
            font-size: 1.2em;
          }
          p{
            margin: 0.3rem 0;
            max-height: 3.5rem;
            font-size: 0.5em;
          }
        }
      }
    }
    `,
  ],
})
export class ProjectListComponent implements OnInit {
  @Input() public projectListContent: IProject[] = [];
  searchResults: IProject[] = [];

  constructor(private router: Router, private homeService: HomeService) {}

  ngOnInit(): void {}

  public showfullProject(id: number, project: IProject) {
    this.sendDataProject(project);

    this.router.navigateByUrl(`/home/result/:${id}`);
  }

  public hearSearchResult(event: Observable<string>) {
    event.subscribe((search) => this.getResultSearch(search));
  }

  private sendDataProject(project: IProject) {
    this.homeService.saveProject(project);

    this.saveDataOnLocalStorage(project);
  }
  private saveDataOnLocalStorage(project: IProject) {
    localStorage.setItem('projectData', JSON.stringify(project));
  }
  private getResultSearch(searchText: string) {
    const found = this.projectListContent.find(
      (project) => project.name === searchText
    );

    if (
      found &&
      !this.searchResults.some((project) => project.name === found.name)
    ) {
      this.searchResults.push(found as IProject);
      console.log('push');
    }
    if (!found || searchText.length < 3 || this.searchResults.length > 1) {
      this.searchResults = [];
    }
  }
}
