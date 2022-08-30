import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCheckboxModule } from '@angular/material/checkbox';

import { RepresentanteIndicadoresTableComponent } from './representante-indicadores-table/representante-indicadores-table.component';
import { RepresentanteIndicadoresRowTableComponent } from './representante-indicadores-row-table/representante-indicadores-row-table.component';



@NgModule({
  declarations: [
    RepresentanteIndicadoresTableComponent,
    RepresentanteIndicadoresRowTableComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
  ],
  exports:[
    RepresentanteIndicadoresTableComponent
  ]
})
export class RepresentanteCpntsModule { }
