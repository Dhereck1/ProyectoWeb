import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/servicios/storage.service';
import { ConexionService } from '../../servicios/conexion.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private servicio:ConexionService, private storage:StorageService) { }


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

}