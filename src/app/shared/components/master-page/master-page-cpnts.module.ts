import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificacaoMenuComponent } from './notificacao-menu/notificacao-menu.component';
import { MensagemComponent } from './mensagem/mensagem.component';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    NotificacaoMenuComponent,
    MensagemComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    NotificacaoMenuComponent,
    MensagemComponent,
    MensagemComponent
  ]
})
export class MasterPageCpntsModule { }
