import { Component, OnInit } from '@angular/core';

import { simuladorEntity } from '../../Entities/simulador-entity';

export const listSimulator: simuladorEntity[] = [
  {
    indicador: 'nomeIndicador',
    unidadeMedida: '%',
    frequencia:10,
    desafio:5,
    minimo:3,
    planejado:4,
    resultado:5,
    simulacao:4.5,
    peso:5,
  },
  {
    indicador: 'nomeIndicador',
    unidadeMedida: '%',
    frequencia:10,
    desafio:5,
    minimo:3,
    planejado:4,
    resultado:5,
    simulacao:4.5,
    peso:5,
  },
  {
    indicador: 'nomeIndicador',
    unidadeMedida: '%',
    frequencia:10,
    desafio:5,
    minimo:3,
    planejado:4,
    resultado:5,
    simulacao:4.5,
    peso:5,
  }
]

@Component({
  selector: 'app-home-table',
  templateUrl: './home-table.component.html',
  styleUrls: ['./home-table.component.scss']
})
export class HomeTableComponent implements OnInit {

  itemList: simuladorEntity[] = [];

  constructor() { 
    this.itemList = listSimulator;
  }

  ngOnInit(): void {
  }

  GetFrequenciaTotal():number{
    let result: number = 0;

    this.itemList.forEach( (x:simuladorEntity) =>{
      result += x.frequencia;
    })

    return result;
  }

}
