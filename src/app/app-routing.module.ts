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



const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'paciente/:id',component:PacienteComponent},
  {path: 'registro', component: RegistroComponent}, //espeificar donde va despues
  {path:'paciente/:id/citas',component:CitasComponent},
  {path: 'listar-citas-admin', component: ListarCitasAdminComponent},
  {path: 'reserva', component:PedirCitaComponent},
  {path:'paciente/:id/historia',component:HistoriaClinicaComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
