import { Injectable } from '@angular/core';
import { IProject } from 'src/app/shared/models/home.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  public project!: IProject;
  constructor() {}

  public saveProject(project: IProject) {
    this.project = project;
  }

  public getProject() {
    return this.project;
  }
}
