import { Component, OnInit } from '@angular/core';

import { IndicadorEntity } from '../../shared/Entities/Dashboard/indicador-entity';

const listSimulator: IndicadorEntity[] = [
  {
    indicador: 'nomeIndicador',
    unidadeMedida: '%',
    frequencia:'trimestral',
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
    frequencia:'trimestral',
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
    frequencia:'trimestral',
    desafio:5,
    minimo:3,
    planejado:4,
    resultado:5,
    simulacao:4.5,
    peso:5,
  }
]

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.scss']
})
export class SimuladorComponent implements OnInit {

  itemsList: IndicadorEntity[] = listSimulator;

  constructor() { }

  ngOnInit(): void {
  }

}
