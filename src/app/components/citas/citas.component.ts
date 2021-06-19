import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cita, medico } from 'src/app/interfaces/interfaces';
import { ConexionService } from 'src/app/servicios/conexion.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent implements OnInit {

  id='';
  citas:Array<cita>=[];
  abierta: Array<cita> = [];
  asignada: Array<cita> = [];
  cerrada: Array<cita> = [];
  nombresMedico: Array<medico> = [];

  constructor(private router: Router , private route:ActivatedRoute , private servicio:ConexionService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id') as string;
    this.servicio.getCitaById(Number(this.id)).subscribe(
      (Citas:Array<cita>=[])=>{
        this.citas=Citas;
        console.log(this.citas);
        this.abierta = this.citas.filter(cita => cita.estado === 'Abierta'); 
        this.asignada = this.citas.filter(cita => cita.estado === 'Asignada');
        this.cerrada = this.citas.filter(cita => cita.estado === 'Cerrada');
        console.log(this.asignada);


        this.citas.forEach((cita) => {
          if (cita.idMedico) {
            this.servicio.getNombreMedById(cita.idMedico).subscribe((res2) => {
              cita.medico = res2.nombre + ' ' + res2.apellido;
            });
          }
          if (cita.idUsuario) {
            this.servicio.getNombrePacById(cita.idUsuario).subscribe((res2) => {
              cita.usuario = res2.nombre + ' ' + res2.apellido;
              console.log(res2)
            });
          }
  
        });
        
      }
    )
  }

  editarCita(Cita:cita){
    if(confirm("Seguro que quiere cancelar la cita?")) {
      Cita.estado="Cerrada"
      //editar
    this.servicio.cancelarCita(Cita).subscribe(respuesta=>{
      console.log(`${respuesta}`)
    })
      this.router.navigate(["/paciente",this.id])
    }
  }
}
