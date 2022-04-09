import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BusquedaComponent} from "./busqueda/busqueda.component";
import {ResultadoComponent} from "./resultado/resultado.component";
import {UsuariosComponent} from "./usuarios/usuarios.component";



@NgModule({
  declarations: [
    BusquedaComponent,
    ResultadoComponent,
    UsuariosComponent

  ],
  exports: [
    UsuariosComponent
  ],


  imports: [
    CommonModule
  ]
})
export class UsuarioModule { }
