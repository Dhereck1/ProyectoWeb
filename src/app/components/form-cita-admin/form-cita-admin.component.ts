import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConexionService } from '../../servicios/conexion.service';
import { medico } from '../../interfaces/interfaces';

@Component({
  selector: 'app-form-cita-admin',
  templateUrl: './form-cita-admin.component.html',
  styleUrls: ['./form-cita-admin.component.scss']
})
export class FormCitaAdminComponent implements OnInit {
  form!: FormGroup;
  submitted: boolean = false;
  listaMedicos: medico[] = [];

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: ConexionService
  ) {}

  ngOnInit(): void {
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


  }

  onSubmit(): void{
    this.submitted = true;

    // if (this.form.invalid)
  }
}
