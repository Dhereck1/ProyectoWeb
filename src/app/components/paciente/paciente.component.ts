import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {

  id = ''

  constructor(private router: Router , private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id') as string;
  }

  irCitas(){
    this.router.navigate(['/paciente',this.id,'citas']);
  }
  pedirCita(){
    this.router.navigate(['/paciente',this.id,'pedir']);
  }
  irHistoria(){

    this.router.navigate(['/paciente',this.id,'historia']);
  }

}
