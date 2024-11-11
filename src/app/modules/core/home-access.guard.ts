import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccessHomeService } from 'src/app/shared/services/access-home.service';

@Injectable({
  providedIn: 'root'
})
export class HomeAccessGuard  {
  data:boolean = false;

  constructor(private accessHome: AccessHomeService, private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.accessHome.getLastValue() === true? true : this.router.navigateByUrl('');
  }

}
