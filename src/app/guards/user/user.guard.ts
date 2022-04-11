import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private service: AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkUserLogin(route);
  }
  

  checkUserLogin(route: ActivatedRouteSnapshot): boolean {
    if(this.service.userValue){
      if(this.service.userValue.coordinator.role === 'empl01'){
        return true;
      }else{
        window.history.back();
        return false;
      }
    }else{
      document.location.href = "/login";
      return false;
    }
  }
}
