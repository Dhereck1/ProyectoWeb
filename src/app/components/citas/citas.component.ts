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
  listaCitas:Array<cita>=[];

  constructor(private router: Router , private route:ActivatedRoute , private servicio:ConexionService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id') as string;
    this.servicio.getCitaById(Number(this.id)).subscribe(
      (Citas:Array<cita>=[])=>{
        this.listaCitas=Citas;
        console.log(this.listaCitas);
      }
    )
  }
}
