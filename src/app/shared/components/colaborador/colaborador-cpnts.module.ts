import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetasStepperComponent } from '../General/metas-stepper/Metas-stepper.component';
import { NavegacaoMesesComponent } from '../General/navegacao-meses/navegacao-meses.component';
import { HomeTableComponent } from './home-table/home-table.component';
import { ResulthomeTableComponent } from '../General/resulthome-table/resulthome-table.component';

@NgModule({
  declarations: [
    HomeTableComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeTableComponent,
  ]
})
export class ColaboradorComponentsModule { }
