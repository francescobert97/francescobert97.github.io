import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccessHomeService } from 'src/app/shared/services/access-home.service';

@Injectable({
  providedIn: 'root'
})
export class HomeAccessGuard implements CanActivate {
  constructor(private accessHome: AccessHomeService, private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('sto eseguendo il controllo...')
      if(this.accessHome.getAccessToHome()){
        return true
      }else {
        this.router.navigateByUrl('');
        return false;
      }
    
  }
  
}
