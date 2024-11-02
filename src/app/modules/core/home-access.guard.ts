import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccessHomeService } from 'src/app/shared/services/access-home.service';

@Injectable({
  providedIn: 'root'
})
export class HomeAccessGuard  {
  constructor(private accessHome: AccessHomeService, private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.accessHome.getAccessToHome()){
        return true
      }else {
        this.router.navigateByUrl('');
        return false;
      }
    
  }
  
}
