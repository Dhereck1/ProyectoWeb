import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

import { HomeComponent } from '../app/components/home/home.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full' },
  {path:'admin',component:AdminComponent},
  {path:'paciente/:id',component:PacienteComponent},
  {path: 'registro', component: RegistroComponent} //espeificar donde va despues

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
