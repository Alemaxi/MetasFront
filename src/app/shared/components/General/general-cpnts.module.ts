import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaltahomeTableComponent } from './faltahome-table/faltahome-table.component';
import { MetasStepperComponent } from './metas-stepper/Metas-stepper.component';
import { NavegacaoMesesComponent } from './navegacao-meses/navegacao-meses.component';
import { ResulthomeTableComponent } from './resulthome-table/resulthome-table.component';
import { HomeTableComponent } from './home-table/home-table.component';


@NgModule({
  declarations: [
    FaltahomeTableComponent,
    NavegacaoMesesComponent,
    MetasStepperComponent,
    ResulthomeTableComponent,
    HomeTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FaltahomeTableComponent,
    NavegacaoMesesComponent,
    MetasStepperComponent,
    ResulthomeTableComponent,
    HomeTableComponent
  ]
})
export class GeneralCpntsModule { }
