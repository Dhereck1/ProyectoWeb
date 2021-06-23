import { Injectable } from '@angular/core';
import { paciente } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  lista: paciente[] = [];
  servidor= "http://localhost:3500";
  constructor(private servicio:HttpClient) { }


  addPaciente(cliente:paciente):Observable<any>{
    return this.servicio.post(`${this.servidor}/api/paciente/registro`,cliente)
  }
  actHistoria(cliente:paciente):Observable<any>{
    return this.servicio.put(`${this.servidor}/api/paciente/actHist`,cliente)
  }
  setPacientes(lista:paciente[]){
    this.lista=lista;
  }
  getPaciente(id:number):Observable<any>{
    return this.servicio.get(`${this.servidor}/api/paciente/${id}`);
  }
  getHistoria(id:number):Observable<any>{
    return this.servicio.get(`${this.servidor}/api/paciente/${id}/historia`);
  }
  getAllPacientes():Observable<any>{
    return this.servicio.get(`${this.servidor}/api/paciente/all`);
  }


}
