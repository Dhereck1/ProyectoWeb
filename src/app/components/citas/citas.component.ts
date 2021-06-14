import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cita } from 'src/app/interfaces/interfaces';
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
