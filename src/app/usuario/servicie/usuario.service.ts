import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Item, SearchUsuariosResponse} from "../interface/usuario.interface";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];

  }

  public resultados: Item[] = []
  private _historial: string[] = []
  private  servicioUrl: string =  'https://developer.github.com/v3/search/'


  get historial(){
    return [...this._historial];
  }

  buscarUsuarios(query: string= '') {

    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,9);
      console.log(this._historial);
      localStorage.setItem('historial', JSON.stringify(this._historial) )
    }

    const params = new HttpParams()

      .set('limit', '10')

      .set('q', query);


    console.log(params.toString());

    this.http.get<SearchUsuariosResponse>(`${ this.servicioUrl }/search`, {params} )
      .subscribe((resp)=> {
        console.log(resp.items);
        this.resultados = resp.items;
        localStorage.setItem('resultados', JSON.stringify(this.resultados))
      })




  }

}
