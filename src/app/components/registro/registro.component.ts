import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { paciente } from '../../interfaces/interfaces';
import { ConexionService } from '../../servicios/conexion.service';
import { LugaresService } from '../../servicios/lugares.service';
import { Regiones } from '../../interfaces/regiones';
import { PacienteService } from '../../servicios/paciente.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  form!: FormGroup;
  submitted: boolean = false;
  p!: paciente;
  listaRegiones: Regiones[] = [];
  listaComunas: Regiones[] = [];

  constructor(
    private fb:FormBuilder,
    private LugaresService: LugaresService,
    private paciente_service: PacienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
      this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      rut: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      region: ['', [Validators.required]],
      comuna: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required]]
    });

    this.getRegion();
  }

  
  get f () {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }else{
      const paciente: paciente = {
        nombre: this.form.controls.nombre.value,
        apellido: this.form.controls.apellido.value,
        rut: this.form.controls.rut.value,
        direccion: this.form.controls.direccion.value,
        region: this.form.controls.region.value,
        comuna: this.form.controls.comuna.value,
        correo: this.form.controls.correo.value,
        contrasena: this.form.controls.contrasena.value,
        historiaClinica: "no hay historia clinica aun",
        rol: 2,
        idUsuario: 0, //Esto no se como definirlo porque se supone q va cambiando provisoriamente asi
      };

      this.paciente_service.addPaciente(paciente);
      // this.form.reset();
      this.router.navigate(['']) //definir que se va a vista paciente

    }
  }

  getRegion(){
    this.LugaresService.getRegion().subscribe(res =>{
      this.listaRegiones = res;
    })
  }

  getComuna(){
    this.LugaresService.getComuna(this.form.controls.region.value).subscribe(res =>{
      this.listaComunas = res;
    },error =>{
      
    })
  }
}
