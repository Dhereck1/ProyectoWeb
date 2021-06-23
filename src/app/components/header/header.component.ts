import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/servicios/storage.service';
import { ConexionService } from '../../servicios/conexion.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private servicio:ConexionService, private storage:StorageService, private router:Router) { }


  ngOnInit(): void {
    
  }

  boton(){
    this.servicio.getAllCitas().subscribe(citas =>{
      console.log(citas);
    });
  }

  cerrarSesion(){
    this.storage.CerrarSession();
  }

  goHome(){
    this.router.navigate(['']);
  }

}