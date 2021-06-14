import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { AdminComponent } from './components/admin/admin.component'
import { MaterialModule } from './material/material.module';
import { RegistroComponent } from './components/registro/registro.component';
import { CitasComponent } from './components/citas/citas.component';

import { ListarCitasAdminComponent } from './components/listar-citas-admin/listar-citas-admin.component';
import { PedirCitaComponent } from './components/pedir-cita/pedir-cita.component';

import { HistoriaClinicaComponent } from './components/paciente/historia-clinica/historia-clinica.component';
import { ReporteUsuariosComponent } from './components/admin/reporte-usuarios/reporte-usuarios.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PacienteComponent,
    AdminComponent,
    RegistroComponent,
    CitasComponent,

    ListarCitasAdminComponent,
    PedirCitaComponent,
    HistoriaClinicaComponent,
    ReporteUsuariosComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
