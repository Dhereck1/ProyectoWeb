import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

import { HomeComponent } from '../app/components/home/home.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { CitasComponent } from './components/citas/citas.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'paciente/:id',component:PacienteComponent},
  {path:'paciente/:id/citas',component:CitasComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
