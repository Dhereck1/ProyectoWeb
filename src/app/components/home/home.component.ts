import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hide=true;
  formulario:FormGroup;
  mensaje: string="";

  constructor(private form:FormBuilder, private servicio:LoginService, private router: Router) { 
    this.formulario=this.form.group({
      rut:['', Validators.required],
      password:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ValidarLogin(){

    this.servicio.validarLogin(this.formulario.get("rut")?.value , this.formulario.get("password")?.value).subscribe(datos=>{

      if(datos.length == 0){
        this.mensaje="Login no existe";
      }else{
        console.log(datos);
        this.router.navigate(['/paciente',datos[0].idUsuario]);
      }
    });
    
  }

}
