import { Component, } from '@angular/core';
import {UsuarioService} from "../servicie/usuario.service";

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {

  get resultados(){
    return this.usuarioService.resultados;
  }

  constructor(private usuarioService: UsuarioService) {

  }

}
