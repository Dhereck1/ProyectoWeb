import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Session } from '../../session';
import { LoginService } from 'src/app/servicios/login.service';
import { StorageService } from 'src/app/servicios/storage.service';
import { swalProviderToken } from '@sweetalert2/ngx-sweetalert2/lib/di';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formulario:FormGroup;
  mensaje: string="";
  token:string;
  datos:Session;

  constructor(private form:FormBuilder, private servicio:LoginService, private router: Router, private storage:StorageService) { 
    this.formulario=this.form.group({
      rut:['', [Validators.required,Validators.pattern("[0-9]{1,10}\-[K|k|0-9]")]],
      password:['', Validators.required]
    });
  }

  ngOnInit(): void {

    /*
    let datos:any = JSON.parse(localStorage.getItem('sitiomovil') || '{}');
    
    
    if(datos && datos.id){
      if(datos.rol == 1){
        window.location.href = "/admin";
      }else if(datos.rol ==2){
        window.location.href = `/paciente/${datos.id}`;
      }
    }

    */

    if(this.storage.getCurrentUser()){
      let id = this.storage.getCurrentUser();
      if(Number(id)==1){
      window.location.href=`/admin`;
      }else{
        window.location.href=`/paciente/${id}`;
      }
    }
  }

  ValidarLogin(){

    

    this.servicio.Token().subscribe(token=>{
      this.token=token;
      this.servicio.validarLogin(this.formulario.get("rut")?.value , this.formulario.get("password")?.value, this.token).subscribe(datos=>{
        console.log(datos);
        if(datos.length == 0){
          //this.mensaje="Login no existe";
          Swal.fire({
            title: "Error de inicio",
            text:"Usuario y/o contraseña incorrecta",
            icon:"error"
          })
        }else{
          datos={token:datos[0].idUsuario, usuario:datos[0].rut};
          this.storage.CrearSession(datos);
          window.location.href="/home";
        }
      });
    }); 

    
    
  }

}
