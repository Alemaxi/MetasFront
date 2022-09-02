import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Route, RouterModule } from '@angular/router';

import { MasterPageComponent } from './master-page/master-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Route[] =[
  {
    path:'',
    component:MasterPageComponent,
    children:[
      {path:'', redirectTo:'dashboard',pathMatch:'full'},
      {path:'dashboard',component:DashboardComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GestorRoutingModule { }
