import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MasterPageComponent } from './master-page/master-page.component';
import { HomeComponent } from './home/home.component';
import { MinhaCelulaComponent } from './minha-celula/minha-celula.component';
import { OrientacoesComponent } from './orientacoes/orientacoes.component';
import { HistoricoAlteracoesComponent } from './historico-alteracoes/historico-alteracoes.component';
import { StatusMetasComponent } from './status-metas/status-metas.component';
import { SimuladorComponent } from './simulador/simulador.component';
import { PlanejamentoComponent } from './planejamento/planejamento.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { NotificacoesComponent } from './status-metas/notificacoes/notificacoes.component';
import { CronogramaComponent } from './status-metas/cronograma/cronograma.component';
import { SolicitacoesComponent } from './status-metas/solicitacoes/solicitacoes.component';
import { SobrestatusmetasComponent } from './status-metas/sobrestatusmetas/sobrestatusmetas.component';

const statusRoutes: Routes =[
  {path:'notificacoes', component: NotificacoesComponent},
  {path:'cronograma', component: CronogramaComponent},
  {path:'solicitacoes', component: SolicitacoesComponent},
  {path:'sobrestatusmetas', component: SobrestatusmetasComponent},
  {path:'',redirectTo:'notificacoes',pathMatch:'full'}
]

const mainRoutes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'minhacelula',component:MinhaCelulaComponent},
  {path:'orientacoes',component:OrientacoesComponent},
  {path:'historico',component: HistoricoAlteracoesComponent},
  {
    path:'status',
    component: StatusMetasComponent,
    children: statusRoutes  
  },
  {path:'simulador',component: SimuladorComponent},
  {path:'planejamento',component: PlanejamentoComponent},
  {path:'formularios',component: FormulariosComponent},
  {path:'', redirectTo:'home',pathMatch:'full'}
]

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: mainRoutes,
  }
]




@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
