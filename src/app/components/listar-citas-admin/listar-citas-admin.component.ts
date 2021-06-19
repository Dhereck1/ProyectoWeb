import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cita, medico } from '../../interfaces/interfaces';
import { ConexionService } from '../../servicios/conexion.service';

@Component({
  selector: 'app-listar-citas-admin',
  templateUrl: './listar-citas-admin.component.html',
  styleUrls: ['./listar-citas-admin.component.scss'],
})
export class ListarCitasAdminComponent implements OnInit {
  citas: Array<cita> = [];
  abierta: Array<cita> = [];
  asignada: Array<cita> = [];
  cerrada: Array<cita> = [];
  nombresMedico: Array<medico> = [];

  constructor(private servicioDatos: ConexionService, private router: Router) {}

  ngOnInit(): void {
    this.servicioDatos.getAllCitas().subscribe((res) => {
      this.citas = res;

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
}

