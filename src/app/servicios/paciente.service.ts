import { Injectable } from '@angular/core';
import { paciente } from '../interfaces/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  lista: paciente[] = [];
  servidor= "http://localhost:3500";
  constructor(private servicio:HttpClient) { }


  addPaciente(cliente:paciente, token:string):Observable<any>{
    let headers= new HttpHeaders();
    headers= headers.append('Content-Type','application/json');
    headers= headers.append('access-token', token)
    return this.servicio.post(`${this.servidor}/api/paciente/registro`,cliente , {'headers': headers})
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

  Token():Observable<any>{
    return this.servicio.get('http://localhost:3500/api/paciente/token');
  }

}
