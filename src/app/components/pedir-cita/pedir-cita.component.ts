import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { cita } from 'src/app/interfaces/interfaces';
import { ConexionService } from '../../servicios/conexion.service';


@Component({
  selector: 'app-pedir-cita',
  templateUrl: './pedir-cita.component.html',
  styleUrls: ['./pedir-cita.component.scss']
})
export class PedirCitaComponent implements OnInit {
  form!: FormGroup;
  submitted: boolean = false;
  reserva!: cita;
  id= "";

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private conexion_service: ConexionService,
    private activatedR: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      descripcion: ['', [Validators.required]]
    });

    this.id = this.activatedR.snapshot.paramMap.get("id") as string;
    //console.log(this.id);

  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }else{
      const reserva: cita = {
        descripcion: this.form.controls.descripcion.value,
        idCita: 0,
        idUsuario: Number(this.id), //Number(this.id)
        //idMedico:0, // cambiar porque no lo asigna altiro 
        fecha: "no asignado",
        hora: "no asignado",
        estado: "Abierta" 
      };

      this.conexion_service.addReserva(reserva).subscribe(nueva=>{ //nueva reserva
        console.log(`${nueva} Fue añadadida`)
      });
      // this.form.reset();
      this.router.navigate(['paciente',this.id]) //definir que se va a vista paciente
    }
  }

}
