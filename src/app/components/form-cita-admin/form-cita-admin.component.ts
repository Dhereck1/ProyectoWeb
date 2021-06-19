import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConexionService } from '../../servicios/conexion.service';
import { cita, medico, paciente } from '../../interfaces/interfaces';
import { PacienteService } from 'src/app/servicios/paciente.service';

@Component({
  selector: 'app-form-cita-admin',
  templateUrl: './form-cita-admin.component.html',
  styleUrls: ['./form-cita-admin.component.scss']
})
export class FormCitaAdminComponent implements OnInit {
  form!: FormGroup;
  submitted: boolean = false;
  listaMedicos: medico[] = [];
  id="";
  citaActual:cita[]=[];
  pacienteActual="";

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: ConexionService,
    private servicePaciente: PacienteService
  ) {}

  ngOnInit(): void {

    this.id=this.route.snapshot.paramMap.get('id') as string;

    this.form = this.fb.group({
      medico: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      hora: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      descripcion: ['', [Validators.required]]
    });

    this.service.getAllMeds().subscribe(meds =>{ 
      this.listaMedicos = meds;

      this.listaMedicos.forEach((med) => {
        if (med.especialidad) {
          this.service.getEspecialidad(med.especialidad).subscribe((res2) => {
            med.especialidadNombre = res2.nombreEspecialidad;
          });
        }
      });
    });

    this.service.getCita(Number(this.id)).subscribe(cita=>{
      this.citaActual=cita
      this.form.get("descripcion")?.setValue(this.citaActual[0].descripcion)
      this.form.get("estado")?.setValue(this.citaActual[0].estado)
    })

    this.servicePaciente.getPaciente(Number(this.id)).subscribe(paciente=>{
      this.pacienteActual=paciente[0].nombre + " " + paciente[0].apellido
    })
    

  }

  onSubmit(): void{
    if (this.form.invalid){
      return
    }else{
      //nombre y descripcion no se deberian poder editar por eso no lo incluyo
      this.citaActual[0].hora=this.form.get("hora")?.value
      this.citaActual[0].fecha=this.form.get("fecha")?.value
      this.citaActual[0].estado=this.form.get("estado")?.value
      this.citaActual[0].idMedico=this.form.get("medico")?.value
      console.log(this.citaActual[0])
      this.service.actualizarCita(this.citaActual[0]).subscribe(respuesta=>{
        console.log(respuesta)
      })
    }
  }
}
