import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from 'src/app/shared/models/home.model';

@Component({
  selector: 'app-project-list',
  template: `
    <div class="project-list p-4 d-flex flex-column box-shadow-green align-items-center">
      <div class="mb-4">
        <app-project-search-bar
          (resultEmitter)="hearSearchResult($event)"
        ></app-project-search-bar>
      </div>


      <div class="w-100 h-100 position-relative d-flex align-items-end">
        <ng-container *ngIf="!searchResults.length; else projectResult">
              <app-projects-card [projects]="projectListContent"></app-projects-card>
        </ng-container>

        <div class="bg-light w-100 p-4 rounded"></div>
      </div>



      <ng-template #projectResult>
        <app-projects-card [projects]="searchResults"></app-projects-card>
      </ng-template>
    </div>
  `,
  styles: [
    `
      .project-list {
        background: rgba(0, 0, 0, 0.477);
        width: 100%;
        height: clamp(15rem, 20rem, 20rem);
        border-radius: 30px 30px 0 0;
      }

      @media screen and (max-width: 1200px) {
      }

      @media screen and (max-width: 856px) {
        .project-list {
          font-size: 0.6em;
        }
      }

      @media screen and (max-width: 600px) {
        .project-list {
          border-radius: 1px;
          height: clamp(13rem, 13rem, 17rem);
        }
      }

      @media screen and (max-width: 456px) {
        .project-list {
          border-radius: 1px;
        }
      }
    `,
  ],
})
export class ProjectListComponent implements OnInit {
  @Input() public projectListContent: IProject[] = [];
  searchResults: IProject[] = [];

  constructor() {}

  ngOnInit(): void {}

  public hearSearchResult(event: Observable<string>) {
    event.subscribe((search) => this.getResultSearch(search));
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
