import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { paciente, cita, medico } from '../interfaces/interfaces'

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  servidor= "http://localhost:3500";

  constructor(private servicio:HttpClient) { }

  getAllCitas():Observable<any>{

    return this.servicio.get(`${this.servidor}/api/cita/all`);
  }

  getCitaById(id:number):Observable<any>{

    return this.servicio.get(`${this.servidor}/api/cita/${id}`);
  }


  //borrarNota
  //editarNota
  //postCita
}
