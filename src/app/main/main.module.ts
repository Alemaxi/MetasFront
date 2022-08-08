import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MasterPageComponent } from './master-page/master-page.component';
import { MinhaCelulaComponent } from './minha-celula/minha-celula.component';
import { HomeTableComponent } from './Shared/Component/home-table/home-table.component';
import { OrientacoesComponent } from './orientacoes/orientacoes.component';
import { MetasStepperComponent } from './Shared/Component/metas-stepper/metas-stepper.component';
import { HistoricoAlteracoesComponent } from './historico-alteracoes/historico-alteracoes.component';
import { StatusMetasComponent } from './status-metas/status-metas.component';
import { SimuladorComponent } from './simulador/simulador.component';
import { PlanejamentoComponent } from './planejamento/planejamento.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { NotificacoesComponent } from './status-metas/notificacoes/notificacoes.component';
import { CronogramaComponent } from './status-metas/cronograma/cronograma.component';
import { SolicitacoesComponent } from './status-metas/solicitacoes/solicitacoes.component';
import { SobrestatusmetasComponent } from './status-metas/sobrestatusmetas/sobrestatusmetas.component';


@NgModule({
  declarations: [
    HomeComponent,
    MasterPageComponent,
    MinhaCelulaComponent,
    HomeTableComponent,
    OrientacoesComponent,
    MetasStepperComponent,
    HistoricoAlteracoesComponent,
    StatusMetasComponent,
    SimuladorComponent,
    PlanejamentoComponent,
    FormulariosComponent,
    NotificacoesComponent,
    CronogramaComponent,
    SolicitacoesComponent,
    SobrestatusmetasComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatSidenavModule
  ]
})
export class MainModule { }
