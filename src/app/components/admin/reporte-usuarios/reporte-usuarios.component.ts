import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { paciente } from 'src/app/interfaces/interfaces';
import { PacienteService } from 'src/app/servicios/paciente.service';

@Component({
  selector: 'app-reporte-usuarios',
  templateUrl: './reporte-usuarios.component.html',
  styleUrls: ['./reporte-usuarios.component.scss']
})
export class ReporteUsuariosComponent implements OnInit {

  Pacientes: Array<paciente> = [];

  constructor(
    private servicioPaciente: PacienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.servicioPaciente.getAllPacientes().subscribe(datos=>{
      this.Pacientes=datos;
    });
  }

}
