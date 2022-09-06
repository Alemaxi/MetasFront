import { Component, OnInit, Input } from '@angular/core';

import { IndicadorRegistro } from '../../../../shared/Entities/Dashboard/representante/Indicador-registrado';

@Component({
  selector: 'app-selecionar-indicadores-table',
  templateUrl: './selecionar-indicadores-table.component.html',
  styleUrls: ['./selecionar-indicadores-table.component.scss']
})
export class SelecionarIndicadoresTableComponent implements OnInit {

  indicador1: IndicadorRegistro = new IndicadorRegistro();
  indicador2: IndicadorRegistro = new IndicadorRegistro();
  indicador3: IndicadorRegistro = new IndicadorRegistro();

  constructor() { 
    this.indicador1.descricao = 'desc1';
    this.indicador1.frequencia = 'freq1';
    this.indicador1.id = 'id1';
    this.indicador1.nomeIndicador = 'nome1';
    this.indicador1.processo = 'proc1';
    this.indicador1.unidadeMedida = 'un1';

    this.indicador2.descricao = 'desc2';
    this.indicador2.frequencia = 'freq2';
    this.indicador2.id = 'id2';
    this.indicador2.nomeIndicador = 'nome2';
    this.indicador2.processo = 'proc2';
    this.indicador2.unidadeMedida = 'un2';
    
    this.indicador3.descricao = 'desc3';
    this.indicador3.frequencia = 'freq3';
    this.indicador3.id = 'id3';
    this.indicador3.nomeIndicador = 'nome3';
    this.indicador3.processo = 'proc3';
    this.indicador3.unidadeMedida = 'un3';

  }


  @Input() indicadoresRegistrados: IndicadorRegistro[] = [
    this.indicador1,this.indicador2,this.indicador3
  ]

  ngOnInit(): void {
  }

}
