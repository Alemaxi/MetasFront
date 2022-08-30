import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"colaborador",
    loadChildren: () => import('./colaborador/colaborador.module')
      .then(m => m.ColaboradorModule),
  },
  {
    path:"representante",
    loadChildren: () => import('./representante/representante.module')
      .then(m => m.RepresentanteModule),
  },
  {
    path: "login", 
    component: LoginComponent,
    data: {teste:"teste"}
  },
  {path: "main", loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  {path: '', redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
