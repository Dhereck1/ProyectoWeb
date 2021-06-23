import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { CanActivateService } from 'src/app/servicios/can-activate.service';
import { StorageService } from 'src/app/servicios/storage.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {

  id = '';

  constructor(private router: Router , private route:ActivatedRoute, private storage:StorageService , private auth:CanActivateService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id') as string;
    this.auth.setRuta(this.id)

    if(!this.storage.getCurrentUser()){
      window.location.href="/home";
    }

  }

  cerrarSession(){
    this.storage.CerrarSession();
  }

  irCitas(){
    this.router.navigate(['/paciente',this.id,'citas']);
  }
  pedirCita(){
    this.router.navigate(['/paciente',this.id,'reserva']);
  }
  irHistoria(){

    this.router.navigate(['/paciente',this.id,'historia']);
  }

}
