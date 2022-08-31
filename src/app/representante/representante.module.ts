import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

import { DashboardFormularioComponent } from './dashboard-formulario/dashboard-formulario.component';
import { RepresentanteRoutingModule } from './representante-routing.module';
import { LayoutsModule } from '../shared/layouts/layouts.module';
import { MasterPageComponent } from './master-page/master-page.component';
import { RepresentanteCpntsModule } from '../shared/components/Representante/representante-cpnts.module';
import { GeneralCpntsModule } from '../shared/components/General/general-cpnts.module';


@NgModule({
  declarations: [
    DashboardFormularioComponent,
    MasterPageComponent
  ],
  imports: [
    CommonModule,
    RepresentanteRoutingModule,
    LayoutsModule,
    RouterModule,
    MatIconModule,
    RepresentanteCpntsModule,
    GeneralCpntsModule
  ]
})
export class RepresentanteModule { }
