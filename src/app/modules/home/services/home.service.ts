import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProject } from 'src/app/shared/models/home.model';


@Injectable({
  providedIn: 'root',
})
export class HomeService {
  public project!: IProject;
  private currentProject$ =  new Subject<any>();
  public projectGuard$ = this.currentProject$.asObservable()
  constructor() {}

  public saveProject(project: IProject) {
    this.project = project;
  }

  public getProject() {
    return this.project;
  }

}
