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



@NgModule({
  declarations: [
    HomeComponent,
    MasterPageComponent,
    MinhaCelulaComponent,
    HomeTableComponent,
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
