import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {UsuarioModule} from "./usuario/usuario.module";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared/shared.module";


@NgModule({
  declarations: [
    AppComponent


  ],
  imports: [
    BrowserModule,
    UsuarioModule,
    HttpClientModule,
    SharedModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
