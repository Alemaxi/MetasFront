import { Component, Input, OnInit } from '@angular/core';

import { ResultadoEntity, Semestre } from '../../../Entities/Dashboard/resultado-entity';
import { ITabelaResultado } from '../../../../../liguagens/Linguagem-modulos/home-linguagem-entities'

@Component({
  selector: 'app-resulthome-table',
  templateUrl: './resulthome-table.component.html',
  styleUrls: ['./resulthome-table.component.scss']
})
export class ResulthomeTableComponent implements OnInit {

  @Input() resultados: ResultadoEntity[] | undefined;
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

  GetTotalAno(resultado: ResultadoEntity): number | undefined{
    let semestre1 = resultado.semestre1?.resultado as number;
    let semestre2 = resultado.semestre2?.resultado as number;

    return semestre1 + semestre2;
  }

  GetTotalProporcional(): number{
    let total = 0;

    this.resultados?.forEach(x => {
      total += x?.semestre1?.resultado as number;
      total += x?.semestre2?.resultado as number;
    })

    return total;
  }

  ngOnInit(): void {
  }

}
