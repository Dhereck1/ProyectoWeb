import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/servicios/storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router, private storage:StorageService) { }

  ngOnInit(): void {
    
    
    if(!this.storage.getCurrentUser()){
      window.location.href="/home";
    }
  }

  aReporte(){
    this.router.navigateByUrl('/admin/reporte') //a reporte de usuarios
  }
  aCitas(){
    this.router.navigateByUrl('admin/listar-citas-admin')
  }

}
