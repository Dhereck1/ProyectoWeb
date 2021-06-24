import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable()
export class CanActivateAdminService implements CanActivate {

  constructor(private auth:StorageService, private router:Router ) { }

  id=this.auth.getCurrentUser();
  canActivate(){
    if (!this.auth.isLogged()){
      console.log("No estas logeado");
      this.router.navigate([""])
      return false
    }
    if (Number(this.id)!=1){
      console.log("No eres admin");
      this.router.navigate([""])
      return false
    }
    return true
  }
}