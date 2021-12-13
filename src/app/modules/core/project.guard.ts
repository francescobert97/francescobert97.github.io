import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IProject } from 'src/app/shared/models/home.model';
import { HomeService } from '../home/services/home.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectGuard implements CanActivate  {

  constructor(private router:Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

      
      if(localStorage.projectData) {
        return true;
      }else {
        
        return this.router.navigateByUrl('/error')
      }
     
    }
}
