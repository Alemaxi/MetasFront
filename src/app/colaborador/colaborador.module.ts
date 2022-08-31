import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';

import { LayoutsModule } from '../shared/layouts/layouts.module';
import { ColaboradorComponentsModule } from '../shared/components/colaborador/colaborador-cpnts.module';
import { ColaboradorRouterModule } from './colaborador-router.module';
import { GeneralCpntsModule } from '../shared/components/General/general-cpnts.module';

import { MasterPageComponent } from './master-page/master-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardFormularioComponent } from './dashboard-formulario/dashboard-formulario.component';

@NgModule({
  declarations: [
    MasterPageComponent,
    DashboardFormularioComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    ColaboradorRouterModule,
    MatDialogModule,
    MatBadgeModule,
    ColaboradorComponentsModule,
    GeneralCpntsModule,
    LayoutsModule
  ]
})
export class ColaboradorModule { }
