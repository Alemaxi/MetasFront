import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateAdapter } from '@angular/material/core'

import { INotificacaoEntity } from '../../../../main/Shared/Entities/Master-Page/notificacao-entity'
import { MasterPageService } from '../../../../services/master-page/master-page.service';
import { TestingServiceService } from '../../../../services/testing-service.service';
import { INotificacoes } from '../../../../../liguagens/Linguagem-modulos/master-page-linguagem-entities';

@Component({
  selector: 'app-notificacao-menu',
  templateUrl: './notificacao-menu.component.html',
  styleUrls: ['./notificacao-menu.component.scss']
})
export class NotificacaoMenuComponent implements OnInit {

  @Input() open: boolean = false;
  @Input() notificacoesLinguagem: INotificacoes | undefined;

  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  item: INotificacaoEntity = {
    dataPostagem: new Date(),
    prazo: new Date(),
    texto: 'qualquer',
    titulo: 'título'
  };

  mensagens: INotificacaoEntity[] = []

  constructor(
    protected notificacoes: MasterPageService,
    protected testing: TestingServiceService ) { }

  ngOnInit(): void {
    this.notificacoes.GetNotificacoes('').subscribe(x => {
      this.mensagens = x;
    })
  }

  ChangeState():void{
    this.close.emit();

  }

  LimparNotificacoes():void {
    this.notificacoes.NotificacoesLidas().subscribe(
      x => {
        x? console.log('ok'):console.log('ops!');
      }
    );
  }

}
