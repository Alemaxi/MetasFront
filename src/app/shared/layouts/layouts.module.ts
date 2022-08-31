import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

import { MasterPageLayoutComponent } from './master-page-layout/master-page-layout.component';
import { GeneralPageComponent } from './general-page/general-page.component';
import { DashboardFormularioLayoutComponent } from './dashboard-formulario-layout/dashboard-formulario-layout.component';
import { MasterPageCpntsModule } from '../components/master-page/master-page-cpnts.module';
import { ColaboradorComponentsModule } from '../components/colaborador/colaborador-cpnts.module';
import { GeneralCpntsModule } from '../components/General/general-cpnts.module';


@NgModule({
  declarations: [
    MasterPageLayoutComponent,
    GeneralPageComponent,
    DashboardFormularioLayoutComponent,
  ],
  exports:[
    MasterPageLayoutComponent,
    DashboardFormularioLayoutComponent,
    MasterPageCpntsModule,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule,
    MasterPageCpntsModule,
    MatBadgeModule,
    ColaboradorComponentsModule,
    GeneralCpntsModule
  ],
})
export class LayoutsModule { }
