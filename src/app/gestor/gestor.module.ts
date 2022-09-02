import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MasterPageComponent } from './master-page/master-page.component';

import { LayoutsModule } from '../shared/layouts/layouts.module';
import { GestorRoutingModule } from './gestor-routing.module';
import { GeneralCpntsModule } from '../shared/components/General/general-cpnts.module';

import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    DashboardComponent,
    MasterPageComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    GestorRoutingModule,
    RouterModule,
    GeneralCpntsModule,
    MatIconModule
  ]
})
export class GestorModule { }
