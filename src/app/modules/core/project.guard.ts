import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IProject } from 'src/app/shared/models/home.model';
import { HomeService } from '../home/services/home.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectGuard   {
  data!:IProject;

  constructor(private router:Router,private homeService:HomeService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.homeService.projectGuard$.subscribe(data =>this.data = data)
          console.log(this.data)
      return this.data.id > 0? true : this.router.navigateByUrl('/error');

    }
}
