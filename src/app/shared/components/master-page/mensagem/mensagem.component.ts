import { Component, Input, OnInit } from '@angular/core';

import { INotificacaoEntity } from '../../../../main/Shared/Entities/Master-Page/notificacao-entity';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss']
})
export class MensagemComponent implements OnInit {

  @Input() mensagem: INotificacaoEntity | undefined;
  @Input() mostraMaisText: string | undefined;

  mostrarMais: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  MostrarMaisMudarEstado():void {
    this.mostrarMais = !this.mostrarMais;
  }

}
