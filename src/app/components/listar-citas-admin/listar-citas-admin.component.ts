import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cita, medico } from '../../interfaces/interfaces';
import { ConexionService } from '../../servicios/conexion.service';


@Component({
  selector: 'app-listar-citas-admin',
  templateUrl: './listar-citas-admin.component.html',
  styleUrls: ['./listar-citas-admin.component.scss']
})

export class ListarCitasAdminComponent implements OnInit {

  citas: Array<cita> = [];
  abierta: Array<cita> = [];
  asignada: Array<cita> = [];
  cerrada: Array<cita> = [];
  nombresMedico: Array<medico> = [];


  constructor( 
    private servicioDatos: ConexionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.servicioDatos.getAllCitas().subscribe(res => {
      this.citas = res;

      //la idea es que en el form de cita cuando asigne el 
      //estado sea un select para q este escrita siempre de la misma forma
      this.abierta = this.citas.filter(cita => cita.estado === 'abierta'); 
      this.asignada = this.citas.filter(cita => cita.estado === 'asignada');
      this.cerrada = this.citas.filter(cita => cita.estado === 'cerrada');
      
      /*for(let i=0;  i< this.citas.length; i++){
        this.servicioDatos.getNombreMedById(this.citas[i].idCita).subscribe(res =>{
           this.nombresMedico.push(res);
        });
      }
      */
    });

   
  }

  //hacer componente de form cita
  editarCita(id:any){
    this.router.navigate([`/formCitaComponent/${id}`]);
  }

}


/*export interface cita{
    idCita: number;
    idUsuario: number;
    idMedico: number;
    fecha:string;
    hora:string;
    descripcion: string;
    estado:string;
}*/