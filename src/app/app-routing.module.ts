import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

import { HomeComponent } from '../app/components/home/home.component';
import { PacienteComponent } from './components/paciente/paciente.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full' },
  {path:'admin',component:AdminComponent},
  {path:'paciente/:id',component:PacienteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
