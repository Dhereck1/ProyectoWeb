import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { paciente } from '../../interfaces/interfaces';
import { ConexionService } from '../../servicios/conexion.service';
import { LugaresService } from '../../servicios/lugares.service';
import { Regiones } from '../../interfaces/regiones';

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
