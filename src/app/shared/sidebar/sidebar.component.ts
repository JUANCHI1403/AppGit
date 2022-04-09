import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../usuario/servicie/usuario.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  get historial(){
    return this.usuarioService.historial
  }

  constructor(private usuarioService: UsuarioService ) { }

  buscar(user: string){
    this.usuarioService.buscarUsuarios(user);
    console.log(user);
  }

  ngOnInit(): void {
  }

}
