import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MasterPageComponent } from './master-page/master-page.component';
import { HomeComponent } from './home/home.component';
import { MinhaCelulaComponent } from './minha-celula/minha-celula.component';

const mainRoutes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'minhacelula',component:MinhaCelulaComponent},
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
