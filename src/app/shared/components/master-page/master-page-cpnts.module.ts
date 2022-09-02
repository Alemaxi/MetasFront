import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NotificacaoMenuComponent } from './notificacao-menu/notificacao-menu.component';
import { MensagemComponent } from './mensagem/mensagem.component';
import { TreinamentoDialogComponent } from './treinamento-dialog/treinamento-dialog.component';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    NotificacaoMenuComponent,
    MensagemComponent,
    TreinamentoDialogComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    RouterModule
  ],
  exports:[
    NotificacaoMenuComponent,
    MensagemComponent,
    MensagemComponent,
    TreinamentoDialogComponent,
  ]
})
export class MasterPageCpntsModule { }
