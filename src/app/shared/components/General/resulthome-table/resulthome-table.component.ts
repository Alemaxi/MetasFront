import { Component, Input, OnInit } from '@angular/core';

import { IResultadoEntity, Semestre } from '../../../Entities/Dashboard/resultado-entity';
import { ITabelaResultado } from '../../../../../liguagens/Linguagem-modulos/home-linguagem-entities'

@Component({
  selector: 'app-resulthome-table',
  templateUrl: './resulthome-table.component.html',
  styleUrls: ['./resulthome-table.component.scss']
})
export class ResulthomeTableComponent implements OnInit {

  @Input() resultados: IResultadoEntity[] | undefined;
  @Input() resultadosLinguagem: ITabelaResultado | undefined;

  constructor() { 
    this.resultados = [
      {titulo:'mocked',semestre1:
      {periodo:'um ai', resultado:10},semestre2:{periodo:'um ai', resultado:10}},
      {titulo:'mocked',semestre1:
      {periodo:'um ai', resultado:10},semestre2:{periodo:'um ai', resultado:10}},
      {titulo:'mocked',semestre1:
      {periodo:'um ai', resultado:10},semestre2:{periodo:'um ai', resultado:10}},
      {titulo:'mocked',semestre1:
      {periodo:'um ai', resultado:10},semestre2:{periodo:'um ai', resultado:10}},
    ];
  }

  GetTotalAno(resultado: IResultadoEntity): number{
    return resultado.semestre1.resultado + resultado.semestre2.resultado;
  }

  GetTotalProporcional(): number{
    let total = 0;

    this.resultados?.forEach(x => {
      total += x.semestre1.resultado;
      total += x.semestre2.resultado;
    })

    return total;
  }

  ngOnInit(): void {
  }

}
