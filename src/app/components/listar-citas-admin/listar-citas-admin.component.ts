import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { cita, medico, paciente } from '../../interfaces/interfaces';
import { ConexionService } from '../../servicios/conexion.service';

@Component({
  selector: 'app-listar-citas-admin',
  templateUrl: './listar-citas-admin.component.html',
  styleUrls: ['./listar-citas-admin.component.scss'],
})
export class ListarCitasAdminComponent implements OnInit {
  citas: Array<cita> = [];
  citasfiltradas: Array<cita> = [];
  abierta: Array<cita> = [];
  asignada: Array<cita> = [];
  cerrada: Array<cita> = [];
  nombresMedico: Array<medico> = [];
  pacientes: Array<paciente> = [];
  medicos: Array<medico> = [];
  filtroPaciente:number
  filtroMedico:number
  filtroEstado:string
  inicial=""

  constructor(private servicioDatos: ConexionService, private router: Router, private servicePaciente:PacienteService) {}

  ngOnInit(): void {

    this.servicePaciente.getAllPacientes().subscribe(datos=>{
      this.pacientes=datos;
    });
    this.servicioDatos.getAllMeds().subscribe(datos=>{
      this.medicos=datos;
    })

    this.servicioDatos.getAllCitas().subscribe((res) => {
      this.citas = res;
      this.citasfiltradas=res

        this.citas.forEach((cita) => {
        if (cita.idMedico) {
          this.servicioDatos.getNombreMedById(cita.idMedico).subscribe((res2) => {
            cita.medico = res2.nombre + ' ' + res2.apellido;
          });
        }
        if (cita.idUsuario) {
          this.servicioDatos.getNombrePacById(cita.idUsuario).subscribe((res2) => {
            cita.usuario = res2.nombre + ' ' + res2.apellido;
            console.log(res2)
          });
        }

      });

      this.abierta = this.citas.filter((cita) => cita.estado === 'Abierta');
      this.asignada = this.citas.filter((cita) => cita.estado === 'Asignada');
      this.cerrada = this.citas.filter((cita) => cita.estado === 'Cerrada');
    });
  }

  //hacer componente de form cita
  editarCita(id: any) {
    this.router.navigate([`admin/formCitaAdmi/${id}`]);
  }
  appFiltro(){
    /*console.log(this.filtroEstado)
    console.log(this.filtroMedico)
    console.log(this.filtroPaciente)*/
    this.citasfiltradas=this.citas
    if(this.filtroPaciente!=null)
    this.citasfiltradas=this.citasfiltradas.filter((cita)=>cita.idUsuario===this.filtroPaciente)
    if(this.filtroMedico!=null)
    this.citasfiltradas=this.citasfiltradas.filter((cita)=>cita.idMedico===this.filtroMedico)
    if(this.filtroEstado!=null)
    this.citasfiltradas=this.citasfiltradas.filter((cita)=>cita.estado===this.filtroEstado)
    this.abierta = this.citasfiltradas.filter((cita) => cita.estado === 'Abierta');
    this.asignada = this.citasfiltradas.filter((cita) => cita.estado === 'Asignada');
    this.cerrada = this.citasfiltradas.filter((cita) => cita.estado === 'Cerrada');
  }
  setPac(id:number){
    this.filtroPaciente=id
  }
  setMed(id:number){
    this.filtroMedico=id
  }
  setEst(estado:string){
    this.filtroEstado=estado
  }
  reset(){
    this.abierta = this.citas.filter((cita) => cita.estado === 'Abierta');
    this.asignada = this.citas.filter((cita) => cita.estado === 'Asignada');
    this.cerrada = this.citas.filter((cita) => cita.estado === 'Cerrada');
    this.inicial=""
  }
}

