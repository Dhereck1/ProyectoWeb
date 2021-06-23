import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { paciente } from 'src/app/interfaces/interfaces';
import { ConexionService } from 'src/app/servicios/conexion.service';
import { PacienteService } from 'src/app/servicios/paciente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-historia',
  templateUrl: './editar-historia.component.html',
  styleUrls: ['./editar-historia.component.scss']
})
export class EditarHistoriaComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: ConexionService,
    private servicePaciente: PacienteService
  ) { }
  form!: FormGroup;
  id=""
  paciente:paciente;
  
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id') as string;

    this.form = this.fb.group({
      historia: ['', [Validators.required]]
    });

    this.servicePaciente.getPaciente(Number(this.id)).subscribe(paciente=>{
      this.form.get("historia").setValue(paciente[0].historiaClinica);
      this.paciente=paciente[0]
    })
  }

  actHist(){
    this.paciente.historiaClinica=this.form.get("historia").value
    this.servicePaciente.actHistoria(this.paciente).subscribe(res=>{
      console.log(res);
      Swal.fire({
        title: "Se ha actualizado la historia clinica",
        icon:"success"
      })
    })
    this.router.navigate(["admin","reporte"])

  };

}
