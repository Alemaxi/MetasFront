import { Component, OnInit } from '@angular/core';

import { IIndicadorEntity } from '../../shared/Entities/Dashboard/indicador-entity';

const listSimulator: IIndicadorEntity[] = [
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

  itemsList: IIndicadorEntity[] = listSimulator;

  constructor() { }

  ngOnInit(): void {
  }

}
