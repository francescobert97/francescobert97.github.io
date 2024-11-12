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

  public removeProject() {
    const emptyProject:IProject = {
      id:0,
      description:'',
      imgCover: '',
      links: [],
      projectImg:[],
      name: ''
    }

    localStorage.removeItem('projectData');
    this.currentProject$.next(emptyProject);
  }

  public getProject() {
    return this.currentProject$.getValue();
  }

}
