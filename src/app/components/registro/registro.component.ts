import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { paciente } from '../../interfaces/interfaces';
import { ConexionService } from '../../servicios/conexion.service';
import { LugaresService } from '../../servicios/lugares.service';
import { Regiones } from '../../interfaces/regiones';
import { PacienteService } from '../../servicios/paciente.service';
import Swal from 'sweetalert2';

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
  mensaje:string="";
  token:string;

  constructor(
    private fb:FormBuilder,
    private LugaresService: LugaresService,
    private paciente_service: PacienteService,
    private router: Router
  ) { }
  siteKey:string="6LfljU4bAAAAAHvsisIxBLpeCD6b5IkP_MZ0bDII";

  ngOnInit(): void {
      this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      rut: ['', [Validators.required,Validators.pattern("[0-9]{1,10}\-[K|k|0-9]")]],
      direccion: ['', [Validators.required]],
      region: ['', [Validators.required]],
      comuna: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required]],
      recaptcha: ['', Validators.required]
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

      this.paciente_service.Token().subscribe(token=>{
        this.token=token;
        this.paciente_service.addPaciente(paciente, this.token).subscribe(anadido=>{ //"Añadido" es el paciente que fue añadido a la BD
          
          if(anadido != 'usuario creado'){
            if(anadido == 'rut ocupado'){
              Swal.fire({
                title: "Error al crea usuario",
                text:"Rut ya existente",
                icon:"error"
              })
            }else{
              Swal.fire({
                title: "Error al crea usuario",
                text:"Email ya existente",
                icon:"error"
              })
            }
          }else{
            console.log(`${anadido} Fue añadadido`);
            this.router.navigate(['']);
          }        
        });
      }); 

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
    })
  }
}
