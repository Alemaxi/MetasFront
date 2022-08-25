import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';

import { MasterPageComponent } from './master-page/master-page.component';
import { MinhaCelulaComponent } from './minha-celula/minha-celula.component';
import { HomeTableComponent } from './Shared/Component/home-table/home-table.component';
import { OrientacoesComponent } from './orientacoes/orientacoes.component';
import { MetasStepperComponent } from './home/metas-stepper/metas-stepper.component';
import { HistoricoSolicitacoesComponent } from './historico-solicitacoes/historico-solicitacoes.component';
import { SimuladorComponent } from './simulador/simulador.component';
import { PlanejamentoComponent } from './planejamento/planejamento.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { TreinamentoDialogComponent } from './treinamento-dialog/treinamento-dialog.component';
import { ResulthomeTableComponent } from './Shared/Component/resulthome-table/resulthome-table.component';
import { FaltahomeTableComponent } from './Shared/Component/faltahome-table/faltahome-table.component';
import { NotificacaoMenuComponent } from './master-page/notificacao-menu/notificacao-menu.component';
import { MensagemComponent } from './master-page/notificacao-menu/mensagem/mensagem.component';


@NgModule({
  declarations: [
    HomeComponent,
    MasterPageComponent,
    MinhaCelulaComponent,
    HomeTableComponent,
    OrientacoesComponent,
    MetasStepperComponent,
    HistoricoSolicitacoesComponent,
    SimuladorComponent,
    PlanejamentoComponent,
    FormulariosComponent,
    TreinamentoDialogComponent,
    ResulthomeTableComponent,
    FaltahomeTableComponent,
    NotificacaoMenuComponent,
    MensagemComponent,
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
  ]
})
export class MainModule { }
