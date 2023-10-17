import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { CitasComponent } from './citas/citas.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { RolesComponent } from './roles/roles.component';
import { SuscripcionComponent } from './suscripcion/suscripcion.component';
import { AgendamientoComponent } from './agendamiento/agendamiento.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgramacionComponent } from './programacion/programacion.component';
import { CrearComponent } from './roles/crear/crear.component';
import { EditarComponent } from './roles/editar/editar.component';
import { ListarComponent } from './roles/listar/listar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    UsuariosComponent,
    EmpleadosComponent,
    PaquetesComponent,
    CitasComponent,
    ServiciosComponent,
    RolesComponent,
    SuscripcionComponent,
    AgendamientoComponent,
    DashboardComponent,
    ProgramacionComponent,
    CrearComponent,
    EditarComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
