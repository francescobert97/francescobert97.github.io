import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IProject } from 'src/app/shared/models/home.model';


@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private currentProject$ =  new BehaviorSubject<IProject>(JSON.parse(localStorage.getItem('projectData') as string));
  public projectGuard$ = this.currentProject$.asObservable()
  constructor() {}
  ngOnInit(): void {
  }
  public saveProject(project: IProject) {
    localStorage.setItem('projectData', JSON.stringify(project));
    this.currentProject$.next(project);
  }

  public getProject() {
    return this.currentProject$.getValue();
  }

}
