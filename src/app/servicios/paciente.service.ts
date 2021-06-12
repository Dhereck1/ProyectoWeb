import { Injectable } from '@angular/core';
import { paciente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  lista: paciente[] = [];
  constructor() { }


  addPaciente(cliente:paciente){
    this.lista.push(cliente);
  }

  getPaciente(){
    return this.lista;
  }

  setPacientes(lista:paciente[]){
    this.lista=lista;
  }


}
