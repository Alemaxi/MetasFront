import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MasterPageComponent } from './master-page/master-page.component';
import { HomeComponent } from './home/home.component';
import { MinhaCelulaComponent } from './minha-celula/minha-celula.component';
import { OrientacoesComponent } from './orientacoes/orientacoes.component';
import { HistoricoSolicitacoesComponent } from './historico-solicitacoes/historico-solicitacoes.component';
import { SimuladorComponent } from './simulador/simulador.component';
import { PlanejamentoComponent } from './planejamento/planejamento.component';
import { FormulariosComponent } from './formularios/formularios.component';


const mainRoutes: Routes = [
  {path:'home',component: HomeComponent, data:{hje:"hje"}},
  {path:'minhacelula',component:MinhaCelulaComponent, data:{hje:"hje2"}},
  {path:'orientacoes',component:OrientacoesComponent},
  {path:'historico',component: HistoricoSolicitacoesComponent},
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
