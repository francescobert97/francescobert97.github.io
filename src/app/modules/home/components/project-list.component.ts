import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IProject } from 'src/app/shared/models/home.model';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-project-list',
  template: `
    <div class="project-list  d-flex flex-column   align-items-center">

      <div class=" mb-4">
        <app-project-search-bar
          (resultEmitter)="hearSearchResult($event)"
        ></app-project-search-bar>
      </div>


      <div class="w-100 h-100 position-relative d-flex align-items-end">
        <ng-container *ngIf="!searchResults.length; else projectResult">
              <div
                *ngFor="let project of projectListContent; let idx = index"
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
        </ng-container>

        <div class="bg-light w-100 p-4 rounded"></div>
      </div>



      <ng-template #projectResult>
        <div
          *ngFor="let result of searchResults;  let idx = index "
          (click)="showfullProject(result.id, result)"
          class="project-card d-flex flex-column align-items-center justify-content-around"
          [ngStyle]="{'z-index':  100 + idx, 'left':  (idx) + '%'}"
        >
          <img src="{{ result.imgCover }}" alt="immagine del progetto" />

          <div
            class="box-shadow-green project-card-label d-flex flex-column justify-content-around align-items-center"
          >
            <h4>{{ result.name | uppercase }}</h4>

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
        padding:1rem;
        width: 100%;
        height: clamp(15rem, 20rem, 20rem);
        border-radius: 30px 30px 0 0;

        .project-card {
          top:25%;
          height: 70%;
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
      }

      @media screen and (max-width: 1200px) {
        .project-list {
        }
      }

      @media screen and (max-width: 856px) {
        .project-list {
          font-size: 0.6em;

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
      }

      @media screen and (max-width: 600px) {
        .project-list {
          border-radius: 1px;

          .project-card {

            h4 {
              font-size: 1.4em;
            }

          }
        }
      }

      @media screen and (max-width: 456px) {
        .project-list {
          border-radius: 1px;

          .project-card {
            h4 {
              font-size: 1.2em;
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
      (project) => project.name.indexOf(searchText) === 0
    );

    if (
      found &&
      !this.searchResults.some((project) => project.name === found.name)
    ) {
      this.searchResults.push(found as IProject);
    }

    if (!found || this.searchResults.length > 1 || searchText.length < 3) {
      this.searchResults = [];
    }
  }
}
