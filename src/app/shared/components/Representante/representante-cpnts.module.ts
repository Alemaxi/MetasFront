import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

import { RepresentanteIndicadoresTableComponent } from './representante-indicadores-table/representante-indicadores-table.component';
import { SelecionarIndicadoresTableComponent } from './selecionar-indicadores-table/selecionar-indicadores-table.component';



@NgModule({
  declarations: [
    RepresentanteIndicadoresTableComponent,
    SelecionarIndicadoresTableComponent,
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatIconModule
  ],
  exports:[
    RepresentanteIndicadoresTableComponent,
    SelecionarIndicadoresTableComponent,
  ]
})
export class RepresentanteCpntsModule { }
