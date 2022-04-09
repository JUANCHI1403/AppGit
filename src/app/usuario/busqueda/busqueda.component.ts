import {Component, ElementRef, ViewChild,} from '@angular/core';
import {UsuarioService} from "../servicie/usuario.service";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent  {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private usuarioService: UsuarioService) {

  }

  buscar(){
    const valor  =  this.txtBuscar.nativeElement.value;
    if (valor.trim().length===0){
      return alert('favor ingresar datos')
    };
    this.usuarioService.buscarUsuarios(valor);

    this.txtBuscar.nativeElement.value = '';
  }

}
