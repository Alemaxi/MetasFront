import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { DashboardFormularioComponent } from './dashboard-formulario/dashboard-formulario.component';
import { MasterPageComponent } from './master-page/master-page.component';


const routes: Route[] = [
  {
    path:'',
    component: MasterPageComponent,
    children: [
      {path:'',redirectTo:'dashboard',pathMatch:'full'},
      {path:'dashboard',component:DashboardFormularioComponent},
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class RepresentanteRoutingModule { }
