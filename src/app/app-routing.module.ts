import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

import { HomeComponent } from '../app/components/home/home.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CitasComponent } from './components/citas/citas.component';

import { ListarCitasAdminComponent } from './components/listar-citas-admin/listar-citas-admin.component';
import { PedirCitaComponent } from './components/pedir-cita/pedir-cita.component';
import { HistoriaClinicaComponent } from './components/paciente/historia-clinica/historia-clinica.component';

import { FormCitaAdminComponent } from './components/form-cita-admin/form-cita-admin.component';

import { ReporteUsuariosComponent } from './components/admin/reporte-usuarios/reporte-usuarios.component';
import { EditarHistoriaComponent } from './components/paciente/historia-clinica/editar-historia/editar-historia.component';
import { CanActivateService } from './servicios/can-activate.service';




const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'paciente/:id',component:PacienteComponent,canActivate: [CanActivateService]},
  {path: 'registro', component: RegistroComponent}, //espeificar donde va despues
  {path:'paciente/:id/citas',component:CitasComponent, canActivate: [CanActivateService]},
  {path: 'admin/listar-citas-admin', component: ListarCitasAdminComponent},
  {path: 'admin/reporte', component: ReporteUsuariosComponent},
  {path: 'paciente/:id/reserva', component:PedirCitaComponent,canActivate: [CanActivateService]},
  {path:'paciente/:id/historia',component:HistoriaClinicaComponent,canActivate: [CanActivateService],data: { viewOption: 'paciente' }},
  {path:'admin/:id/historia',component:HistoriaClinicaComponent,data: { viewOption: 'admin' }},
  {path: 'admin/formCitaAdmi/:id', component: FormCitaAdminComponent},
  {path: 'admin/:id/historia/editar', component: EditarHistoriaComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
