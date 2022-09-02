import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';

import { MasterPageComponent } from './master-page/master-page.component';
import { MinhaCelulaComponent } from './minha-celula/minha-celula.component';
import { OrientacoesComponent } from './orientacoes/orientacoes.component';
import { HistoricoSolicitacoesComponent } from './historico-solicitacoes/historico-solicitacoes.component';
import { SimuladorComponent } from './simulador/simulador.component';
import { PlanejamentoComponent } from './planejamento/planejamento.component';
import { FormulariosComponent } from './formularios/formularios.component';


import { LayoutsModule } from '../shared/layouts/layouts.module';
import { ColaboradorComponentsModule } from '../shared/components/colaborador/colaborador-cpnts.module';
import { GeneralCpntsModule } from '../shared/components/General/general-cpnts.module';
import { MasterPageCpntsModule } from '../shared/components/master-page/master-page-cpnts.module';

@NgModule({
  declarations: [
    HomeComponent,
    MasterPageComponent,
    MinhaCelulaComponent,
    OrientacoesComponent,
    HistoricoSolicitacoesComponent,
    SimuladorComponent,
    PlanejamentoComponent,
    FormulariosComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatSidenavModule,
    MatDialogModule,
    MatBadgeModule,
    ColaboradorComponentsModule,
    GeneralCpntsModule,
    LayoutsModule,
    MasterPageCpntsModule,  
  ]
})
export class MainModule { }
