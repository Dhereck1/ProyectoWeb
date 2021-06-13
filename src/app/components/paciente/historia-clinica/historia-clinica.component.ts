import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { paciente } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-historia-clinica',
  templateUrl: './historia-clinica.component.html',
  styleUrls: ['./historia-clinica.component.scss']
})
export class HistoriaClinicaComponent implements OnInit {

  constructor(private router: Router , private route:ActivatedRoute , private servicio:PacienteService) { }

  id="";
  paciente:Array<paciente>=[];


  ngOnInit(): void {

    this.id=this.route.snapshot.paramMap.get('id') as string;
    this.servicio.getPaciente(Number(this.id)).subscribe(dato=>{
      this.paciente=dato;
    })
  }

}
