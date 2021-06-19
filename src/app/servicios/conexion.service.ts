import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { paciente, cita, medico } from '../interfaces/interfaces'

/*const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}*/

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  servidor= "http://localhost:3500";

  constructor(private servicio:HttpClient) { }

  getAllCitas():Observable<any>{
    return this.servicio.get(`${this.servidor}/api/cita/all`);
  }

  getCita(id:number):Observable<any>{
    return this.servicio.get(`${this.servidor}/api/cita/citaById/${id}`);
  }

  getCitaById(id:number):Observable<any>{

    return this.servicio.get(`${this.servidor}/api/cita/${id}`);
  }

  getNombreMedById(id:number):Observable<any>{
    return this.servicio.get(`${this.servidor}/api/cita/medico/cita/${id}`);
  }

  getNombrePacById(id:number):Observable<any>{
    return this.servicio.get(`${this.servidor}/api/cita/paciente/${id}`);
  }


  addReserva(reserva:cita):Observable<any>{
    //REALIZARLO Q SE AGREGUE A LAS CITAS DE ESE PACIENTE O NO? JSON.stringify(reserva), httpOptions
    //Benja: Con que tenga su id asignado en el tipo cita, ya le pertenece ya que cuando pedimos citas, estas se buscan por id de paciente
    return this.servicio.post(`${this.servidor}/api/cita/anadirCita`, reserva);
  }

  getAllMeds():Observable<any>{
    return this.servicio.get(`${this.servidor}/api/cita/admin/allMedicos`);
  }

  getEspecialidad(id:number):Observable<any>{
    return this.servicio.get(`${this.servidor}/api/cita/especialidad/${id}`);
  }


  actualizarCita(Cita:cita):Observable<any>{
    return this.servicio.put(`${this.servidor}/api/cita/editarCita`,Cita)
  }
  cancelarCita(Cita:cita):Observable<any>{
    return this.servicio.put(`${this.servidor}/api/cita/cancelarCita`,Cita)
  }

  //borrarNota
  //editarNota
 
}
