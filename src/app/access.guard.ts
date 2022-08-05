import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {

constructor(private _router:Router){}



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {


     // alert("Access denied please Login");
 
      //this._router.navigate(['']);


return true;




  }
  
}
