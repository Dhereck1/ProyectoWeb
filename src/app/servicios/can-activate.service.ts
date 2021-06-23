import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable()
export class CanActivateService implements CanActivate {

  constructor(private auth:StorageService, private router:Router ) { }

  id=this.auth.getCurrentUser();
  idruta=""
  //idruta=this.route.snapshot.paramMap.get('id') as string;
  canActivate(route: ActivatedRouteSnapshot){
    if (!this.auth.isLogged()){
      console.log("No estas logeado");
      this.router.navigate([""])
      return false
    }
    if(this.id!=route.params.id){
      console.log("Estas logeado en otra cuenta!")
      this.router.navigate([""])
    }
    //console.log(route.params.id)
    return true
  }
  setRuta(id:string){
    this.idruta=id
  }
}
