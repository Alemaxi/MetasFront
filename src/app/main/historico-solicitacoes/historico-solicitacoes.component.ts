import { Component, OnInit } from '@angular/core';

import { IPerfilDadosHistorico } from '../Shared/Entities/Historico-solicitacoes/perfil-dados-historico';

@Component({
  selector: 'app-historico-solicatacoes',
  templateUrl: './historico-solicitacoes.component.html',
  styleUrls: ['./historico-solicitacoes.component.scss']
})
export class HistoricoSolicitacoesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  test() {
    console.log("oi");
  }

  historicoDados: IPerfilDadosHistorico[] = [
    {abertura:new Date,conclusao: new Date, descricao: 'desc', origem:'orig',
    responsavel:'resp',solicitacao:'solic',status:'stat'},
    {abertura:new Date,conclusao: new Date, descricao: 'desc', origem:'orig',
    responsavel:'resp',solicitacao:'solic',status:'stat'},
    {abertura:new Date,conclusao: new Date, descricao: 'desc', origem:'orig',
    responsavel:'resp',solicitacao:'solic',status:'stat'},
  ] 
}
