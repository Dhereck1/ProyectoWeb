import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from '../session';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

private localStorageService;
private currentSession:Session=null;

  constructor(private router:Router) { 
    this.localStorageService=localStorage;
    this.currentSession=this.CargarDatos();
  }

  CrearSession(session:Session){
    this.currentSession=session;
    this.localStorageService.setItem('datos', JSON.stringify(session));
  }

  CargarDatos():Session{
    let datos=this.localStorageService.getItem("datos");
    return (datos) ? <Session> JSON.parse(datos):null;
  }

  getCurrentUser(){
    var session: Session = this.CargarDatos();
    return (session && session.token) ? session.token : null;
  }

  CerrarSession(){
    this.localStorageService.removeItem('datos');
    this.currentSession = null;
    this.router.navigate(['/home']);
  }

}
